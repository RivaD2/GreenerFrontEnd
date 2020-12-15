import React from 'react';
import { Button, Block, Text } from '../components';
import { theme } from '../constants'
import { StyleSheet, FlatList, Image, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');



export default class Welcome extends React.Component {
  static navigationOptions = {
    header : null
  }

  state = {
  }

  renderIllustrations(){
    const { illustrations } = this.props;
    return(
<FlatList
   horizontal
   pagingEnabled
   scrollEnabled
   showsHorizontalScrollIndicator={false}
   scrollEventThrottle={16}
   snapToAlignment="center"
   data={illustrations}
   extraDate={this.state}
   keyExtractor={(item, index) => `${item.id}`}
   renderItem={({ item }) => (
     <Image
       source={item.source}
       resizeMode="contain"
       style={{ width, height: height / 2, overflow: 'visible' }}
     />
   )}
 />
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
            Your fun app:
            <Text h1 primary> Greener.</Text>
          </Text>
          <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
            Enjoy the experience.
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

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require('../assets/images/illustration_1.png') },
    { id: 2, source: require('../assets/images/illustration_2.png') },
    { id: 3, source: require('../assets/images/illustration_3.png') },
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});