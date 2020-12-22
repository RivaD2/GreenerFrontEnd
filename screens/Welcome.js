import React from 'react';
import {Button, Block, Text} from '../components';
import {theme} from '../constants'
import {StyleSheet, Dimensions, Animated} from 'react-native';

export default class Welcome extends React.Component {

  scrollX = new Animated.Value(0);
  state = {
    showInstructions: false,
  }

  render() {
    return (
      <Block>
        <Block center bottom flex={0.4}>
          <Text h1 center bold>
            Your fun app:
            <Text h1 primary> Greener.</Text>
          </Text>
          <Text h3 gray2 style={{marginTop: theme.sizes.padding / 2}}>
            Enjoy the experience.
          </Text>
        </Block>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
          <Button gradient onPress={() => this.props.navigation.navigate('Login')}>
            <Text center semibold white>Login</Text>
          </Button>
          <Button shadow onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text center semibold>Signup</Text>
          </Button>
        </Block>
      </Block>
    );
  }
}

Welcome.defaultProps = {
  illustrations: [
    {id: 1, source: require('../assets/images/illustration_1.png')},
    {id: 2, source: require('../assets/images/illustration_2.png')},
    {id: 3, source: require('../assets/images/illustration_3.png')},
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepsContainer: {
    position: 'absolute',
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
});