import React, { useState } from 'react'
import {TouchableOpacity, View, TextInput} from 'react-native'
import {Text, Button, HelperText} from 'react-native-paper'
import styles from '../theme/Styles';
import Colors from '../theme/Colors';

// import { theme } from '../core/theme'
// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'

export default function Login({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    // const onLoginPressed = () => {
    //     const emailError = emailValidator(email.value)
    //     const passwordError = passwordValidator(password.value)
    //     if (emailError || passwordError) {
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
        <View style={styles.view}>
            {/*<Logo />*/}
            {/*<Header>Welcome back.</Header>*/}
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
            <HelperText type="error" onchange={hasErrors()}>
                Email address is invalid!
            </HelperText>
            <TextInput
                label="Password"
                placeholder="Password"
                returnKeyType="done"
                style={styles.input}
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
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
                    // onPress={onLoginPressed}
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
    )
}
