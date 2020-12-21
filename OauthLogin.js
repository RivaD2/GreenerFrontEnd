import React, {Component} from "react";
import * as Google from 'expo-google-app-auth';
import { Button, Text } from "./components";
import {signInOauthUser} from './Axios';

const IOS_CLIENT_ID = '872509857984-nv75qdpnj41i8qjfeb5pplnncmnd6stv.apps.googleusercontent.com';
const initialState = {
  username: '',
  password: '',
  errors: {},
  isAuthorized: false,
};
import { connect } from 'react-redux';
import { updateUser } from './store/user.js';

class LoginScreen extends Component {
  state = initialState;
  signInWithGoogle = async () => {
      try {
          const result = await Google.logInAsync ({
              iosClientId: IOS_CLIENT_ID,
              success: ['profile', 'email']
          })
          if(result.type === 'success') {
                let user = await signInOauthUser(result.idToken);
                  this.props.updateUser(user);
                  this.props.navigation.navigate('Collection')
              return result.idToken;
          } else {
              return {cancelled: true};
          }
      } catch (err){
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

const mapStateToProps = (state) => ( {
    user: state.user.user,
  })
  
  const mapDispatchToProps = ({
    updateUser
  })
  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);