import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { View, TextInput, Pressable, Text, ActivityIndicator } from 'react-native';
import { fetchImages } from '../services/imageService';

export default function Register() {

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