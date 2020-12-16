import React from 'react';
import { StyleSheet } from 'react-native';

import { Button, Block, Text } from '../components';


export default class Welcome extends React.Component {

  static navigationOptions = {
  }


 render(){
   return (
     <Block middle>
       <Text>Login, I dont know if we need this screen, but just in case</Text>
     </Block>
    
   );
 }
 }

const styles = StyleSheet.create({

});