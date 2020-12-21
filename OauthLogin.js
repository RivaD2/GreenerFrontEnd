import React, { Component } from "react";
import * as Google from 'expo-google-app-auth';
import { Button, Text } from "./components";
import base64 from 'base-64';

const IOS_CLIENT_ID = '872509857984-nv75qdpnj41i8qjfeb5pplnncmnd6stv.apps.googleusercontent.com';
const initialState = {
    username: '',
    password: '',
    errors: {},
    isAuthorized: false,
    user: {}
};
import { updateUser } from './store/user.js';
import { connect } from 'react-redux';

import { getUserData, signUserIn, signUserUp, getTerrarium, addTerrariumToUser, getPlant, addPlantToUser } from './Axios.js';
class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }
    state = initialState;
    signInWithGoogle = async () => {
        try {
            const result = await Google.logInAsync({
                iosClientId: IOS_CLIENT_ID,
                success: ['profile', 'email']
            })
            if (result.type === 'success') {
                console.log('LoginScreen.js', result.user.givenName);
                getUserData('llll').then(response => {
                    console.log('user fetch', response)
                    if(response) {
                        let encodedString = base64.encode(`${result.user.email}:${result.user.id}`)
                        signUserIn(encodedString).then(res => {
                            this.props.updateUser(res.results)
                            this.props.navigation.navigate('Collection')
                        });
                    }
                    else {
                        signUserUp({ "name": result.user.email, "password": result.user.id, "currency": 0, "role": "user" }).then(userResponse => {
                            this.props.updateUser(userResponse.user);
                            getPlant().then(results => {
                                addPlantToUser(this.props.user._id, results._id).then(result => {

                                })
                            })
                            getTerrarium().then(terra => {
                                addTerrariumToUser(this.props.user._id, terra._id).then(userTerra => {
                                    console.log('user terra', userTerra);
                                })
                            })
                        })
                    }
                })
                console.log('accessToken', result.accessToken)
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (err) {
            console.log('LoginScreen', err);
            return { error: true }
        }
    }
    getUserDataNow = async () => {

    }

    render() {
        return (
            <>
                <Text>
                    {JSON.stringify(this.state.newUser)}
                </Text>
                <Button onPress={this.getUserDataNow}>
                    <Text>
                        Testing
              </Text>
                </Button>
                <Button onPress={() => this.signInWithGoogle}>
                    <Text center semibold>Login with Google</Text>
                </Button>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    plants: state.plants.plants1,
    terrariums: state.terrarium.terrarium1,
})

const mapDispatchToProps = ({
    updateUser
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);