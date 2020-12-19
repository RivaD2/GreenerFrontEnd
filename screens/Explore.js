import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Game from "../components/Game";

import { Card, Badge, Button, Block, Text, Divider } from "../components";
import { theme, mocks } from "../constants";
const BasicSvg = () =>{
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="blue"
      fill="lightblue"
    />
  </svg>}

const { width } = Dimensions.get("window");
import { connect } from 'react-redux';
import { updateUser } from '../store/user.js';

class Explore extends React.Component {
constructor(props){
    super(props);
    this.props = props;
}
    state = {
        plants1: [],
        plants2: [],
        shopPlants: [],
      };

      componentDidMount() {
          this.props.updateUser({"name": 'Bryant'})
        this.setState({ plants1: this.props.plants1 });
        this.setState({ plants2: this.props.plants2});
        this.setState({ shopPlants: this.props.shopPlants});
      }

    render(){
        
        const {profile, navigation} = this.props;
        const { plants1 } = this.state;
        const { plants2 } = this.state;
        const { shopPlants } = this.state;
        const category = navigation.getParam('category');
        const plant = navigation.getParam('plant') || 'plant';
        

        const If = (props) => {
            return props.condition ? props.children : null;
          }

        return (
            <>
            <If condition={category.name === 'Happy Terrarium'}>
            <Block>
                <Text>
            {JSON.stringify(this.props.user)}

                </Text>
            </Block>
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>
                    {category.name}
                    </Text>
                    <Button onPress={() => navigation.navigate("Settings")}>
                        <Image source={profile.avatar} style={styles.avatar} />
                    </Button>
                </Block>
                <Block center middle>
                    
                    <Text>{plant.name}</Text>
                    <Image source={plant.image} />
                    <Text>{plant.status}</Text>    
                </Block>
                
                <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingVertical: theme.sizes.base * 2 }}
                >
                    <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
                    <Block flex={false} row space="between" style={styles.categories}>
                    {plants1.map(plant=> (
                        <TouchableOpacity
                        key={plant.name}
                        onPress={() => navigation.navigate("Explore", { plant })}
                        >
                            <Card center middle shadow style={styles.category}>
                            <Badge
                            margin={[0, 0, 15]}
                            size={50}
                            color="rgba(41,216,143,0.20)"
                            >
                            <Image source={plant.image} />
                            </Badge>
                            <Text medium height={20}>
                            {plant.name}
                            </Text>
                            <Text gray caption>
                            {plant.description} 
                            </Text>
                            </Card>
                        </TouchableOpacity>
                        ))}
                    </Block>
                </ScrollView>

            </Block>
            </If>


            {/* If lucky terrarium */}
            
            
            
            <If condition={category.name === 'Lucky Terrarium'}>
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>
                    {category.name}
                    </Text>
                    <Button onPress={() => navigation.navigate("Settings")}>
                        <Image source={profile.avatar} style={styles.avatar} />
                    </Button>
                </Block>
                <Block center middle>
                    
                    <Text>{plant.name}</Text>
                    <Image source={plant.image} />
                    <Text>{plant.status}</Text>    
                    
                </Block>
                <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingVertical: theme.sizes.base * 2 }}
                >
                    <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
                    <Block flex={false} row space="between" style={styles.categories}>
                    {plants2.map(plant=> (
                        <TouchableOpacity
                        key={plant.name}
                        onPress={() => navigation.navigate("Explore", { plant })}
                        >
                            <Card center middle shadow style={styles.category}>
                            <Badge
                            margin={[0, 0, 15]}
                            size={50}
                            color="rgba(41,216,143,0.20)"
                            >
                            <Image source={plant.image} />
                            </Badge>
                            <Text medium height={20}>
                            {plant.name}
                            </Text>
                            <Text gray caption>
                            {plant.description} 
                            </Text>
                            </Card>
                        </TouchableOpacity>
                        ))}
                    </Block>
                </ScrollView>

            </Block>
            </If>

            {/* Store */}

            <If condition={category.name === 'Shop'}>
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>
                    {category.name}
                    </Text>
                    <Button onPress={() => navigation.navigate("Settings")}>
                        <Image source={profile.avatar} style={styles.avatar} />
                    </Button>
                </Block>
                

                <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingVertical: theme.sizes.base * 2 }}
                >

                <Block center middle>
                    
                    <Text>{plant.name}</Text>
                    <Image source={plant.image} />
                    <Text>{plant.price}</Text>   
                </Block>

                <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
                
                    <Block flex={false} row space="between" style={styles.categories}>
                    {shopPlants.map(plant=> (
                        <TouchableOpacity
                        key={plant.name}
                        onPress={() => navigation.navigate("Explore", { plant })}
                        >
                            <Card center middle shadow style={styles.category}>
                            <Badge
                            margin={[0, 0, 15]}
                            size={50}
                            color="rgba(41,216,143,0.20)"
                            >
                            <Image source={plant.image} />
                            </Badge>
                            <Text medium height={20}>
                            {plant.name}
                            </Text>
                            <Text gray caption>
                            {plant.description} 
                            </Text>
                            </Card>
                        </TouchableOpacity>
                        ))}
                    </Block>
                </ScrollView>

            </Block>
            </If>

            {/* tic tack toe */}

            <If condition={category.name === 'Tic Tac Toe'}>
            <Block center>
                        <Game />
            </Block>
            </If>


            </>
        );
    }
  
}

const mapStateToProps = (state) => ( {
    user: state.user,
  })
  
  const mapDispatchToProps = ({
    updateUser
  })
  export default connect(mapStateToProps, mapDispatchToProps)(Explore);

Explore.defaultProps = {
    profile: mocks.profile,
    plants1: mocks.plants1,
    plants2: mocks.plants2,
    shopPlants: mocks.shopPlants
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