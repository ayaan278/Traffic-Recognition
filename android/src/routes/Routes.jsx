import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from '../screen/Login'
import Signup from '../screen/Signup'
import Home from '../screen/Home'
import TrafficCamera from '../components/Camera'
import Permissions from '../screen/Permissions'
import PrivacyAndData from '../screen/PrivacyAndData'
import AccountSettings from '../screen/AccountSettings'
import NavMenu from "../components/NavMenu";

const Stack = createNativeStackNavigator();

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'menu';

const Routes = () => {
    const drawer = useRef(null);

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={"left"}
            renderNavigationView={NavMenu}
        >
            <Appbar.Header>
                <Appbar.Action
                    title="Open drawer"
                    onPress={() => drawer.current.openDrawer()}
                    icon={MORE_ICON}/>
                <Appbar.Content title="Traffic Recognition" />
            </Appbar.Header>

            <Stack.Navigator intitialRouteName={"Home"}>
                <Stack.Screen name={"Home"} component={Home}/>
                <Stack.Screen name={"Signup"} component={Signup}/>
                <Stack.Screen name={"Login"} component={Login}/>
                <Stack.Screen name={"TrafficCamera"} component={TrafficCamera}/>
                <Stack.Screen name={"Permissions"} component={Permissions}/>
                <Stack.Screen name={"PrivacyAndData"} component={PrivacyAndData}/>
                <Stack.Screen name={"AccountSettings"} component={AccountSettings}/>
            </Stack.Navigator>
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({

});

export default Routes;