import { View, Text } from "react-native";
import React from "react";
import {Appbar, Button, HelperText, Switch} from 'react-native-paper';
import styles from "../theme/Styles";
import {auth} from "../../../firebase"
import {Colors} from "../theme/Colors";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'menu';

export default function AccountSettings({ navigation }) {

    return (
        <View >
            <Appbar.Header style={styles.header} mode={'small'}>
                <Appbar.BackAction
                    onPress={() => { navigation.navigate('Navmenu');}}
                    title="Go Back"
                    icon={'arrow-left'}/>
                <Appbar.Content title="My Account"/>
            </Appbar.Header>

            <View style={styles.account_view}>
                <Text style={styles.text}>Name : {auth.currentUser?.displayName}</Text>
            </View>
            <View style={styles.account_view}>
                <Text style={styles.text}>Email : {auth.currentUser?.email}</Text>
            </View>
        </View>
    );
}