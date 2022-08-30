import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import Routes from "../routes/Routes";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const NavMenu = () => {
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
            <Routes/>
            </DrawerLayoutAndroid>
        );
};

const styles = StyleSheet.create({

});

export default NavMenu;