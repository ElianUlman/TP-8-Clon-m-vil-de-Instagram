import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { View, TextInput, Pressable, Text } from 'react-native';

export default function Register() {

    const { setUser, setIsAuthenticated } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        setUser({
            username,
            password
        })
        setIsAuthenticated(true)
        console.log(username, password)
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
            <Pressable onPress={handleSubmit}><Text>Register</Text></Pressable>
            
        </View>
    )
}