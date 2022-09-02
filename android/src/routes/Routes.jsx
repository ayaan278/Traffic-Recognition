import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import {createNativeStackNavigator,} from "@react-navigation/native-stack";
import Login from '../screen/Login'
import Signup from '../screen/Signup'
import Home from '../screen/Home'
import TrafficCamera from '../components/Camera'
import Permissions from '../screen/Permissions'
import PrivacyAndData from '../screen/PrivacyAndData'
import AccountSettings from '../screen/AccountSettings'
import NavMenu from "../components/NavMenu";
import horizontalAnimation from '../animation/animation'

const Stack = createNativeStackNavigator();

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'menu';

const Routes = () => {

    return (
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name={"Login"} component={Login}/>
                <Stack.Screen name={"Signup"} component={Signup}/>
                <Stack.Screen name={"Home"} component={Home}/>
                <Stack.Screen name={"TrafficCamera"} component={TrafficCamera}/>
                <Stack.Screen name={"Permissions"} component={Permissions}/>
                <Stack.Screen name={"PrivacyAndData"} component={PrivacyAndData}/>
                <Stack.Screen name={"AccountSettings"} component={AccountSettings}/>
                <Stack.Screen name={"Navmenu"} component={NavMenu} screenOptions={horizontalAnimation}/>
            </Stack.Navigator>
    );
};

export default Routes;