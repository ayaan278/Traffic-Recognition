import {View, Text, Platform} from "react-native";
import React from "react";
import {Appbar, Button} from 'react-native-paper';
import SpeechButton from "../components/SpeechButton";
import Header from "../components/Header";
import styles from "../theme/Styles"

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'menu';

export default function Home({ navigation }) {
    return (
        <View
        >
            <Appbar.Header style={styles.header} mode={'small'}>
                <Appbar.BackAction
                    onPress={() => {}}
                    title="Go Back"
                    icon={'arrow-left'}/>
                <Appbar.Content title="hello"/>
                <Appbar.Action
                    title="Open drawer"
                    onPress={() => navigation.navigate('Navmenu')}
                    icon={MORE_ICON}/>
            </Appbar.Header>

            <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Login')}>Login</Button>
            <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Signup')}>Signup</Button>
            <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('TrafficCamera')}>Camera</Button>
        </View>
    );
}