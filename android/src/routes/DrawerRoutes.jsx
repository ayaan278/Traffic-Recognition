import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import NavMenu from "../components/NavMenu";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'menu';

const DrawerRoutes = () => {
    const drawer = useRef(null);

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={"left"}
            renderNavigationView={NavMenu}
        >

        </DrawerLayoutAndroid>
    );
};

export default DrawerRoutes;