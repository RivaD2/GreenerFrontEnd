import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";
import { connect } from 'react-redux';
const { width } = Dimensions.get("window");
import { setPlants } from '../store/plants.js';
import { setTerrarium } from '../store/terrarium.js';

import { getUserPlants } from '../Axios.js';
import { getUserTerrariums } from '../Axios.js';

class Browse extends Component {
  state = {
    active: "Everything",
    categories: []
  };

  componentDidMount() {
    this.setState({ categories: this.props.categories });
    getUserPlants(this.props.user._id).then(results => {
      console.log('user plants', results)
      this.props.setPlants(results);
    })
    getUserTerrariums(this.props.user._id).then(userTerra => {
      let savedTerra = [];
      for(let i = 0; i < userTerra.length; i++){
        savedTerra.push({...userTerra, tags: ['terrarium', 'everything'], image: require('../assets/images/terrarium_1.png')}); 
      }
      this.props.setTerrarium(savedTerra);
    })

  }

  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  };

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { profile, navigation } = this.props;
    const { categories } = this.state;
    const tabs = ['Everything'];

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            My Garden
          </Text>
          <Button onPress={() => navigation.navigate("Settings")}>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>

        <Block flex={false} row style={styles.tabs}>
          {tabs.map(tab => this.renderTab(tab))}
        </Block>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2 }}
        >
          <Block flex={false} row space="between" style={styles.categories}>
            {categories.map(category => (
              <TouchableOpacity
                key={category.name}
                onPress={() => navigation.navigate("Explore", { category })}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge
                    margin={[0, 0, 15]}
                    size={50}
                    color="rgba(41,216,143,0.20)"
                  >
                    <Image source={category.image} />
                  </Badge>
                  <Text medium height={20}>
                    {category.name}
                  </Text>
                  <Text gray caption>
                    {category.description} 
                  </Text>
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}
const mapStateToProps = (state) => ( {
  user: state.user.user,
  plants: state.plants.plants1,
  terrariums: state.terrarium.terrarium1,
})

const mapDispatchToProps = ({
  setPlants,
  setTerrarium
})
export default connect(mapStateToProps, mapDispatchToProps)(Browse);

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories
};


const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  avatar: {
    height: theme.sizes.base * 3.2,
    width: theme.sizes.base * 3.2,
    backgroundColor: 'transparent',
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2
  }
});