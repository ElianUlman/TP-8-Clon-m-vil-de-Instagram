import React from 'react';
import { View, StyleSheet } from 'react-native';
import Feed from "../components/Feed"
import { useRoute } from '@react-navigation/native';

export default function Home() {
    const route = useRoute();
    const searchText = route.params?.searchText;

    return (
        <View style={styles.container}>
            <Feed searchText={searchText} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000' },
});