import React from 'react';
import { Button, Block, Text } from '../components';
import { theme } from '../constants'
import { StyleSheet, FlatList, Image, Dimensions, Animated, Modal, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');


export default class Welcome extends React.Component {

  static navigationOptions = {
  }


  scrollX = new Animated.Value(0);

  state = {
    showInstructions: false,
  }

  renderInstructions() {
    return (
      <Modal animationType="slide" visible={this.state.showInstructions}>
        <Block padding={[theme.sizes.padding * 2, theme.sizes.padding]} space="between">
          <Text h2 light>Instructions</Text>

          <ScrollView style={{ marginVertical: theme.sizes.padding }}>

            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
            <Text caption gray height={24} style={{ marginBottom: theme.sizes.base }}>
              1. We can use this or not.
      </Text>
          </ScrollView>
          <Block middle padding={[theme.sizes.base / 2, 0]}>
            <Button gradient onPress={() => this.setState({ showInstructions: false })}>
              <Text center white>I understand</Text>
            </Button>
          </Block>

        </Block>

      </Modal>
    )
  }

  renderIllustrations() {
    const { illustrations } = this.props;
    return (
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
        onScroll={
          Animated.event([{
            nativeEvent: { contentOffset: { x: this.scrollX } }
          }])
        }
      />
    )
  }




  renderSteps() {
    const { illustrations } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });
          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]}
            />
          )
        })}
      </Block>
    )
  }

  render() {
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
            <Text center semibold white>Welcome</Text>
          </Button>
          <Button shadow onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text center semibold>Signup</Text>
          </Button>
          <Button onPress={() => this.setState({ showInstructions: true })}>
            <Text center caption gray>About Greener</Text>
          </Button>
          {this.renderInstructions()}
        </Block>

      </Block>

    );
  }



}

/*

Rendering these images pulled from assets folder

*/

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require('../assets/images/illustration_1.png') },
    { id: 2, source: require('../assets/images/illustration_2.png') },
    { id: 3, source: require('../assets/images/illustration_3.png') },
  ],
};

/*

Styles for the page

*/

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