import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Estado({ user }) {

    return (
        <View style={styles.wrapper}>
            <View style={styles.ring}>
                <Image source={{ uri: user.url }} style={styles.image} />
            </View>
            <Text style={styles.label} numberOfLines={1}>{user.photographer}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: { alignItems: 'center', marginRight: 14, width: 68 },
    ring: {
        width: 66,
        height: 66,
        borderRadius: 33,
        borderWidth: 2,
        borderColor: '#e1306c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: { width: 58, height: 58, borderRadius: 29 },
    label: { color: '#eee', fontSize: 11, marginTop: 6, maxWidth: 64, textAlign: 'center' },
});