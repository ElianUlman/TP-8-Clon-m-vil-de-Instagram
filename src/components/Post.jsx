import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Post({ post }) {
    const navigation = useNavigation();

    const irAlPerfil = () => {
        navigation.navigate('Profile', {
            username: post.photographer,
            // Pasamos la foto y descripción que ya tenemos,
            // así Profile no depende de un fetch nuevo para mostrarlos
            profilePicture: post.url,
            description: post.description,
        });
    };

    return (
        <View style={styles.container}>
            {/* Header del post: foto de perfil + nombre clickeable */}
            <Pressable
                onPress={irAlPerfil}
                style={({ pressed }) => [styles.header, pressed && styles.headerPressed]}
            >
                <Image source={{ uri: post.url }} style={styles.pfp} />
                <View style={styles.headerText}>
                    <Text style={styles.photographer}>{post.photographer}</Text>
                    <Text style={styles.suggestion}>Sugerencia para ti</Text>
                </View>
            </Pressable>

            {/* Imagen del post */}
            <Image source={{ uri: post.url }} style={styles.image} />

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.likes}>❤️ likes: —</Text>
                <Text style={styles.description} numberOfLines={2}>
                    <Text style={styles.photographerInline}>{post.photographer} </Text>
                    {post.description}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    headerPressed: {
        opacity: 0.6,
    },
    pfp: {
        width: 38,
        height: 38,
        borderRadius: 19,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    headerText: {
        marginLeft: 10,
    },
    photographer: {
        fontSize: 13,
        fontWeight: '700',
        color: '#111',
    },
    suggestion: {
        fontSize: 11,
        color: '#888',
    },
    image: {
        width: '100%',
        height: 300,
    },
    footer: {
        paddingHorizontal: 10,
        paddingTop: 8,
        paddingBottom: 4,
    },
    likes: {
        fontSize: 13,
        fontWeight: '600',
        color: '#111',
        marginBottom: 4,
    },
    description: {
        fontSize: 13,
        color: '#333',
        lineHeight: 18,
    },
    photographerInline: {
        fontWeight: '700',
    },
});