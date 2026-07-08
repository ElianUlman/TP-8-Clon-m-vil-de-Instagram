import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react-native';

export default function Post({ post }) {
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [likeCount, setLikeCount] = useState(post.likes ?? 1234);

    const toggleLike = () => {
        setLiked((prev) => !prev);
        setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    };

    const toggleBookmark = () => {
        setBookmarked((prev) => !prev);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: post.url }} style={styles.pfp} />
                <Text style={styles.username}>{post.photographer}</Text>
                <Text style={styles.menuDots}>⋮</Text>
            </View>

            <Image source={{ uri: post.url }} style={styles.image} />

            <View style={styles.actionsRow}>
                <Pressable onPress={toggleLike} style={styles.actionIcon} hitSlop={8}>
                    <Heart
                        size={24}
                        color={liked ? '#ed4956' : '#fff'}
                        fill={liked ? '#ed4956' : 'transparent'}
                    />
                </Pressable>

                <Pressable style={styles.actionIcon} hitSlop={8}>
                    <MessageCircle size={24} color="#fff" />
                </Pressable>

                <Pressable style={styles.actionIcon} hitSlop={8}>
                    <Send size={24} color="#fff" />
                </Pressable>

                <Pressable onPress={toggleBookmark} style={styles.bookmarkIcon} hitSlop={8}>
                    <Bookmark
                        size={24}
                        color="#fff"
                        fill={bookmarked ? '#fff' : 'transparent'}
                    />
                </Pressable>
            </View>

            <Text style={styles.likes}>Нравится: {likeCount.toLocaleString('ru-RU')}</Text>
            <Text style={styles.caption}>
                <Text style={styles.captionUsername}>{post.photographer} </Text>
                {post.description}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#000' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
<<<<<<< HEAD
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
=======
    pfp: { width: 32, height: 32, borderRadius: 16, marginRight: 10 },
    username: { color: '#fff', fontWeight: '600', flex: 1 },
    menuDots: { color: '#fff', fontSize: 18, paddingHorizontal: 6 },
    image: { width: '100%', aspectRatio: 1 },
    actionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 4,
    },
    actionIcon: { marginRight: 16 },
    bookmarkIcon: { marginLeft: 'auto' },
    likes: { color: '#fff', fontWeight: '700', paddingHorizontal: 10, marginTop: 4, marginBottom: 2 },
    caption: { color: '#fff', paddingHorizontal: 10, paddingBottom: 8, lineHeight: 18 },
    captionUsername: { fontWeight: '700' },
>>>>>>> luca
});