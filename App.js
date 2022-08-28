import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from "./android/src/components/templates/Home";
// import Login from "./android/src/components/templates/Login";
// import Signup from "./android/src/components/templates/Signup";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Home/>
      </View>
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

// // <NavigationContainer>
// //   <PaperProvider>
// {/*  <Stack.Navigator >*/}
// {/*    <Stack.Screen*/}
// {/*        name="Home"*/}
// {/*        component={Home}*/}
// {/*    />*/}
// {/*    <Stack.Screen*/}
// {/*        name="Login"*/}
// {/*        component={Login}*/}
// {/*    />*/}
// {/*    <Stack.Screen*/}
// {/*        name="Signup"*/}
// {/*        component={Signup}*/}
// {/*    />*/}
// {/*  </Stack.Navigator>*/}
//
// // </PaperProvider>
// {/*</NavigationContainer>*/}