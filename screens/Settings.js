import React, { Component } from "react";
import { Image, StyleSheet, ScrollView, TextInput } from "react-native";
import Slider from "react-native-slider";

import { Divider, Button, Block, Text, Switch } from "../components";
import { theme, mocks } from "../constants";

import { connect } from 'react-redux';

class Settings extends Component {
constructor(props){
    super(props);
    this.props = props;
}

    state = {
        budget: 850,
        monthly: 1700,
        notifications: true,
        newsletter: false,
        editing: null,
        profile: {}
    };

    componentDidMount() {
        this.setState({ profile: this.props.profile });
    }

    handleEdit(name, text) {
        const { profile } = this.state;
        profile[name] = text;

        this.setState({ profile });
    }

    toggleEdit(name) {
        const { editing } = this.state;
        this.setState({ editing: !editing ? name : null });
    }

    renderEdit(name) {
        const { profile, editing } = this.state;

        if (editing === name) {
            return (
                <TextInput
                    defaultValue={profile[name]}
                    onChangeText={text => this.handleEdit([name], text)}
                />
            );
        }

        return <Text bold>{profile[name]}</Text>;
    }

    render() {
        const { profile, editing } = this.state;

        return (
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>
                        Settings
          </Text>
                    <Button>
                        <Image source={profile.avatar} style={styles.avatar} />
                    </Button>
                </Block>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <Block style={styles.inputs}>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text gray2 style={{ marginBottom: 10 }}>
                                    Username
                </Text>
                <Text bold>{this.props.user.name}</Text>
                            </Block>
                            <Text
                                medium
                                secondary
                                onPress={() => this.toggleEdit("username")}
                            >   
                                {editing === "username" ? "Save" : "Edit"}
                            </Text>
                        </Block>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text gray2 style={{ marginBottom: 10 }}>
                                    Location
                </Text>
                                {this.renderEdit("location")}
                            </Block>
                            <Text
                                medium
                                secondary
                                onPress={() => this.toggleEdit("location")}
                            >
                                {editing === "location" ? "Save" : "Edit"}
                            </Text>
                        </Block>
                        <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
                            <Block>
                                <Text gray2 style={{ marginBottom: 10 }}>
                                    E-mail
                </Text>
                                <Text bold>{profile.email}</Text>
                            </Block>
                        </Block>
                    </Block>

                    <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />

                    <Block style={styles.sliders}>
                        <Block>

                            <Text gray2>Plants</Text>
                            <Text bold>{this.props.plants.length}</Text>

                        </Block>
                        <Block>
                            <Text gray2 style={{ marginBottom: 10 }}>Plant Cash</Text>
                            <Text bold>${this.props.user.currency}</Text>
                        </Block>
                    </Block>



                    <Divider />

                    <Block style={styles.toggles}>
                        <Block
                            row
                            center
                            space="between"
                            style={{ marginBottom: theme.sizes.base * 2 }}
                        >
                            <Text gray2>Notifications</Text>
                            <Switch
                                value={this.state.notifications}
                                onValueChange={value => this.setState({ notifications: value })}
                            />
                        </Block>

                        <Block
                            row
                            center
                            space="between"
                            style={{ marginBottom: theme.sizes.base * 2 }}
                        >
                            <Text gray2>Newsletter</Text>
                            <Switch
                                value={this.state.newsletter}
                                onValueChange={value => this.setState({ newsletter: value })}
                            />
                        </Block>
                    </Block>
                </ScrollView>
            </Block>
        );
    }
}

Settings.defaultProps = {
    profile: mocks.profile
};

const mapStateToProps = (state) => ( {
    user: state.user.user,
    plants: state.plants.plants1,
    terrariums: state.terrarium.terrarium1,
  })
  
  const mapDispatchToProps = ({

  })
  export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2
    },
    inputs: {
        marginTop: theme.sizes.base * 0.7,
        paddingHorizontal: theme.sizes.base * 2
    },
    inputRow: {
        alignItems: "flex-end"
    },
    sliders: {
        marginTop: theme.sizes.base * 0.7,
        paddingHorizontal: theme.sizes.base * 2
    },
    thumb: {
        width: theme.sizes.base,
        height: theme.sizes.base,
        borderRadius: theme.sizes.base,
        borderColor: "white",
        borderWidth: 3,
        backgroundColor: theme.colors.secondary
    },
    toggles: {
        paddingHorizontal: theme.sizes.base * 2
    }
});