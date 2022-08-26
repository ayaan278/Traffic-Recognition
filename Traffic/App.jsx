import * as React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from "react-native-paper";
import Routes from "./android/src/layout/Routes";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    // const theme = {
    //     ...DefaultTheme,
    //     roundness: 2,
    //     colors: {
    //         ...DefaultTheme.colors,
    //         primary: '#3498db',
    //         accent: '#f1c40f',
    //     }
    // };
    return (
        <NavigationContainer>
            <PaperProvider >
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    >
                    <Text>Universal React with Expo</Text>
                    <Button raised theme={{ roundness: 3 }}
                           >
                        Press me
                    </Button>
                    <Routes/>
                </View>
            </PaperProvider>
        </NavigationContainer>
    );
}

// AppRegistry.registerComponent('main', () => Main);