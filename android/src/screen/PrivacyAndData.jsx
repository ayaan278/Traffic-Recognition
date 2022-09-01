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
                <Text>Your privacy is important to us.
                    To better protect your privacy we provide this notice explaining our online information practices
                    and the choices you can make about the way your information is collected and used.</Text>
            </View>
            <View>
                <Text>We may collect the following information:</Text>
            </View>
            <View>
                <Text>What we do with the information we gather :</Text>
            </View>
            <View>
                <Text>What we don't collect or monitor :</Text>
            </View>
        </View>
    );
}