import React, { useState, useEffect } from "react";
import { Image, StyleSheet, ScrollView, TextInput } from "react-native";
import Slider from "react-native-slider";

import { Divider, Button, Block, Text, Switch } from "../components";
import { theme, mocks } from "../constants";

function Settings(props){
    state = {
        budget: 850,
        monthly: 1700,
        notifications: true,
        newsletter: false,
        editing: null,
        profile: {}
    };
    const [budget, setBudget] = useState(850);
    const [monthly, setMonthly] = useState(1700);
    const [notifcations, setNotifications] = useState(true);
    const [editing, setEditing] = useState(null);
    const [profile, setProfile] = useState({});
    const [newsletter, setNewsletter] = useState(false);

    useEffect(() => {
        setProfile(props.profile);
    }, [])

    function handleEdit(name, text) {
        const { profile } = this.state;
        profile[name] = text;

        this.setState({ profile });
    }

    function toggleEdit(name) {
        setEditing(!editing ? name : null);
    }

    function renderEdit(name) {

        if (editing === name) {
            return (
                <TextInput
                    defaultValue={profile[name]}
                    onChangeText={text => handleEdit([name], text)}
                />
            );
        }

        return <Text bold>{profile[name]}</Text>;
    }


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
                                {this.renderEdit("username")}
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
                                {renderEdit("location")}
                            </Block>
                            <Text
                                medium
                                secondary
                                onPress={() => toggleEdit("location")}
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
                            <Text caption gray2 right>{profile.plants}</Text>

                        </Block>
                        <Block>
                            <Text gray2 style={{ marginBottom: 10 }}>Plant Cash</Text>
                            <Text bold>${profile.funds}</Text>
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
                                onValueChange={value => setNotifications(value)}
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
                                onValueChange={value => setNewsletter(value)}
                            />
                        </Block>
                    </Block>
                </ScrollView>
            </Block>
        );
}

Settings.defaultProps = {
    profile: mocks.profile
};

export default Settings;

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