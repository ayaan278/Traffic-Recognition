import * as React from 'react';
import { IconButton } from 'react-native-paper';
import {Colors} from '../theme/Colors'
import {StyleSheet} from "react-native";
import * as Speech from 'expo-speech';

const SpeechButton = () => {
    const Speak = () =>{
        const thingsToSay = 'Go and Stop';
        Speech.speak(thingsToSay);
    }
    return(
        <IconButton
            style={styles.button}
            icon="speaker"
            mode={"contained-tonal"}
            iconColor={Colors.colors.primary}
            containerColor={Colors.colors.thirdly}
            size={50}
            onPress={Speak}
        />
    )
}
const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 15,
        zIndex: 2,
    },
});


export default SpeechButton;