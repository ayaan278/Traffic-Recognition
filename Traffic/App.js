import * as React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from "react-native-paper";


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
        <PaperProvider >
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
        </PaperProvider>
    );
}

// AppRegistry.registerComponent('main', () => Main);