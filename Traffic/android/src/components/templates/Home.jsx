import { View } from "react-native-web";
import React from "react";
import { Button, Text } from 'react-native-paper';

export default function Home({navigation}) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Universal React with Expo</Text>
            <Button raised theme={{ roundness: 3 }} onPress={() =>{
                navigation.navigate('Signup');
            }}>
                Press me
            </Button>
        </View>
    );
}