import React, {useEffect, useRef} from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";

export default function SimpleLoader(){
    const animation = useRef(null);
    useEffect(() => {
        // You can control the ref programmatically, rather than using autoPlay
        // animation.current?.play();
    }, []);
    return(
        <View>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: 70,
                    height: 70,
                    alignSelf: 'center',
                    backgroundColor: '#eee',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('../../../assets/Lottie/Loader.json')}
            />
        </View>
    )

}