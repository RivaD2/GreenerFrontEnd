import { Image } from 'react-native';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { theme } from '../constants'
import Welcome from '../screens/Welcome.js';
import Login from '../screens/Login';
import About from '../screens/About';
import Collection from '../screens/Collection';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';
// import Explore from '../screens/Explore';
// import Browse from '../screens/Browse';
// import Product from '../screens/Product';
import Settings from '../screens/Settings';


const screens = createStackNavigator({
  Welcome,
  Login,
  About,
  Collection,
  SignUp,
  Forgot,
  // Explore,
  // Browse,
  // Product,
  Settings,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      height: theme.sizes.base * 6,
      backgroundColor: theme.colors.white, // or 'white
      borderBottomColor: "transparent",
      elevation: 0, // for android only
    },
    headerBackImage: <Image source={require('../assets/icons/back.png')} />,
    headerBackTitle: null,
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: theme.sizes.base,    //for iOS multiply the value by 2
      paddingRight: theme.sizes.base,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: theme.sizes.base,
    },
  }
});

export default createAppContainer(screens);