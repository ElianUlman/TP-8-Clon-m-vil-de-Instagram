import React, { useState, useContext } from 'react';
import { SafeAreaView, View, TextInput, Pressable, Text, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Register({ navigation }) {
    const { setUser, setIsAuthenticated } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!username.trim() || !password.trim()) return;

        setLoading(true);
        let profilePicture = null;
        let followers = 0;
        let following = 0;

        try {
            const data = await fetchImages(username, 1);
            if (data && data.length > 0) {
                profilePicture = data[0].url;
                following = data[0].id;
                followers = data[0].id * 2;
            }
        } catch (e) {
            console.log('No se pudo traer la foto de perfil, se registra sin foto');
        }

        setUser({
            username,
            password,
        });
        setIsAuthenticated(true);
        console.log(username, password);
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
                        placeholder="Username or email"
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
                            secureTextEntry
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>

                    <Pressable style={styles.forgotWrapper}>
                        <Text style={styles.forgotText}>Forgotten Password?</Text>
                    </Pressable>

                    <Pressable onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.buttonText}>Register</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.signupText}>
                    Already have an account?{' '}
                    <Text style={styles.signupLink} onPress={() => navigation.navigate('Login')}>
                        Login
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
