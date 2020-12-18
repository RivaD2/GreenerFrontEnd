import React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { theme, mocks } from '../constants';

import { Button, Block, Text, Divider} from '../components';
export default class Browse extends React.Component {


    state = {
        budget: 5000,
        monthly: 7000,
        notifications: true,
        newsletter: false,
        editing: null,
        profile: {},
        plants: 6,
    }

    componentDidMount() {
        this.setState({ profile: this.props.profile });
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
          )
        }
        return <Text bold>{profile[name]}</Text>
    }  

    handleEdit(name, text) {
        const { profile } = this.state;
        profile[name] = text;
    
        this.setState({ profile });
    }

    render(){
        const { profile, editing } = this.props;
        
        return (
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>Settings</Text>
                    <Button>
                        <Image source={profile.avatar} style={styles.avatar}/>
                    </Button> 
                </Block>
         <Block flex={false} row center space="between" style={styles.header}>
              <Block>
                  <Text gray2 style={{ marginBottom: 10 }}>Plant Cash</Text>
                  <Text bold>${profile.funds}</Text>
              </Block>
              <Text medium secondary>
                  Add funds
              </Text>
          </Block>
                <ScrollView showsVerticalScrollIndicator={false}>
      <Block style={styles.inputs}>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                  <Text gray2 style={{ marginBottom: 10 }}>Username</Text>
                  <Text bold>{profile.username}</Text>
              </Block>
              
              <Text medium secondary>
                  Edit
              </Text>
          </Block>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                  <Text gray2 style={{ marginBottom: 10 }}>Location</Text>
                  <Text bold>{profile.location}</Text>
              </Block>
              <Text medium secondary>
                  Edit
              </Text>
          </Block>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                  <Text gray2 style={{ marginBottom: 10 }}>E-mail</Text>
                  <Text bold>{profile.email}</Text>
              </Block>
              <Text medium secondary>
                  Edit
              </Text>
          </Block>
          </Block>

          <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
<Block style={styles.sliders}>
    <Block>
        <Text gray2>Plants</Text>
        <Text caption gray2 right>{profile.plants}</Text>
        <Text gray2>etc etc etc</Text>
    </Block>
</Block>
<Divider />

  </ScrollView>
            </Block>
        );
    }    



    //////// end of render
  
}
Browse.defaultProps = {
    profile : mocks.profile,
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2,
      },
      avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2,
      },
      inputs: {
        marginTop: theme.sizes.base * 0.7,
        paddingHorizontal: theme.sizes.base * 2,
      },
      inputRow: {
        alignItems: 'flex-end'
      },
      sliders: {
        marginTop: theme.sizes.base * 0.7,
        paddingHorizontal: theme.sizes.base * 2,
      },
      
});