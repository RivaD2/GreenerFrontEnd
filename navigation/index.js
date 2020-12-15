import { Image } from 'react-native';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome.js';
import Login from '../screens/Login';
import About from '../screens/About';
// import SignUp from '../screens/SignUp';
// import Forgot from '../screens/Forgot';
// import Explore from '../screens/Explore';
// import Browse from '../screens/Browse';
// import Product from '../screens/Product';
// import Settings from '../screens/Settings';


const screens = createStackNavigator({
  Welcome,
  Login,
  About,
  // SignUp,
  // Forgot,
  // Explore,
  // Browse,
  // Product,
  // Settings,
}, {
  defaultNavigationOptions: {
    headerStyle: {},
    headerBackImage: <Image/>,
    headerBackTitle: null,
    headerLeftContainerStyle: {},
    headerRightContainerStyle: {},
  }
});

export default createAppContainer(screens);