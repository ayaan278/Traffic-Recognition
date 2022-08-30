import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Routes from "./android/src/routes/Routes"


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer >
        <Routes/>
      </NavigationContainer>
    </PaperProvider>
  );
}
