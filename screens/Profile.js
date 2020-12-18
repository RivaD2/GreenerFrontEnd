import React, {Component } from 'react';
import {Text, View, StyleSheet, Button } from 'react-native';

export default class ProfileScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>
                     Welcome, {this.props.navigation.getParam('username')}
                </Text>
                <Button title="Sign Out" onPress={() => this.props.navigation.navigate('Login')}/>
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