import { Image } from 'react-native';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { theme } from '../constants'
import Welcome from '../screens/Welcome.js';
import Login from '../screens/Login';
import Collection from '../screens/Collection';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';
import Explore from '../screens/Explore';
import  {createSwitchNavigator} from 'react-navigation';
import Settings from '../screens/Settings';
import OAuth from '../components/OauthLogin';

const mainNavigator  = createSwitchNavigator ({
  OAuth: { screen : OAuth },
  Collection: { screen : Collection }
})

const screens = createStackNavigator({
  Welcome,
  Login,
  OAuth,
  Collection,
  SignUp,
  Forgot,
  Explore,
  Settings,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      height: theme.sizes.base * 6,
      backgroundColor: theme.colors.white,
      borderBottomColor: "transparent",
      elevation: 0, 
    },
    headerBackImage:() => <Image source={require('../assets/icons/back.png')} />,
    headerBackTitle: null,
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: theme.sizes.base,    
      paddingRight: theme.sizes.base,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: theme.sizes.base,
    },
  }
});
export default createAppContainer(screens, mainNavigator);