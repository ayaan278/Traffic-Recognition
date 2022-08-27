import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const Login = () => {
    return (
        <ScrollView>
            <Text>Hello and Welcome!</Text>
            <View>
                <Text>Some more text and logo down</Text>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={{ width: 200, height: 200 }}
                />
            </View>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="Name"
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="Email"
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="Password"
            />
        </ScrollView>
    );
}

export default Login;