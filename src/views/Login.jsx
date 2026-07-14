import React, { useState, useContext } from 'react';
import { SafeAreaView, View, TextInput, Pressable, Text, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Login({ navigation }) {
    const { user, isAuthenticated } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = () => {
        setError('');
        if (isAuthenticated) {
            if (username === user.username && password === user.password) {
                console.log('Login Successful!');
                setError('');
            } else {
                setError('Usuario o contraseña incorrectos');
            }
        } else {
            setError('La cuenta no existe');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/insta-text-white.png')}
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

                    {error ? <Text style={styles.errorText}>{error}</Text> : null}

                    <Pressable onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.buttonText}>Log in</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.signupText}>
                    Don’t have an account?{' '}
                    <Text style={styles.signupLink} onPress={() => navigation.navigate('Register')}>
                        Sign Up
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 260,
        height: 120,
        marginBottom: 32,
    },
    form: {
        width: '100%',
        maxWidth: 340,
    },
    input: {
        height: 42,
        width: '100%',
        backgroundColor: '#1a1a1a',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 20,
        paddingHorizontal: 14,
        fontSize: 14,
        color: '#fff',
        marginBottom: 12,
    },
    passwordWrapper: {
        height: 42,
        width: '100%',
        backgroundColor: '#1a1a1a',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        marginBottom: 10,
    },
    passwordInput: {
        flex: 1,
        fontSize: 14,
        color: '#fff',
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
        color: '#1DA1F2',
    },
    button: {
        height: 48,
        width: '100%',
        backgroundColor: '#0095F6',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorText: {
        color: '#ff4d4f',
        marginTop: 8,
        marginBottom: 8,
        fontSize: 13,
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
        color: '#bdbdbd',
    },
    signupLink: {
        color: '#1DA1F2',
        fontWeight: '700',
    },
});