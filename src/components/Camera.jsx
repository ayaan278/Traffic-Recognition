import { Camera, CameraType } from 'expo-camera';
import {useState, useRef, useEffect} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import style1 from '../theme/Styles'
import {Appbar, Dialog, IconButton, Portal, Button} from "react-native-paper";
// import * as MediaLibrary from 'expo-media-library';
import {Colors} from "../theme/Colors";
import * as Speech from 'expo-speech';
import * as React from "react";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BOTTOM_APPBAR_HEIGHT = 50;

export default function TrafficCamera({navigation},props) {
    const { bottom } = useSafeAreaInsets();
    const [cameraRef, setCameraRef] = useState(null)
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [answer, setAnswer] = useState("Recognition failed");

    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);


    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>
                    We need your permission to show the camera
                </Text>
                <Button style={style1.button}
                        buttonColor={Colors.colors.secondary}
                        mode="contained"
                        onPress={requestPermission}
                        title="Grant permission" />
            </View>
        );
    }
    function toggleCameraType() {
        setType((current) => (
            current === CameraType.back ? CameraType.front : CameraType.back
        ));
    }

    const Speak = () =>{
        // if(Speech){
        if(answer==="go"){
            const Go = 'Go';
            Speech.speak(Go);
        }else if(answer==="stop"){
            const Stop = 'Stop';
            Speech.speak(Stop);
        }else{
            const Error = 'Unable to recognize at the moment, Please try again letter';
            Speech.speak(Error);
        }


    }

    const clickPicture = async ()=>{
        if(cameraRef){
            const option = { quality: 0.7, base64: true };
            const picture = await cameraRef.takePictureAsync(option).then(()=>{
                console.log("picture clicked");
            });

            var myHeaders = new Headers();
            myHeaders.append("X-Auth-Token", "MIIUtQYJKoZIhvcNAQcCoIIUpjCCFKICAQExDTALBglghkgBZQMEAgEwghLHBgkqhkiG9w0BBwGgghK4BIIStHsidG9rZW4iOnsiZXhwaXJlc19hdCI6IjIwMjItMDktMDhUMDc6MDQ6MzEuMzg1MDAwWiIsIm1ldGhvZHMiOlsicGFzc3dvcmQiXSwiY2F0YWxvZyI6W10sInJvbGVzIjpbeyJuYW1lIjoidGVfYWRtaW4iLCJpZCI6IjAifSx7Im5hbWUiOiJ0ZV9hZ2VuY3kiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3Nfc3BvdF9pbnN0YW5jZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2l2YXNfdmNyX3ZjYSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfY24tc291dGgtNGMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3Nfa2FlMSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2R3c19wb2MiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jYnJfZmlsZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19rYzFfdXNlcl9kZWZpbmVkIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfbWVldGluZ19lbmRwb2ludF9idXkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9tYXBfbmxwIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWdfY24iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9zZXJ2aWNlc3RhZ2VfbWdyX2R0bV9lbiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3JlZGlzNi1nZW5lcmljLWludGwiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9ldnNfdm9sdW1lX3JlY3ljbGVfYmluIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZGNzX2RjczItZW50ZXJwcmlzZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3ZjcCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2N2ciIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX21hcyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX211bHRpX2JpbmQiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9laXBfcG9vbCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2VyIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9hcC1zb3V0aGVhc3QtM2QiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9wcm9qZWN0X2RlbCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3NoYXJlQmFuZHdpZHRoX3FvcyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2NlciIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Nlc19yZXNvdXJjZWdyb3VwX3RhZyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2V2c19yZXR5cGUiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3NfaXIzeCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfY24tc291dGh3ZXN0LTJiIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfdWNzX2NpYSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2h3ZGV2IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfc2ZzdHVyYm8iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9odl92ZW5kb3IiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2NuLW5vcnRoLTRlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9jbi1ub3J0aC00ZCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2RheXVfZGxtX2NsdXN0ZXIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3NfYWM3IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfaHNkLXB0IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfY2NlX21jcF90aGFpIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfY29tcGFzcyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3NlcnZpY2VzdGFnZV9tZ3JfZHRtIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9jbi1ub3J0aC00ZiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2NwaCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2dhIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfcm1zIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfc21uX2FwcGxpY2F0aW9uIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfdWNzIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZ2VpcCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19ncHVfZzVyIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfd2tzX2twIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfcmlfZHdzIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfb3BfZ2F0ZWRfbXNzaSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX3VudmVyaWZpZWQiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9vcF9nYXRlZF9tc3NlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYWFkX2JldGFfaWRjIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfY3Nic19yZXBfYWNjZWxlcmF0aW9uIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWNzX2Rpc2tBY2MiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9kc3NfbW9udGgiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jc2ciLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9kZWNfbW9udGhfdXNlciIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2llZl9lZGdlYXV0b25vbXkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF92aXBfYmFuZHdpZHRoIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWNzX29sZF9yZW91cmNlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfd2VsaW5rYnJpZGdlX2VuZHBvaW50X2J1eSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Rjc19kY3MyLXJlZGlzNi1nZW5lcmljIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWNzX3RoaXJkX2ltYWdlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfcHN0bl9lbmRwb2ludF9idXkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9tYXBfb2NyIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZGx2X29wZW5fYmV0YSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2llcyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX29ic19kdWFsc3RhY2siLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lZGNtIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfY3Nic19yZXN0b3JlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfaXZzY3MiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3NfYzZhIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfdnBuX3ZndyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3Ntbl9jYWxsbm90aWZ5IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfS29vTWVzc2FnZUNPQlQiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jYWUtYmV0YSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2NzYnNfcHJvZ3Jlc3NiYXIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9nYV9jbiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19vZmZsaW5lX2FjNyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2V2c19wb29sX2NhIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWNzX29mZmxpbmVfZGlza180IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfaW50bF9jb21wYXNzIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZXBzIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfY3Nic19yZXN0b3JlX2FsbCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2lwc2VjdnBuX09CVF9pbnRsIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZXJfaW50bCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Zjc19wYXkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9pcHNlY3Zwbl9PQlQiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2FwLXNvdXRoZWFzdC0xZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfcnUtbW9zY293LTFiIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9hcC1zb3V0aGVhc3QtMWQiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2FwLXNvdXRoZWFzdC0xZiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX29wX2dhdGVkX21lc3NhZ2VvdmVyNWciLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3NfYzciLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9tYXBfdmlzaW9uIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWNzX3JpIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9ydS1ub3J0aHdlc3QtMmMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9pZWZfcGxhdGludW0iLCJpZCI6IjAifV0sInByb2plY3QiOnsiZG9tYWluIjp7Inhkb21haW5fdHlwZSI6IkhXQ19ISyIsIm5hbWUiOiJod2M0MzkxNTIzNCIsImlkIjoiNDc4MTcyYTQwNWE3NGFmOWFiMjVmOTVhZWI3OWM5MDIiLCJ4ZG9tYWluX2lkIjoiZmRjZTYzMTI4MGE1NDAzOGFiOWY4OWIxOTA0OGYxY2EifSwibmFtZSI6ImFwLXNvdXRoZWFzdC0zIiwiaWQiOiJmZWJlNTFmMGU4YmQ0ZjBjYWIzMGU2ZjIwOTc4NDU2MyJ9LCJpc3N1ZWRfYXQiOiIyMDIyLTA5LTA3VDA3OjA0OjMxLjM4NTAwMFoiLCJ1c2VyIjp7ImRvbWFpbiI6eyJ4ZG9tYWluX3R5cGUiOiJIV0NfSEsiLCJuYW1lIjoiaHdjNDM5MTUyMzQiLCJpZCI6IjQ3ODE3MmE0MDVhNzRhZjlhYjI1Zjk1YWViNzljOTAyIiwieGRvbWFpbl9pZCI6ImZkY2U2MzEyODBhNTQwMzhhYjlmODliMTkwNDhmMWNhIn0sIm5hbWUiOiJheWFhbjI3OCIsInBhc3N3b3JkX2V4cGlyZXNfYXQiOiIiLCJpZCI6ImNiMzczYjYyZDYxZjRhMjNhMjQ5YWQwNmFkMjVjNGZhIn19fTGCAcEwggG9AgEBMIGXMIGJMQswCQYDVQQGEwJDTjESMBAGA1UECAwJR3VhbmdEb25nMREwDwYDVQQHDAhTaGVuWmhlbjEuMCwGA1UECgwlSHVhd2VpIFNvZnR3YXJlIFRlY2hub2xvZ2llcyBDby4sIEx0ZDEOMAwGA1UECwwFQ2xvdWQxEzARBgNVBAMMCmNhLmlhbS5wa2kCCQDcsytdEGFqEDALBglghkgBZQMEAgEwDQYJKoZIhvcNAQEBBQAEggEALCmiIE15DLvW-feoc-ImXkPoknpMpTT2ky083W-WKOP+nKBl+FiAHA-ETMIqT+-vmXlJyUzJi5sq57zIFhPC+ekzn0z6B57BF+5EGLFHoWzIZw9NwWguvcZWWA6RMa+iueqXQ81fnd21IoV0+z5wxU2RB6Vn9TB2DBzUt5XJYjHulzG3+csasc8TUd-kPzBFEfEzAVJCSJpUdqzkNPyRsZNlA8TCRvbCRw7fLZAug9Dxzqz+UvoHQ-w9lLvbMeHUDc+79oLxaOgNT4I3p0+bdVpGAgYHI-cJ2ov0NH70Atf8zqhN5malNpymE5tUeaPh5OFVGgO9YjH56g0TNZ2gsA==");

            // const fileInput = this.files;
            let formdata = new FormData();
            formdata.append("images", picture);

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            fetch("https://2fec676ce4e447d0980abfbeb404b0a3.apig.ap-southeast-3.huaweicloudapis.com/v1/infers/70cc6118-c616-4cb0-acd8-4d2442570deb", requestOptions)
                .then(res => res.json())
                .then(json =>{
                    const sol = json;
                    console.log(sol);
                    setAnswer(sol);
                    console.log(answer);
            })
                .catch(error => console.log('error', error));
            if(answer==="Recognition failed"){
                showDialog();
            }

            // fetch("https://2fec676ce4e447d0980abfbeb404b0a3.apig.ap-southeast-3.huaweicloudapis.com/v1/infers/eaa98918-fea3-4aa5-821b-7752ff2cf443", requestOptions)
            //     .then(response => response.text())
            //         .then(result => {
            //                 const sol = result.text();
            //                 console.log(sol);
            //                 setAnswer(sol.detection_classes);
            //                 })
            //     .catch(error => console.log('error', error));

            // const source = data.base64;
            // let base64Img = `data:image/jpg;base64,${source}`;

        }
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera}
                    type={type}
                    ref={ref => {
                        setCameraRef(ref);}}
                    // onCameraReady={startModel}
                    ratio={'16:9'}>
                <View style={styles.buttonContainer}>
                    <Appbar.Header style={style1.header} mode={'small'}>
                        <Appbar.BackAction
                            onPress={() => { navigation.navigate('Home');}}
                            title="Go Back"
                            icon={'arrow-left'}/>
                        <Appbar.Content title="Camera"/>
                        <Appbar.Action
                            title={"Flip Camera"}
                            icon={'camera-flip'}
                            onPress={toggleCameraType}
                            />
                        <Appbar.Action
                            icon="speaker"
                            onPress={Speak}
                            />
                    </Appbar.Header>
                    <Appbar
                        style={styles.bottom}
                        safeAreaInsets={{ bottom }}
                    >
                        <IconButton
                            style={styles.button}
                            icon="camera"
                            mode={"contained-tonal"}
                            iconColor={Colors.colors.text}
                            containerColor={Colors.colors.thirdly}
                            size={50}
                            onPress={clickPicture}
                        />
                    </Appbar>

                    <Portal>
                        <Dialog visible={visible} onDismiss={hideDialog} style={style1.dialog_view}>
                            <Dialog.Title style={style1.dialog_text}>There appears to be something wrong with the Recognition, Please try again later.</Dialog.Title>
                            <Dialog.Actions>
                                <Button buttonColor={Colors.colors.secondary}
                                        mode="contained"
                                        onPress={hideDialog}>Okay</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
    },
    bottom: {
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: BOTTOM_APPBAR_HEIGHT,
        backgroundColor: Colors.colors.secondary,
        flex:1,
        justifyContent: 'center',
    },
    button: {
        position: 'absolute',
        bottom: 15,
        zIndex: 2,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});