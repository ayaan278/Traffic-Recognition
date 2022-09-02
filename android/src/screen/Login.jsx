import React, { useState, useEffect } from 'react'
import {KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, View, TextInput} from 'react-native'
import {Text, Button, HelperText} from 'react-native-paper'
import styles from '../theme/Styles';
// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'
import { auth } from '../../../firebase'
import {FacingModeToCameraType as userCredentials} from "expo-camera/src/WebConstants";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.navigate('Home');
            }
        })

        return unsubscribe
    },[])
    const onLoginPressed = () => {
        auth.signInWithEmailAndPassword(email,password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message));
    }


    return (
        <KeyboardAvoidingView style={styles.view} behavior={"padding"}>
            {/*<Logo />*/}
            {/*<Header>Welcome back.</Header>*/}
            <TouchableWithoutFeedback >
                <View>
                    <TextInput
                        label="Email"
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                    />
                    <TextInput
                        label="Password"
                        placeholder="Password"
                        returnKeyType="done"
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                    <View style={styles.forgotPassword}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('ResetPasswordScreen')}
                        >
                            <Text >Forgot your password?</Text>
                        </TouchableOpacity>
                    </View>
                    <Button mode="contained" style={styles.button}
                            onPress={onLoginPressed}
                    >
                        Login
                    </Button>
                    <View style={styles.row}>
                        <Text>Don’t have an account? </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Signup')}>
                            <Text style={styles.link}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
