import React, {Component} from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import {Button, Block, Input, Text} from "../components";
import {theme} from "../constants";
import {connect} from 'react-redux';
import {updateUser} from '../store/user.js';
import {getPlant, addPlantToUser, getTerrarium, addTerrariumToUser} from '../Axios.js';

class SignUp extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    errors: [],
    loading: false
  };
  handleSignUp() {
    const {navigation} = this.props;
    const {username, password} = this.state;
    const errors = [];
    Keyboard.dismiss();

    this.setState({ loading: true });
    if (!username) errors.push("username");
    if (!password) errors.push("password");

    this.setState({errors, loading: false});
    if (!errors.length) {
      fetch('https://reactnative-server-2020.herokuapp.com/api/v1/user/signUp', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({ 
          name: username,
          password: password,
          role: "user",
          currency: 0
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          delete json.results.password;
          this.props.updateUser(json.results);
          getPlant().then(results => {
            addPlantToUser(this.props.user._id, results._id).then(result => {
            })
          })
          getTerrarium().then(terra => {
            addTerrariumToUser(this.props.user._id, terra._id).then(userTerra => {

            })
          })
          if(this.state.username === this.props.user.name){
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
            )
          }
        })

    }
  }

  render() {
    const {navigation} = this.props;
    const {loading, errors} = this.state;
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
              defaultValue={this.state.username}
              onChangeText={text => this.setState({username: text})}
            />
            <Input
              secure
              label="Password"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({password: text})}
            />
            <Button gradient onPress={() => this.handleSignUp()}>
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
                style={{textDecorationLine: "underline"}}
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
const mapStateToProps = (state) => ({
  user: state.user.user,
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