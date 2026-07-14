import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { fetchImages } from '../services/imageService';
import BarraEstados from './BarraEstados.jsx';
import Post from './Post.jsx';

export default function Feed({ searchText = "communism" }) {
  const navigation = useNavigation();

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarImagenes = async () => {
      setLoading(true);
      try {
        const data = await fetchImages(searchText, 15);
        setImages(data);
      } catch (e) {
        console.log('No se pudieron cargar las imágenes');
      } finally {
        setLoading(false);
      }
    };

    cargarImagenes();
  }, [searchText]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        contentContainerStyle={styles.list}
        ListHeaderComponent={<BarraEstados userList={images} />}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("PostScreen", { post: item })}
          >
            <View style={styles.card}>
              <Post post={item} />
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  list: { paddingBottom: 12 },
  card: { marginBottom: 12 },
});