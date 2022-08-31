import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {Colors } from '../theme/Colors'
import SpeechButton from "./SpeechButton";
const BOTTOM_APPBAR_HEIGHT = 50;

const BottomBar = () => {
    const { bottom } = useSafeAreaInsets();

    return (
        <Appbar
            style={[
                styles.bottom,
                {
                    height: BOTTOM_APPBAR_HEIGHT,
                    backgroundColor: Colors.colors.primary,
                },
            ]}
            safeAreaInsets={{ bottom }}
        >
            <SpeechButton/>
        </Appbar>
    );
};

const styles = StyleSheet.create({
    bottom: {
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flex:1,
        justifyContent: 'center',
    },
});

export default BottomBar;