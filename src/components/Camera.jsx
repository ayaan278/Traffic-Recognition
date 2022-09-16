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
import getAuth from '../../token'

const axios = require('axios');
import FormData, {getHeaders} from 'form-data';


const BOTTOM_APPBAR_HEIGHT = 50;

export default function TrafficCamera({navigation},props) {
    const { bottom } = useSafeAreaInsets();
    // const [cameraRef, setCameraRef] = useState(null)
    const cameraRef = React.createRef()
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [answer, setAnswer] = useState("Recognition failed");
    const [token, setToken] = useState(null);
    const [visible, setVisible] = React.useState(false);
    const [photo, setPhoto] = useState(null);

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
                        >Grant Permission</Button>
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
    const startModel = () =>{
        setToken(getAuth);
        // console.log(token);
    }
    const clickPicture = async ()=>{
        if(cameraRef.current){
            const option = { quality: 1, base64: true, exif:false };
            let pic = await cameraRef.current.takePictureAsync(option);
            // console.log(pic.uri);
            setPhoto(pic);

            if(photo){
                const data = await new FormData();
                // const source = picture.base64;
                // let base64Img = `data:image/jpg;base64,${source}`;
                // console.log(base64Img);

                data.append('images', {
                    uri: photo.uri,
                    name: photo.uri.split('/').pop(), //split the uri at / and get the last element of the resulting array which actually is the name with the image extention (e.g, abc.jpg)
                    type: photo.type // type needs to be modified. keep reading
                })
                console.log(data);

                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'X-Auth-Token': token,
                        'content-type': 'multipart/form-data',
                    },
                    body: data,
                    redirect: 'follow'
                };

                await fetch("https://2fec676ce4e447d0980abfbeb404b0a3.apig.ap-southeast-3.huaweicloudapis.com/v1/infers/70cc6118-c616-4cb0-acd8-4d2442570deb",
                    requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
                // try {
                //     module.exports = typeof self == 'object' ? self.FormData : window.FormData;
                //     await axios.post("https://2fec676ce4e447d0980abfbeb404b0a3.apig.ap-southeast-3.huaweicloudapis.com/v1/infers/70cc6118-c616-4cb0-acd8-4d2442570deb"
                //         , data
                //         , {
                //             headers: {
                //             'X-Auth-Token': token,
                //             'content-type': 'multipart/form-data',
                //         }})
                //         .then(function (response) {
                //             console.log(JSON.stringify(response.headers));
                //         })
                //         .catch(function (error) {
                //             console.log(error);
                //         });
                // } catch(error) {
                //     console.log(error)
                // }

            }

            // if(answer==="Recognition failed"){
            //     showDialog();
            // }

        }
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera}
                    type={type}
                    ref={cameraRef}
                    // ref={ref => {
                    //     setCameraRef(ref);}}
                    onCameraReady={startModel}
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