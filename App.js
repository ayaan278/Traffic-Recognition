import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from "./android/src/components/templates/Home";
// import Login from "./android/src/components/templates/Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from "./android/src/components/templates/Signup";
import Header from "./android/src/components/modules/Header";
import TrafficCamera from "./android/src/components/modules/Camera";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Header/>
        <Stack.Navigator intitialRouteName={"Home"}>
          <Stack.Screen name={"Home"} component={Home}/>
          {/*<Stack.Screen name={"NavMenu"} component={NavMenu}/>*/}
          <Stack.Screen name={"Signup"} component={Signup}/>
          <Stack.Screen name={"TrafficCamera"} component={TrafficCamera}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

