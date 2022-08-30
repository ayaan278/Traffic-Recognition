import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from '../screen/Login'
import Signup from '../screen/Signup'
import Home from '../screen/Home'
import TrafficCamera from '../components/Camera'

const Stack = createNativeStackNavigator();

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Routes = () => {
    const drawer = useRef(null);

    const navigationView = () => (
        <View >
            <Text >I'm in the Drawer!</Text>
            <Button
                title="Close drawer"
                onPress={() => drawer.current.closeDrawer()}
            />
        </View>
    );

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={"left"}
            renderNavigationView={navigationView}
        >
            <Appbar.Header>
                <Appbar.Content title="Traffic Recognition" />
                <Appbar.Action
                    title="Open drawer"
                    onPress={() => drawer.current.openDrawer()}
                    icon={MORE_ICON}/>

                {/*<Appbar.Action icon="magnify" onPress={() => {}} />*/}
                {/*<Appbar.Action icon={MORE_ICON} onPress={() => {}} />*/}
            </Appbar.Header>
            <Stack.Navigator intitialRouteName={"Home"}>
                <Stack.Screen name={"Home"} component={Home}/>
                {/*<Stack.screen name={"NavMenu"} component={NavMenu}/>*/}
                <Stack.Screen name={"Signup"} component={Signup}/>
                <Stack.Screen name={"Login"} component={Login}/>
                <Stack.Screen name={"TrafficCamera"} component={TrafficCamera}/>
            </Stack.Navigator>
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({

});

export default Routes;