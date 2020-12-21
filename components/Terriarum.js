import React from 'react';
import {
    Image,
    ScrollView,
    TouchableOpacity
  } from "react-native";
import {Card, Badge, Button, Block, Text, Divider} from "../components";
import {updateUserDB} from '../Axios'
import {theme} from "../constants";
// Notes: Step 1: Make an arr of buttons to iterate over
         // Step2: Disable buttons that aren't pressed through each iteration
        // Step 3: Track if specific button is currently selected using a state value

import { connect } from 'react-redux';
import { updateUser } from '../store/user.js';
class Terrarium extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedButton: undefined,
            category: []
        }
        this.buttons = [{
            id: 'water',
            name: "Water Plant",
            tip: 'water it'
        },
        {
            id: 'talk',
            name: "Talk to Plant",
            tip:'talk to it'
        },
        {
            id: 'sunlight',
            name: "Sunlight",
            tip: 'give it some sun'
        }]
    }

    componentWillMount(){
        console.log('terrarium category array',this.props.categories)
    }

    onButtonPress = (button) => {
        // Make it so when button is clicked, button is set in state
        // I am setting button to state so I can dynamically render the tips
        this.setState({
            selectedButton: button
        })
    }
    onPlantSelect = (plant) => {
        // If no button is selected, do nothing
        if(this.state.selectedButton === undefined) {
            return
        }
        const {user} = this.props;
        user.currency++
        updateUserDB(user._id, {
            currency: user.currency
        }).then(updatedUser => {
            this.props.updateUser(updatedUser);
        })
        this.setState({
            selectedButton: undefined
        })
    }
    render() {
        // deconstructing props so I don't have to use this.props a trillion times
        const {styles, name, plants, profile} = this.props;
        return (
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>
                      {name}
                    </Text>
                    <Button onPress={() => this.props.navigation.navigate("Settings")}>
                        <Image source={profile.avatar} style={styles.avatar} />
                    </Button>
                </Block>
                <Block flex={false} row center space="between" style={styles.actionButtons}>
                    {this.buttons.map(button => (
                        <Button key={button.id} style={{
                            width: 100
                        }}gradient={button === this.state.selectedButton} onPress={() =>{
                            this.onButtonPress(button)
                        }}>
                            <Text bold center>
                              {button.name} 
                            </Text>
                        </Button>
                    ))}
                </Block>
                {/* displaying tip below buttons */}
                <Block flex={false} row style={styles.header}>
                  {this.state.selectedButton !== undefined && (
                      <Text h3> Click on your plant to {this.state.selectedButton.tip}.</Text>
                      )}
                </Block>
                <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingBottom: theme.sizes.base * 2 }}
                >
                    <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
                    <Block flex={false} row space="between" style={styles.categories}>
                    {plants.map(plant => (
                        <TouchableOpacity
                        key={plant.name}
                        onPress={() => {this.onPlantSelect(plant)}}
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
                            </Card>
                        </TouchableOpacity>
                        ))}
                    </Block>
                </ScrollView>
            </Block>
        )
    }
}

const mapStateToProps = (state) => ( {
    user: state.user.user,
    plants: state.plants.plants1,
  })
  
  const mapDispatchToProps = ({
      updateUser
  })
  export default connect(mapStateToProps, mapDispatchToProps)(Terrarium);