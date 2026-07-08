import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, FlatList, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SearchBar from '../components/SearchBar';
import { fetchImages } from '../services/imageService';

export default function SearchView() {
  const navigation = useNavigation();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarImagenes = async () => {
      setLoading(true);
      try {
        const data = await fetchImages('travel', 18);
        setImages(data);
      } catch (error) {
        console.log('No se pudieron cargar las imágenes de búsqueda');
      } finally {
        setLoading(false);
      }
    };

    cargarImagenes();
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar
        searchText=""
        setSearchText={() => {}}
        editable={false}
        placeholder="Buscar"
        onPress={() => navigation.navigate('SearchInput')}
      />

      <Text style={styles.sectionTitle}>Explorar</Text>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={images}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => (
            <Image source={{ uri: item.url }} style={styles.image} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginHorizontal: 12, marginTop: 10, marginBottom: 8 },
  list: { paddingHorizontal: 2, paddingBottom: 8 },
  columnWrapper: { justifyContent: 'space-between' },
  image: { width: '32%', aspectRatio: 1, marginBottom: 2, borderRadius: 2 },
});