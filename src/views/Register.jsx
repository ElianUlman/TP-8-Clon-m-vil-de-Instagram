import React, { useState, useContext } from 'react';
import { SafeAreaView, View, TextInput, Pressable, Text, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
<<<<<<< HEAD
=======
import { View, TextInput, Pressable, Text, ActivityIndicator } from 'react-native';
import { fetchImages } from '../services/imageService';

export default function Register() {
>>>>>>> Elian

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
<<<<<<< HEAD
        });
        setIsAuthenticated(true);
        console.log(username, password);
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
        width: 300,
        height: 150,
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
=======
            searchHistory: [],
            profilePicture,
            followers,
            following
        })
        setIsAuthenticated(true)
        setLoading(false)
    }

    return (
        <View>
            <TextInput
                placeholder="User"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Pressable onPress={handleSubmit} disabled={loading}>
                {loading ? <ActivityIndicator /> : <Text>Register</Text>}
            </Pressable>
        </View>
    )
}
>>>>>>> Elian
