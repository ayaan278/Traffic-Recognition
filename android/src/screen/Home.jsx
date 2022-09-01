import {View, Text, Platform} from "react-native";
import React from "react";
import {Appbar, Button} from 'react-native-paper';
import {Colors} from '../theme/Colors'
import styles from "../theme/Styles"

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'menu';

export default function Home({ navigation }) {
    return (
        <View>
            <Appbar.Header style={styles.header}  mode={'small'} color={Colors.colors.primary}>
                <Appbar.Content title="Home"/>
                <Appbar.Action
                    title="Open drawer"
                    onPress={() => navigation.navigate('Navmenu')}
                    icon={MORE_ICON}/>
            </Appbar.Header>

            <View style={styles.home_view}>

                <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('TrafficCamera')}>Start Driving</Button>

            </View>
        </View>
    );
}