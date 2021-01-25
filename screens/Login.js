import React, {Component} from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Alert
} from "react-native";
import {Button, Block, Input, Text} from "../components";
import {theme} from "../constants";
import OAuth from '../components/OauthLogin';
import base64 from 'base-64';
import {signUserIn} from '../Axios.js';
import {connect} from 'react-redux';
import {updateUser} from '../store/user.js';

let currency = 5;
class Login extends Component {
  constructor(props){
    super(props);
    this.props = props;
    this.handleLogin.bind(this);
  }
  state = {
    username: '',
    password: '',
    errors: [],
    loading: false,
  };
  async handleLogin(){
    const {navigation} = this.props;
    const {username, password} = this.state;
    const errors = [];
    Keyboard.dismiss();

    this.setState({ ...this.state, loading: true });
    this.setState({ ...this.state, loading: false });
    let encodedString = base64.encode(`${this.state.username}:${this.state.password}`)
    const user = await signUserIn(encodedString);
    this.props.updateUser(user.user);
    
    if(this.props.user.name === this.state.username){
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
        {cancelable: false}
      );
    }
    else{
      Alert.alert(
        "Failed!",
        "User Credentials do not match",
        [{
            text: "Try Again",
            onPress: () => {   
            }
          }],
        {cancelable: false}
      );
    }
  }
  render() {
    const {navigation} = this.props;
    const {loading, errors} = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
    
    return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Block middle>
          <Input
              label="Username"
              error={hasErrors("username")}
              style={[styles.input, hasErrors("username")]}
              value={this.state.username}
              onChangeText={text => this.setState({username: text})}
            />
            <Input
              secure
              label="Password"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              value={this.state.password}
              onChangeText={text => this.setState({password: text})}
            />
            <Button gradient onPress={() => this.handleLogin()}>
              {loading ? (
                <ActivityIndicator size="small" color="white"/>
              ) : (
                  <Text bold white center>
                    Login
                  </Text>
                )}
            </Button>
            <OAuth navigation={this.props.navigation}/>
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
  updateUser,
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);

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

