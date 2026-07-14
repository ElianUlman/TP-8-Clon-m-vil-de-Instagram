import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import { fetchImages } from '../services/imageService';

export default function SearchInputView() {
  const navigation = useNavigation();
  const route = useRoute();
  const { user, addSearchHistory } = useContext(AuthContext);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (route.params?.reset) {
      setQuery('');
      setSuggestions([]);
    }
  }, [route.params?.reset]);

  useEffect(() => {
    const loadSuggestions = async () => {
      if (!query.trim()) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
        try {
          const data = await fetchImages(query, 6);
          console.log('SearchInput fetched', data?.length, 'suggestions for', query);
          setSuggestions(data);
        } catch (error) {
          console.log('No se pudieron cargar sugerencias', error);
        } finally {
          setLoading(false);
        }
    };

    const timeout = setTimeout(loadSuggestions, 250);
    return () => clearTimeout(timeout);
  }, [query]);

  const handleSearch = async (value) => {
    const trimmed = value?.trim();
    if (!trimmed) return;

    await addSearchHistory(trimmed);
    navigation.navigate('SearchResults', { searchText: trimmed });
  };

  const recent = (user?.searchHistory || []).slice(0, 8);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={20} color="#fff" />
        </Pressable>
        <TextInput
          autoFocus
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={() => handleSearch(query)}
          placeholder="Buscar"
          placeholderTextColor="#888"
          style={styles.input}
          returnKeyType="search"
        />
      </View>

      {!query.trim() ? (
        <View style={styles.historyContainer}>
          <Text style={styles.sectionTitle}>Recientes</Text>
          {recent.length === 0 ? (
            <Text style={styles.emptyText}>No hay búsquedas recientes</Text>
          ) : (
            recent.map((item, index) => (
              <Pressable key={`${item}-${index}`} style={styles.historyItem} onPress={() => handleSearch(item)}>
                <Ionicons name="time-outline" size={16} color="#aaa" />
                <Text style={styles.historyText}>{item}</Text>
              </Pressable>
            ))
          )}
        </View>
      ) : (
        <View style={styles.suggestionsContainer}>
          {loading ? (
            <Text style={styles.emptyText}>Buscando...</Text>
          ) : suggestions.length === 0 ? (
            <Text style={styles.emptyText}>Sin resultados</Text>
          ) : (
            <FlatList
              style={styles.suggestionList}
              data={suggestions}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Pressable style={styles.suggestionCard} onPress={() => handleSearch(item.description || query)}>
                  <View style={styles.suggestionImageWrapper}>
                    <Pressable onPress={() => navigation.getParent()?.navigate('PostScreen', { post: item })}>
                      <Image source={{ uri: item.url }} style={styles.suggestionImage} />
                    </Pressable>
                  </View>
                  <View style={styles.suggestionTextContainer}>
                    <Text style={styles.suggestionUsername}>{item.photographer || 'Usuario'}</Text>
                    <Text style={styles.suggestionDescription} numberOfLines={2}>{item.description || 'Foto relacionada'}</Text>
                  </View>
                </Pressable>
              )}
            />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', paddingTop: 16 },
  headerRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, marginBottom: 12 },
  backButton: { marginRight: 8, padding: 4 },
  input: { flex: 1, height: 42, borderWidth: 1, borderColor: '#333', borderRadius: 20, paddingHorizontal: 14, backgroundColor: '#1a1a1a', color: '#fff' },
  historyContainer: { flex: 1, paddingHorizontal: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 10, color: '#fff' },
  emptyText: { color: '#999', fontSize: 14 },
  historyItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#222' },
  historyText: { marginLeft: 8, fontSize: 15, color: '#fff' },
  suggestionsContainer: { flex: 1, paddingHorizontal: 12 },
  suggestionList: { flex: 1 },
  suggestionCard: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#222' },
  suggestionImageWrapper: { width: 56, height: 56, borderRadius: 28, overflow: 'hidden', marginRight: 10 },
  suggestionImage: { width: '100%', height: '100%' },
  suggestionTextContainer: { flex: 1 },
  suggestionUsername: { fontWeight: '700', fontSize: 14, color: '#fff' },
  suggestionDescription: { color: '#aaa', fontSize: 12, marginTop: 2 },
});