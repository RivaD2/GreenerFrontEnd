import React from "react";
import React, { useEffect, useState } from 'react';
import * as GoogleSignin from 'expo-google-sign-in';
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native';
import * as AppAuth from 'expo-app-auth';
// import Linking from 'expo';
// const prefix = Linking.makeUrl('/');
// import { View, Text, Image, StyleSheet, Button, Alert} from 'react-native';

export default function Login(){
  let [authState, setAuthState] = useState(null);

  useEffect(() => {
    (async () => {
      let cachedAuth = await getCachedAuthAsync();
      if(cachedAuth && !authState) {
        setAuthState(cachedAuth);
      }
    })();
  }, []);

  return(
    <View style={StyleSheet.container}>
      <Text>Greener</Text>
      <Button
        title="Sign in with Google"
        onPress={async () => {
          const _authState = await GoogleSignin.signInAsync();
          setAuthState(_authState);
        }}
      />
      <Button
        title="Sign Out"
        onPress={async () => {
          await signOutAsync(authState);
          setAuthState(null);
        }}
      />
      <Text>{JSON.stringify(authState, null, 2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

let config = {
  issuer: 'https://accounts.google.com',
  scopes: ['openid', 'profile'],
  clientId: '872509857984-6vtqndded3e1dot20un6otbo7gfppi6g.apps.googleusercontent.com'
}
//assuming this is IOS key
let storageKey = '@greener:AIzaSyAV9kmquBOsfQdGwh8Nb2-QgltGOgLG1lg';

const signInAsync = async() => {
  let authState = await AppAuth.authAsync(config);
  // Caching the token
  await cacheAuthAsync(authState);
  console.log('signInAsync', authState);
  return authState;
}

const cacheAuthAsync = async authState => {
  // Writing the token to local storage so when app loads, it tries to read token out of storage
  return await AsyncStorage.setItem(StorageKey, JSON.stringify(authState));
}

const getCachedAuthAsync = async() => {
  // Getting token from storage, parsing it, and checking if it's valid/expired
  let value = await AsyncStorage.getItem(StorageKey);
  let authState = JSON.parse(value);
  console.log('getCacheAuthAsync', authState);
  if(authState) {
    if(checkIfTokenExpired(authState)) {
      return refreshAuthAsync(authState);
    } else {
      return authState;
    }
  }
  return null;
}
// Function to check if token is expired
const checkIfTokenExpiredAsync = ({accessTokenExpirationDate}) => {
  return new Date(accessTokenExpirationDate) < new Date();
} 
// If token is expired, check with server to see if user can stay signed in
const refreshAuthAsync = async({ refreshToken })=> {
  let authState = await AppAuth.refreshAsync(config, refreshToken);
  console.log('refreshAuth', authState);
  await cacheAuthAsync(authState);
  return authState;
}

const signOutAsync = async({ accessToken }) => {
  try {
    await AppAuth.revokeAsync(config, {
      token: accessToken,
      isClientIdProvided: true,
    });
    await AsyncStorage.removeItem(StorageKey);
    return null;
  } catch (e) {
    alert(`Failed to revoke token: ${e.message}`);
  }
}

export {
  signInAsync,
  getCachedAuthAsync,
  signOutAsync
}

















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