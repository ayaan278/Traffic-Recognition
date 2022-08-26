import { View, Text } from "react-native-web";
import React from "react";
import { Button } from 'react-native-paper';

export default function index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Universal React with Expo</Text>
            <Button raised theme={{ roundness: 3 }}>
                Press me
            </Button>
        </View>
    );
}