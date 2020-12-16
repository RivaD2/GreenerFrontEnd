import { auto, reduce } from 'async';
import React from 'react';
import { StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import { Button, Block, Text, Card, Badge, Divider } from '../components';
import { theme, mocks } from '../constants';

// Thees Tabs are like Navs to: 
const tabs = ['Products', 'Inspirations', 'Minigame', 'Shop'];
const { width } = Dimensions.get('window');


export default class Browse extends React.Component {

    state = {
        active: 'Plants',
    }


    renderTab(tab) {
        const { active } = this.state;
        const isActive = active === tab;
        return (
            <TouchableOpacity
                key={`tab-${tab}`}
                style={[
                    styles.tab,
                    isActive ? styles.active : null
                ]}
                onPress={() => this.setState({ active: tab })}
            >
                <Text size={16} medium gray={!isActive} secondary={isActive}>
                    {tab}
                </Text>
            </TouchableOpacity>
        )
    }


    render() {

        const { profile, navigation, categories } = this.props;
        const tabs = ['Plants', 'Inspirations', 'Minigames', 'Shop'];
        return (
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>My Plants</Text>
                    <Button onPress={() => navigation.navigate('Settings')}>
                        <Image source={profile.avatar} style={styles.avatar} />
                    </Button>
                </Block>
                <Block flex={false} row style={styles.tabs}>
                    {tabs.map(tab => this.renderTab(tab))}
                </Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>Happy Terrarium</Text>
                </Block>

                {/* blocks on oppacyty  */}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ paddingVertial: theme.sizes.base * 2 }}
                >
                    <Block flex={false} row  space="between" style={styles.categories}>
                    
                        {categories.map(category => (
                            <TouchableOpacity
                                key={category.name}
                                onPress={() => navigation.navigate('Explore', { category })}
                            >
                                <Card center middle shadow style={styles.category}>
                                    <Badge margin={[0, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                                        <Image source={category.image} />
                                    </Badge>
                                    <Text medium height={20}>{category.name}</Text>
                                    <Text gray caption>Feeling {category.status}!</Text>
                                </Card>
                            </TouchableOpacity>
                        ))}
                    </Block>
                    <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />

                    <Block flex={false} row center space="between" style={styles.header}>
                    
                    <Text h1 bold>Lucky Terrarium</Text>
                </Block>
            
                 
                    <Block flex={false} row space="between" style={styles.categories}>
                    
                        {categories.map(category => (
                            <TouchableOpacity
                                key={category.name}
                                onPress={() => navigation.navigate('Explore', { category })}
                            >
                                <Card center middle shadow style={styles.category}>
                                    <Badge margin={[0, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                                        <Image source={category.image} />
                                    </Badge>
                                    <Text medium height={20}>{category.name}</Text>
                                    <Text gray caption>Feeling {category.status}!</Text>
                                </Card>
                            </TouchableOpacity>
                        ))}

                        </Block>

                </ScrollView>

                
                
            </Block>
            

        );
    }


    ///////// END of render 

}

Browse.defaultProps = {
    profile: mocks.profile,
    categories: mocks.categories

}




const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2,
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2,
    },
    tabs: {
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: 0.5,                    //for iOS : StyleSheet.hairLineWidth
        marginVertical: theme.sizes.base,
        marginHorizontal: theme.sizes.base * 2,
    },
    tab: {
        marginRight: theme.sizes.base * 2,
        paddingBottom: theme.sizes.base
    },
    active: {
        borderBottomColor: theme.colors.secondary,
        borderBottomWidth: 3,
    },
    category: {
        // this should be dynamic based on screen width
        minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
        maxWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
        maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    },
   
    categories: {
        flexWrap: 'wrap',
        paddingHorizontal: theme.sizes.base * 2,
        marginBottom: theme.sizes.base * 3.5,
        backgroundColor: "#e6e6ff",
        borderRadius: 20,
        paddingTop: 12,
    },
    sliders: {
        marginTop: theme.sizes.base * 0.7,
        paddingHorizontal: theme.sizes.base * 2,
      },
});