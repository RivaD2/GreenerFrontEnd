import React, { Component } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";
import { connect } from 'react-redux';
import { updateUser } from '../store/user.js';
import { setDefaultUserData } from '../Axios.js';
import { signUserUp } from '../Axios.js';
class SignUp extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    errors: [],
    loading: false
  };

  componentDidUpdate(){
    
  }

  async handleSignUp() {
    const { navigation } = this.props;
    const { username, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!username) errors.push("username");
    if (!password) errors.push("password");

    this.setState({ errors, loading: false });

    if (!errors.length) {
      /// Pushing new USER to API
      let addedUser = await signUserUp({"name": this.state.username, "password": this.state.password})


 
          console.log('Sent Json', json);
          delete json.results.password;
          delete json.results.role;
          this.setState({...this.state, user: addedUser})
          this.props.updateUser(addedUser);
        
        if(this.state.username === this.props.user.name){
          // setDefaultUserData(this.props.user._id);
          Alert.alert(
            "Success!",
            `${this.props.user._id} account has been created`,
            [
              {
                text: "Continue",
                onPress: () => {
                  navigation.navigate("Collection");
                }
              }
            ],
            { cancelable: false }
          )
        }
      }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Sign Up
          </Text>
          <Text>
            {/* {this.state.username} */}
            {/* {this.state.password} */}
            i am the redux user
            {JSON.stringify(this.props.user)}
            ------------------
            i am the state user
            {JSON.stringify(this.state.user)}
          </Text>
          <Block middle>
            <Input
              label="Username"
              error={hasErrors("username")}
              style={[styles.input, hasErrors("username")]}
              defaultValue={this.state.username}
              onChangeText={text => this.setState({ username: text })}
            />
            <Input
              secure
              label="Password"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button gradient onPress={async() => await this.handleSignUp()}>
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
}
const mapStateToProps = (state) => ( {
  user: state.user,
})

const mapDispatchToProps = ({
  updateUser
})
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

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