import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
const plantImage = require('../assets/images/plant_one_big_happy.png');
const terrariumImage = require('../assets/images/terrarium_1.png');
import {Card, Badge, Button, Block, Text} from "../components";
import {theme, mocks} from "../constants";
import {connect} from 'react-redux';
const {width} = Dimensions.get("window");
import {setPlants} from '../store/plants.js';
import {setTerrarium} from '../store/terrarium.js';
import {getUserPlants, getUserTerrariums} from '../Axios.js';

const mockUser = {
  name:'Riva Davidowski',
  _id: 2
}

class Browse extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: "Everything",
      categories: [{name: 'stuff', _id: "iamfake", tags: ['everything']}],
    };
  }

  componentDidMount() {
    //this.setState({ categories: this.props.categories });
    getUserTerrariums(mockUser._id).then(userTerra => {
      let newTerraResult = userTerra;
      console.log('newTerraResult', userTerra);
      if(!newTerraResult) newTerraResult = [{}];
      newTerraResult[0].image = terrariumImage;
      newTerraResult[0].name = 'Happy Terrarium';
      newTerraResult[0].tags = ['Your Terrarium'];
      console.log('in getUserTerrariums', newTerraResult[0].tags);
      this.props.setTerrarium(newTerraResult);
      this.setState({...this.state, categories: newTerraResult})
    })
    getUserPlants(mockUser._id).then(results => {
      let newPlantResult = results;
      if(!newPlantResult) newPlantResult = [{}];
      console.log('in getUserPlants', results);
      newPlantResult[0].image = plantImage;
      newPlantResult[0].name = newPlantResult[0].type;
      this.props.setPlants(newPlantResult);
    })
    
  }
  handleTab = tab => {
    const { categories } = this.state;
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  };

  render() {
    const { profile, navigation } = this.props;
    const { categories } = this.state;
    const tabs = ['Your Terrarium'];
    let categoryDisplay;
    if(this.state.categories.length > 0){

  categoryDisplay = categories.map(category => {
      return (
      <TouchableOpacity
        key={category._id}
        onPress={() => navigation.navigate("Explore", { category, categories, navigation: this.props.navigation })}
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
          Plants: {category.length} 
        </Text>
      </Card>
      </TouchableOpacity>
      )
    })
  }

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Welcome, {mockUser.name}!
          </Text>
          <Button onPress={() => navigation.navigate("Settings")} style={styles.avatarButton}>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>
        <Block flex={false} row style={styles.tabs}>
          <Text>
          {tabs[0]}
          </Text>
        </Block>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2 }}
        >
          <Block flex={false} row space="between" style={styles.categories}>
            {categoryDisplay}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}
const mapStateToProps = (state) => ({
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
};


const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  avatar: {
    height: theme.sizes.base * 3.2,
    width: theme.sizes.base * 3.2,
    backgroundColor: 'transparent',
    borderRadius: theme.sizes.base * 3.2

  },
  avatarButton: {
    borderRadius: theme.sizes.base * 3.2
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
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2
  }
});