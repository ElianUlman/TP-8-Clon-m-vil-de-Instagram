import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { fetchImages } from '../services/imageService';

export default function Feed() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarImagenes = async () => {
      try {
        const data = await fetchImages('nature', 15);
        setImages(data);
      } catch (e) {
        console.log('No se pudieron cargar las imágenes');
      } finally {
        setLoading(false);
      }
    };

    cargarImagenes();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.url }} style={styles.image} />
          <Text style={styles.caption}>{item.photographer}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  list: { padding: 8 },
  card: { flex: 1, margin: 4 },
  image: { width: '100%', height: 150, borderRadius: 8 },
  caption: { fontSize: 12, color: '#666', marginTop: 2 },
});