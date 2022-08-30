import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import { Drawer } from 'react-native-paper';
import styles from '../theme/Styles'

const NavMenu = () => {

        return(
            <View style={styles.view}>
                <Drawer.Item
                    style={styles.drawer_item}
                    icon="account"
                    label="Account Setting"
                    // onPress={() => navigation.navigate.push('AccountSettings')}
                />
                <Drawer.Item
                    style={styles.drawer_item}
                    icon="key"
                    label="Permissions"
                    // onPress={() => navigation.navigate('Permissions')}
                />
                <Drawer.Item
                    style={styles.drawer_item}
                    icon="lock"
                    label="Privacy and Data"
                    // onPress={() => navigation.navigate('PrivacyAndData')}
                />
                <Drawer.Item
                    style={styles.drawer_item}
                    icon="logout"
                    label="Logout"
                />
            </View>
        );
}

export default NavMenu;