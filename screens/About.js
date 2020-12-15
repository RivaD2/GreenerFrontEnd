import React from 'react';
import { StyleSheet} from 'react-native';
import { Button, Block, Text } from '../components';
import { theme } from '../constants'

export default class About extends React.Component {

  static navigationOptions = {
    header : null
  }

  renderIllustrations(){
    return(
      <Block>
        <Text>Image</Text>
      </Block>
    )
  }

  renderSteps(){
    return(
      <Block>
        <Text>* * *</Text>
      </Block>
    )
  }

  render(){
    return (
      <Block>
        <Block center bottom flex={0.4}>
          <Text h1 center bold>
            Your Home.
            <Text h1 primary> Greener.</Text>
          </Text>
          <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
            Enjoy the Instructions.
          </Text>
        </Block>
        <Block center middle>
  {this.renderIllustrations()}
  {this.renderSteps()}
</Block>
<Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
  <Button gradient onPress={() => this.props.navigation.navigate('Login')}>
    <Text center semibold white>OAUTH</Text>
  </Button>
  <Button shadow onPress={() => this.props.navigation.navigate('About')}>
    <Text center semibold>About Greener</Text>
  </Button>
</Block>
      </Block>
     
    );
  }


  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});