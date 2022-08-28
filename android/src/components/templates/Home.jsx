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
            <Text>Universal React</Text>

        </View>
    );
}