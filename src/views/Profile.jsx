import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Profile() {
    const { user } = useContext(AuthContext);

    if (!user) {
        return (
            <View style={styles.center}>
                <Text>No hay usuario logueado</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {user.profilePicture ? (
                <Image source={{ uri: user.profilePicture }} style={styles.avatar} />
            ) : (
                <View style={[styles.avatar, styles.avatarPlaceholder]}>
                    <Text style={styles.avatarPlaceholderText}>
                        {user.username?.charAt(0).toUpperCase()}
                    </Text>
                </View>
            )}
            <Text style={styles.username}>{user.username}</Text>

            <View style={styles.statsRow}>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>{user.followers ?? 0}</Text>
                    <Text style={styles.statLabel}>Seguidores</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>{user.following ?? 0}</Text>
                    <Text style={styles.statLabel}>Seguidos</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 12,
    },
    avatarPlaceholder: {
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarPlaceholderText: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    statsRow: {
        flexDirection: 'row',
        gap: 32,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 13,
        color: '#666',
    },
});