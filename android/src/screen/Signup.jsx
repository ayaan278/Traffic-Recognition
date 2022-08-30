import React, { useState } from 'react'
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import {Text, Button, HelperText} from 'react-native-paper'
import styles from "../theme/Styles";
// import { theme } from '../core/theme'
// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'
// import { nameValidator } from '../helpers/nameValidator'

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [confirmPassword, setConfirmPassword] = useState({ value: ''})


    // const onSignUpPressed = () => {
    //     const nameError = nameValidator(name.value)
    //     const emailError = emailValidator(email.value)
    //     const passwordError = passwordValidator(password.value)
    //     if (emailError || passwordError || nameError) {
    //         setName({ ...name, error: nameError })
    //         setEmail({ ...email, error: emailError })
    //         setPassword({ ...password, error: passwordError })
    //         return
    //     }
    //     navigation.reset({
    //         index: 0,
    //         routes: [{ name: 'Dashboard' }],
    //     })
    // }

    const hasErrors = () => {
        return !email.value.includes('@');
    };


    return (
        <View styles={styles.view}>
            <TextInput
                label="Name"
                returnKeyType="next"
                style={styles.input}
                placeholder="Name"
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: '' })}
                error={!!name.error}
                errorText={name.error}
            />
            <TextInput
                label="Email"
                returnKeyType="next"
                style={styles.input}
                placeholder="Email"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <HelperText type="error" visible={hasErrors()}>
                Email address is invalid!
            </HelperText>
            <TextInput
                label="Password"
                returnKeyType="done"
                style={styles.input}
                placeholder="Password"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            <TextInput
                label="Confirm Password"
                returnKeyType="done"
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword.value}
                onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
                error={!!confirmPassword.error}
                errorText={confirmPassword.error}
                secureTextEntry
            />
            <Button
                mode="contained"
                // onPress={onSignUpPressed}
                styles={styles.button}
            >
                Sign Up
            </Button>
            <View style={styles.row}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
