import React, { useState, useEffect, useContext } from 'react';
import {
    View, Text, Image, StyleSheet,
    FlatList, Pressable, ActivityIndicator, Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import { fetchImages } from '../services/imageService';

const SCREEN_WIDTH = Dimensions.get('window').width;
const GRID_ITEM_SIZE = (SCREEN_WIDTH - 4) / 3;

export default function Profile() {
    const { user } = useContext(AuthContext);
    const route = useRoute();

    // Si viene username por parámetro (desde un Post), lo usamos.
    // Si no, mostramos el perfil del usuario logueado.
    const username = route.params?.username ?? user?.username;

    // Datos que el Post ya conoce y nos pasa para no tener que re-fetchear
    const paramProfilePicture = route.params?.profilePicture ?? null;
    const paramDescription = route.params?.description ?? null;

    const [profileData, setProfileData] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Limpiar estado anterior al cambiar de perfil
        setProfileData(null);
        setPosts([]);

        if (!username) { setLoading(false); return; }
        loadProfile(username);
    }, [username]);

    const loadProfile = async (name) => {
        setLoading(true);
        try {
            const cacheKey = `profile_${name}`;
            const cached = await AsyncStorage.getItem(cacheKey);

            if (cached) {
                const { profile, posts: cachedPosts } = JSON.parse(cached);
                setProfileData(profile);
                setPosts(cachedPosts);
                return;
            }

            // No existe en cache: usar lo que nos pasó el Post como punto
            // de partida y buscar los posts de la grilla en paralelo
            const postImages = await fetchImages(name, 12);

            // La foto de perfil la tomamos del parámetro que ya teníamos
            // (post.url), con fallback al primer resultado del fetch de posts
            const resolvedPicture = paramProfilePicture ?? postImages?.[0]?.url ?? null;
            const resolvedDescription = paramDescription ?? postImages?.[0]?.description ?? '';

            const profile = {
                username: name,
                profilePicture: resolvedPicture,
                description: resolvedDescription,
                // Métricas derivadas del id de la foto de perfil
                // Usamos el id del primer post como semilla si no hay otro dato
                followers: postImages?.[0] ? postImages[0].id * 2 : 0,
                following: postImages?.[0] ? postImages[0].id : 0,
                postsCount: postImages?.[0] ? (postImages[0].id % 500) + 10 : 0,
            };

            await AsyncStorage.setItem(cacheKey, JSON.stringify({ profile, posts: postImages }));

            setProfileData(profile);
            setPosts(postImages);
        } catch (e) {
            console.log('Error loading profile:', e);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    if (!username || !profileData) {
        return (
            <View style={styles.center}>
                <Text style={styles.emptyText}>No hay usuario logueado</Text>
            </View>
        );
    }

    const Header = () => (
        <View style={styles.header}>
            <View style={styles.topRow}>
                {profileData.profilePicture ? (
                    <Image source={{ uri: profileData.profilePicture }} style={styles.avatar} />
                ) : (
                    <View style={[styles.avatar, styles.avatarPlaceholder]}>
                        <Text style={styles.avatarInitial}>
                            {profileData.username?.charAt(0).toUpperCase()}
                        </Text>
                    </View>
                )}

                <View style={styles.statsRow}>
                    <StatItem value={profileData.postsCount} label="Publicaciones" />
                    <StatItem value={formatNumber(profileData.followers)} label="Seguidores" />
                    <StatItem value={formatNumber(profileData.following)} label="Seguidos" />
                </View>
            </View>

            <Text style={styles.username}>{profileData.username}</Text>
            {profileData.description ? (
                <Text style={styles.description} numberOfLines={3}>
                    {profileData.description}
                </Text>
            ) : null}

            <Pressable style={({ pressed }) => [styles.editButton, pressed && styles.editButtonPressed]}>
                <Text style={styles.editButtonText}>Editar perfil</Text>
            </Pressable>

            <View style={styles.divider} />
        </View>
    );

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            ListHeaderComponent={<Header />}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
                <View style={styles.gridItem}>
                    <Image source={{ uri: item.url }} style={styles.gridImage} />
                </View>
            )}
        />
    );
}

function StatItem({ value, label }) {
    return (
        <View style={styles.statItem}>
            <Text style={styles.statNumber}>{value}</Text>
            <Text style={styles.statLabel}>{label}</Text>
        </View>
    );
}

function formatNumber(n) {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
    if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K';
    return String(n);
}

const styles = StyleSheet.create({
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    emptyText: { color: '#888', fontSize: 15 },
    list: { paddingBottom: 20 },

    header: {
        paddingHorizontal: 14,
        paddingTop: 16,
        paddingBottom: 8,
        backgroundColor: '#fff',
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    avatar: {
        width: 86,
        height: 86,
        borderRadius: 43,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    avatarPlaceholder: {
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarInitial: { fontSize: 34, color: '#fff', fontWeight: 'bold' },

    statsRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 16,
    },
    statItem: { alignItems: 'center' },
    statNumber: { fontSize: 17, fontWeight: '700', color: '#111' },
    statLabel: { fontSize: 12, color: '#555', marginTop: 2 },

    username: { fontSize: 14, fontWeight: '700', color: '#111', marginBottom: 3 },
    description: { fontSize: 13, color: '#333', lineHeight: 18, marginBottom: 10 },

    editButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 7,
        paddingVertical: 7,
        alignItems: 'center',
        marginBottom: 12,
        backgroundColor: '#fff',
    },
    editButtonPressed: { backgroundColor: '#f0f0f0' },
    editButtonText: { fontSize: 14, fontWeight: '600', color: '#111' },

    divider: { height: 1, backgroundColor: '#e0e0e0', marginHorizontal: -14 },

    gridItem: { width: GRID_ITEM_SIZE, height: GRID_ITEM_SIZE, margin: 1 },
    gridImage: { width: '100%', height: '100%' },
});