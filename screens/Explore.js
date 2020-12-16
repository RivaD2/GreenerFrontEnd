import React from 'react';
import { StyleSheet } from 'react-native';

import { Button, Block, Text} from '../components';


export default class Explore extends React.Component {

    render(){
        const {navigation} = this.props
        const category = navigation.getParam('category');
        return (
            <Block center middle>
                 <Text>{category.name}</Text>
            </Block>
        
        );
    }
  
}