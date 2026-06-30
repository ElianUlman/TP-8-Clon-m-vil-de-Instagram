import React, { useState, useContext } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Login() {

    const { user, isAuthenticated } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (isAuthenticated) {
            if (username === user.username && password === user.password) {
                console.log("Login Succesful!")
            }
            else {
                console.log("Login Unsuccesful!")
            }
        }
        else{
            console.log("There is no user registered")
        }

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
            <Pressable onPress={handleSubmit}><Text>Log in</Text></Pressable>
        </View>
    )
}