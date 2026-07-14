import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image, Pressable, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { fetchImages } from '../services/imageService';
import SearchBar from '../components/SearchBar';

export default function SearchResultsView() {
  const navigation = useNavigation();
  const route = useRoute();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState(route.params?.searchText || 'nature');

  const query = route.params?.searchText || 'nature';

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  useEffect(() => {
    const loadResults = async () => {
      setLoading(true);
      try {
        const data = await fetchImages(query, 30);
          console.log('SearchResults fetched', data?.length, 'items for query', query);
        setImages(data);
      } catch (error) {
        console.log('No se pudieron cargar resultados');
      } finally {
        setLoading(false);
      }
    };

    loadResults();
  }, [query]);

  const handleSearch = (value) => {
    const trimmed = value?.trim();
    if (!trimmed) return;
    navigation.setParams({ searchText: trimmed });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Pressable onPress={() => navigation.popToTop()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={20} color="#fff" />
        </Pressable>
        <SearchBar
          searchText={inputValue}
          setSearchText={setInputValue}
          onSubmit={handleSearch}
          placeholder="Buscar"
          style={{ flex: 1 }}
        />
      </View>

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
            <Pressable onPress={() => navigation.getParent()?.navigate('PostScreen', { post: item })}>
              <Image source={{ uri: item.url }} style={styles.image} />
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  headerRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingTop: 16, paddingBottom: 8 },
  backButton: { marginRight: 8, padding: 4 },
  input: { flex: 1, height: 42, borderWidth: 1, borderColor: '#ddd', borderRadius: 20, paddingHorizontal: 14, backgroundColor: '#f2f2f2' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  list: { paddingHorizontal: 2, paddingBottom: 8 },
  columnWrapper: { justifyContent: 'space-between' },
  image: { width: '32%', aspectRatio: 1, marginBottom: 2, borderRadius: 2 },
});
