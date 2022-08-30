import { View, Text } from "react-native";
import React from "react";
import { Button } from 'react-native-paper';

export default function Home({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button mode="contained" onPress={() => navigation.navigate('Login')}>Login</Button>
            <Button mode="contained" onPress={() => navigation.navigate('Signup')}>Signup</Button>
            <Button mode="contained" onPress={() => navigation.navigate('TrafficCamera')}>Camera</Button>
        </View>
    );
}