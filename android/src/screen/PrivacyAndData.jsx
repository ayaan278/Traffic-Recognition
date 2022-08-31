import {View, Text, Platform} from "react-native";
import React from "react";
import {Appbar, Button, Switch} from 'react-native-paper';
import styles from "../theme/Styles";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'menu';

export default function PrivacyAndData({ navigation }) {
    return (
        <View
        >
            <Appbar.Header style={styles.header} mode={'small'}>
                <Appbar.BackAction
                    onPress={() => { navigation.navigate('Navmenu');}}
                    title="Go Back"
                    icon={'arrow-left'}/>
                <Appbar.Content title="Privacy and Data"/>
                <Appbar.Action
                    title="Open drawer"
                    onPress={() => navigation.navigate('Navmenu')}
                    icon={MORE_ICON}/>
            </Appbar.Header>
            <View>
                <Text>All the permissions come here</Text>
            </View>
        </View>
    );
}