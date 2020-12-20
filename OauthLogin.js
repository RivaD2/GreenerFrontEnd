import React, {Component} from "react";
//import React, { useEffect, useState } from 'react';
import * as Google from 'expo-google-app-auth';
import {Text, View, StyleSheet, Button } from 'react-native';
import Login from './screens/Login';
import { getUserData } from './Axios.js';
import { signUserUp } from './Axios.js';
import { signUserIn } from './Axios.js';


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
    constructor(props){
        super(props);
        this.props = props;
    }
  state = initialState;
  signInWithGoogle = async () => {
      try {
          const result = await Google.logInAsync ({
              iosClientId: IOS_CLIENT_ID,
              success: ['profile', 'email']
          })
          if(result.type === 'success') {
            const userRequest = await getUserData(result.user.givenName);
            const userResult = await userRequest.json();
            // this.props
            if(!userResult){
                let user = await signUserUp({"name": result.user.givenName, "password": "@Test123", currency: 0 })
                let userBody = await user.json();
                delete userBody.results.password;
                this.props.updateUser(userBody.results)
            }else if (userResult){
                delete userResult.password
                this.props.updateUser(userResult);
            }

              console.log('LoginScreen.js', result.user.givenName);
              this.props.navigation.navigate('Collection', {
                  username: result.user.givenName
              })
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
          <View style={styles.container}>
              <Button title="Login with Google" onPress={this.signInWithGoogle}/>
              {/* <Text>
                  {JSON.stringify(this.props.user)}
              </Text> */}
          </View>
      )
  }
}
const mapStateToProps = (state) => ( {
    user: state.user,
  })
  
  const mapDispatchToProps = ({
    updateUser,
  })

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center', 
   }
})
