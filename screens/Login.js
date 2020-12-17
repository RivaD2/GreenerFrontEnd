import React, {Component} from "react";
//import React, { useEffect, useState } from 'react';
import * as GoogleSignin from 'expo-google-sign-in';
import * as AppAuth from 'expo-app-auth';
import * as Google from 'expo-google-app-auth';
import {Text, View, StyleSheet, Button } from 'react-native';

const IOS_CLIENT_ID = '872509857984-nv75qdpnj41i8qjfeb5pplnncmnd6stv.apps.googleusercontent.com';

export default class LoginScreen extends Component {
    signInWithGoogle = async () => {
        try {
            const result = await Google.logInAsync ({
                iosClientId: IOS_CLIENT_ID,
                success: ['profile', 'email']
            })
            if(result.type === 'success') {
                console.log('LoginScreen.js', result.user.givenName);
                this.props.navigation.navigate('Collection', {
                    username: result.user.givenName
                })
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center', 
   }
})


// ==============Rob's Code

// import {
//   ActivityIndicator,
//   Keyboard,
//   KeyboardAvoidingView,
//   StyleSheet
// } from "react-native";

// import { Button, Block, Input, Text } from "../components";
// import { theme } from "../constants";

// const VALID_EMAIL = "test@test.com";
// const VALID_PASSWORD = "12345";

// export default class Login extends Component {
//   state = {
//     email: VALID_EMAIL,
//     password: VALID_PASSWORD,
//     errors: [],
//     loading: false
//   };

//   handleLogin() {
//     const { navigation } = this.props;
//     const { email, password } = this.state;
//     const errors = [];

//     Keyboard.dismiss();
//     this.setState({ loading: true });

//     // check with backend API or with some static data
//     if (email !== VALID_EMAIL) {
//       errors.push("email");
//     }
//     if (password !== VALID_PASSWORD) {
//       errors.push("password");
//     }

//     this.setState({ errors, loading: false });

//     if (!errors.length) {
//       navigation.navigate("Browse");
//     }
//   }

//   render() {
//     const { navigation } = this.props;
//     const { loading, errors } = this.state;
//     const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

//     return (
//       <KeyboardAvoidingView style={styles.login} behavior="padding">
//         <Block padding={[0, theme.sizes.base * 2]}>
//           <Text h1 bold>
//             Login... If we even need this page
//           </Text>
//           <Block middle>
//             <Input
//               label="Email"
//               error={hasErrors("email")}
//               style={[styles.input, hasErrors("email")]}
//               defaultValue={this.state.email}
//               onChangeText={text => this.setState({ email: text })}
//             />
//             <Input
//               secure
//               label="Password"
//               error={hasErrors("password")}
//               style={[styles.input, hasErrors("password")]}
//               defaultValue={this.state.password}
//               onChangeText={text => this.setState({ password: text })}
//             />
//             <Button gradient onPress={() => this.handleLogin()}>
//               {loading ? (
//                 <ActivityIndicator size="small" color="white" />
//               ) : (
//                 <Text bold white center>
//                   Login
//                 </Text>
//               )}
//             </Button>

//             <Button gradient onPress={() => this.props.navigation.navigate('Collection')}>
//             <Text center semibold white>BYPASS</Text>
//           </Button>
//           </Block>
//         </Block>
//       </KeyboardAvoidingView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   login: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   input: {
//     borderRadius: 0,
//     borderWidth: 0,
//     borderBottomColor: theme.colors.gray2,
//     borderBottomWidth: StyleSheet.hairlineWidth
//   },
//   hasErrors: {
//     borderBottomColor: theme.colors.accent
//   }
// });