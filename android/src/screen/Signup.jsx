import React, {useEffect, useState} from 'react'
import {View, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native'
import {Text, Button, HelperText} from 'react-native-paper'
import styles from "../theme/Styles";
import {auth} from "../../../firebase";
// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'
// import { nameValidator } from '../helpers/nameValidator'

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.navigate('Home');
            }
        })

        return unsubscribe
    },[])

    const onSignUpPressed = () => {
        auth.createUserWithEmailAndPassword(email,password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);

            })
            .catch(error => alert(error.message));
    }



    return (
        <KeyboardAvoidingView style={styles.view}>
            <TextInput
                label="Name"
                returnKeyType="next"
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                label="Email"
                returnKeyType="next"
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
                returnKeyType="done"
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <TextInput
                label="Confirm Password"
                returnKeyType="done"
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                secureTextEntry
            />
            <Button
                mode="contained"
                onPress={onSignUpPressed}
                style={styles.button}
            >
                Sign Up
            </Button>
            <View style={styles.row}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
