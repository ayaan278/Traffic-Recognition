import * as React from 'react';
import { IconButton } from 'react-native-paper';
import {Colors} from '../theme/Colors'
import {StyleSheet} from "react-native";

const SpeechButton = () => (
    <IconButton
        style={styles.button}
        icon="speaker"
        mode={"contained-tonal"}
        iconColor={Colors.colors.primary}
        containerColor={Colors.colors.thirdly}
        size={50}
        onPress={() => console.log('Pressed')}
    />
);
const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 15,
        zIndex: 2,
    },
});


export default SpeechButton;