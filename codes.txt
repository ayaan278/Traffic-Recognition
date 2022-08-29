import React, { memo, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { HomeScreen, LoginScreen, RegisterScreen, ForgotPasswordScreen, Dashboard, Demo } from "./screens";

import { useLoginState } from "./core/state";
import { useBetween } from "use-between";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//Login navigation
const LoginNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//Logged in Navigation
const LoggedInNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Demo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  const { loggedIn, setIsLoggedIn } = useBetween(useLoginState);
  return loggedIn ? <LoggedInNav /> : <LoginNav />;
}