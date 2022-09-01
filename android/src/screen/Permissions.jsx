import {View, Text, Platform, Switch} from "react-native";
import React, {useState, useEffect} from "react";
import {Appbar, Button, Divider} from 'react-native-paper';
import styles from "../theme/Styles";
import {Colors} from "../theme/Colors"
import { Camera, CameraType } from 'expo-camera';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'menu';

export default function Permissions({ navigation }) {


    const [isEnabledCamera, setIsEnabledCamera] = useState(false);
    const toggleSwitchCamera = () => setIsEnabledCamera(previousState => !previousState);

    const [isEnabledNotifications, setIsEnabledNotifications] = useState(false);
    const toggleSwitchNotifications = () => setIsEnabledNotifications(previousState => !previousState);

    const [isEnabledVoice, setIsEnabledVoice] = useState(false);
    const toggleSwitchVoice = () => setIsEnabledVoice(previousState => !previousState);


    return (
        <View>
            <Appbar.Header style={styles.header} mode={'small'}>
                <Appbar.BackAction
                    onPress={() => { navigation.navigate('Navmenu');}}
                    title="Go Back"
                    icon={'arrow-left'}/>
                <Appbar.Content title="Permissions"/>
            </Appbar.Header>

            <View style={styles.permissions_view}>
                <Text style={styles.permissions_text}>Allow Notifications</Text>
                <Switch style={styles.permissions_switch}
                    trackColor={{ false: "#767577", true: Colors.colors.secondary }}
                    thumbColor={isEnabledNotifications ? Colors.colors.thirdly : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchNotifications}
                    value={isEnabledNotifications}
                />
            </View>
            <Divider/>
            <View style={styles.permissions_view}>
                <Text style={styles.permissions_text}>Allow Camera</Text>
                <Switch style={styles.permissions_switch}
                    trackColor={{ false: "#767577", true: Colors.colors.secondary }}
                    thumbColor={isEnabledCamera ? Colors.colors.thirdly : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchCamera}
                    value={isEnabledCamera}
                />
            </View>
            <Divider/>
            <View style={styles.permissions_view}>
                <Text style={styles.permissions_text}>Voice Guides</Text>
                <Switch style={styles.permissions_switch}
                    trackColor={{ false: "#767577", true: Colors.colors.secondary }}
                    thumbColor={isEnabledVoice ? Colors.colors.thirdly : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchVoice}
                    value={isEnabledVoice}
                />
            </View>
            <Divider/>
        </View>
    );
}