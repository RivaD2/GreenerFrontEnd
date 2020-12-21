import React, {Component} from "react";
import * as Google from 'expo-google-app-auth';
import { Button, Text } from "./components";

const IOS_CLIENT_ID = '872509857984-nv75qdpnj41i8qjfeb5pplnncmnd6stv.apps.googleusercontent.com';
const initialState = {
  username: '',
  password: '',
  errors: {},
  isAuthorized: false,
};

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
  state = initialState;
  signInWithGoogle = async () => {
      try {
          const result = await Google.logInAsync ({
              iosClientId: IOS_CLIENT_ID,
              success: ['profile', 'email']
          })
          if(result.type === 'success') {
              console.log('LoginScreen.js', result.user.givenName);
              this.props.navigation.navigate('Collection')
              console.log('accessToken', result.accessToken)
              return result.accessToken;
          } else {
              return {cancelled: true};
          }
      } catch (err){
          console.log('LoginScreen', err);
          return {error: true}
      }
    } 

  render() {
      return(
          <Button onPress={this.signInWithGoogle}>
               <Text center semibold>Login with Google</Text>
          </Button>
      )
  }
}