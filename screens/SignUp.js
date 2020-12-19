import React, { useState } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";

import { Button, Block, Input, Text } from "../components/index.js";
import { theme } from "../constants";

export default function SignUp(props){
  state = {
    email: null,
    username: null,
    password: null,
    errors: [],
    loading: false
  };
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

 function handleSignUp() {
    const { navigation } = props;
    const errorsz = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!username) setErrors([...errors, 'username']);
    if (!password) errors.push("password");

    setErrors[errorsz];
    setLoading(false);

    if (!errors.length) {
      /// Pushing new USER to API
      

      fetch('http://localhost:3001/api/v1/user/signUp', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          
          name: username,
          password: password,
          role: "user",
          currency: 50

        }),
        
      })
        .then((response) => response.json())
        .then((json) => {
          console.log('Sent Json', json);
          setUser(json);
        })
        //
      Alert.alert(
        "Success!",
        "Your account has been created",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("Collection");
            }
          }
        ],
        { cancelable: false }
      );
    }
  }

    const { navigation } = props;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Sign Up
          </Text>
          <Block middle>
            <Input
              label="Username"
              error={hasErrors("username")}
              style={[styles.input, hasErrors("username")]}
              defaultValue={username}
              onChangeText={text => setUsername(text)}
            />
            <Input
              secure
              label="Password"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={password}
              onChangeText={text => setPassword(text)}
            />
            <Button gradient onPress={() => handleSignUp()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Sign Up
                </Text>
              )}
            </Button>

            <Button onPress={() => navigation.navigate("Login")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Back to Login
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});