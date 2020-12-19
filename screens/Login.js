
import React, { useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Alert
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const VALID_USERNAME = "Al";
const VALID_PASSWORD = "123456";
let currency = 5;

export default function Login(props){
  state = {
    username: VALID_USERNAME,
    password: VALID_PASSWORD,
    errors: [],
    loading: false
  };
  const [username, setUsername] = useState(VALID_USERNAME);
  const [password, setPassword] = useState(VALID_PASSWORD);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});


  function handleLogin() {
    const { navigation } = props;
    const errorsz = [];

    Keyboard.dismiss();
    setLoading(true);

    // check with backend API or with some static data
    if (username !== VALID_USERNAME) {
      setErrors([...errors, 'username']);
    }
    if (password !== VALID_PASSWORD) {
      setErrors([...errors, 'password']);
    }

    // this.setState({ errors, loading: false });
    setErrors(errorsz)
    setLoading(false);

    if (!errors.length) {
      /// Pushing new USER to API
      

      fetch('http://localhost:3001/api/v1/user/signIn', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          
          name: "Al",
          password: "123456",

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
        "You are logged in.",
  
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
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Login... If we even need this page
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
            <Button gradient onPress={() => handleLogin()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                  <Text bold white center>
                    Login
                  </Text>
                )}
            </Button>

            <Button onPress={() => navigation.navigate('Forgot')}>
              <Text gray caption center style={{ textDecorationLine: 'underline' }}>
                Forgot your password?
              </Text>
            </Button>
            <Button gradient >
              <Text center semibold white>Google Oauth</Text>
            </Button>
            <Button gradient onPress={() => props.navigation.navigate('Collection')}>
              <Text center semibold white>BYPASS</Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  login: {
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

