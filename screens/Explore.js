import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { Card, Badge, Button, Block, Text, Divider } from "../components";
import { theme, mocks } from "../constants";
import { plants1 } from "../constants/mocks";
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

export default function Explore(props){
const [plants1, setPlants1] = useState([]);
const [plants2, setPlants2] = useState([]);
const [terrarium1, setTerrarium1] = useState({});
const [shopPlants, setShopPlants] = useStaTE([]);

useEffect(() => {
    let userPlantArray = mocks.getUserPlants(mocks.profile.id);
    for(let i = 0; i < userPlantArray.length; i++){
        if(plants1.length <= 3){
            this.setPlants1([...plants1, userPlantArray[i]])
        }
        else if(plants2.length <= 5){
          this.setPlants2([...plants2, userPlantArray[i]])
        }
    }
},[])

        
        const {profile, navigation} = props;
        const category = navigation.getParam('category');
        const plant = navigation.getParam('plant') || 'plant';
        

        const If = (props) => {
            return props.condition ? props.children : null;
          }

        return (
            <>
            <If condition={category.name === 'Happy Terrarium'}>
            
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
            </Block>
            </If>


            </>
        );
  
}

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