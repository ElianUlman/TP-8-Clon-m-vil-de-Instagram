import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Banner de arriba de la pantalla.
// - Si no se pasa "username", muestra el logo de Instagram (vista Feed).
// - Si se pasa "username", muestra el nombre y un botón para volver al Feed.
export default function Header({ username }) {
    const navigation = useNavigation();

    if (!username) {
        return (
            <View style={[styles.container, styles.logoContainer]}>
                <Image
                    source={require('../../assets/insta-text-white.png')} // <-- poné acá tu ruta
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => navigation.navigate('Home')}
                style={styles.backButton}
                hitSlop={8}
            >
                <Ionicons name="arrow-back" size={22} color="#fff" />
            </Pressable>
            <Text style={styles.username}>{username}</Text>
            <View style={styles.backButton} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        backgroundColor: '#000',
    },
    logoContainer: {
        justifyContent: 'flex-start',
    },
    logo: { width: 160, height: 44 },
    backButton: { width: 32, alignItems: 'flex-start' },
    username: {
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});