import { View, Text } from "react-native";
import React from "react";
import { Button } from 'react-native-paper';

export default function Permissions({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>All the permissions come here</Text>
        </View>
    );
}