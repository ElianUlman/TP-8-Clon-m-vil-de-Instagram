import React, { useState, useContext } from 'react';
import { SafeAreaView, View, TextInput, Pressable, Text, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
    const { user, isAuthenticated } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {
        if (isAuthenticated) {
            if (username === user.username && password === user.password) {
                console.log('Login Successful!');
            } else {
                console.log('Login Unsuccessful!');
            }
        } else {
            console.log('There is no user registered');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/images-removebg-preview.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <View style={styles.form}>
                    <TextInput
                        value={username}
                        onChangeText={setUsername}
                        style={styles.input}
                        placeholder="Phone number, username or email"
                        placeholderTextColor="#888"
                        autoCapitalize="none"
                    />

                    <View style={styles.passwordWrapper}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholderTextColor="#888"
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>

                    <Pressable style={styles.forgotWrapper}>
                        <Text style={styles.forgotText}>Forgotten Password?</Text>
                    </Pressable>

                    <Pressable onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.buttonText}>Log in</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.signupText}>
                    Don’t have an account?{' '}
                    <Text style={styles.signupLink}>Sign Up</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 220,
        height: 80,
        marginBottom: 40,
    },
    form: {
        width: '100%',
        maxWidth: 340,
    },
    input: {
        height: 48,
        width: '100%',
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: '#DBDBDB',
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize: 14,
        color: '#262626',
        marginBottom: 12,
    },
    passwordWrapper: {
        height: 48,
        width: '100%',
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: '#DBDBDB',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 10,
    },
    passwordInput: {
        flex: 1,
        fontSize: 14,
        color: '#262626',
        paddingVertical: 0,
    },
    eyeButton: {
        padding: 4,
    },
    eyeText: {
        fontSize: 18,
        color: '#888',
    },
    forgotWrapper: {
        alignSelf: 'flex-end',
        marginBottom: 24,
    },
    forgotText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#0095F6',
    },
    button: {
        height: 48,
        width: '100%',
        backgroundColor: '#0095F6',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    footer: {
        alignItems: 'center',
        paddingVertical: 24,
    },
    signupText: {
        fontSize: 12,
        color: '#8E8E8E',
    },
    signupLink: {
        color: '#0095F6',
        fontWeight: '700',
    },
});