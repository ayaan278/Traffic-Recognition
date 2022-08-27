import * as React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from "react-native-paper";
// import Routes from "./android/src/Routes/Routes";
import Home from "./android/src/components/templates/Home";
import Login from "./android/src/components/templates/Login";
import Signup from "./android/src/components/templates/Signup";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function App() {

    return (
        // <NavigationContainer>
            <PaperProvider >
                <Home/>
                {/*<Stack.Navigator initialRouteName="Home">*/}
                {/*    <Stack.Screen*/}
                {/*        name="Home"*/}
                {/*        component={Home}*/}
                {/*    />*/}
                {/*    <Stack.Screen*/}
                {/*        name="Login"*/}
                {/*        component={Login}*/}
                {/*    />*/}
                {/*    <Stack.Screen*/}
                {/*        name="Signup"*/}
                {/*        component={Signup}*/}
                {/*    />*/}
                {/*</Stack.Navigator>*/}
            </PaperProvider>
        // </NavigationContainer>
    );
}

AppRegistry.registerComponent('main', () => Main);