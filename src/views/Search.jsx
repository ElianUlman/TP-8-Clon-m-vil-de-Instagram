import React, { useState, useContext } from 'react';
import { View, FlatList, Image, StyleSheet, ActivityIndicator, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SearchBar from '../components/SearchBar';

import { AuthContext } from '../context/AuthContext';


export default function SearchView() {

    const [searchText, setSearchText] = useState('');
    const { user, addSearchHistory } = useContext(AuthContext);
    const navigation = useNavigation();

    const handleSearch = (query) => {
        if (!query || !query.trim()) return;
        addSearchHistory(query);
        navigation.navigate('Home', { searchText: query });
    };

    const ultimasBusquedas = (user?.searchHistory || []).slice(0, 5);

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                setSearchText={setSearchText}
                searchText={searchText}
                onSubmit={() => handleSearch(searchText)}
            />

            {ultimasBusquedas.length > 0 && (
                <View style={{ paddingHorizontal: 10, marginTop: 15 }}>
                    <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>Últimas búsquedas</Text>
                    {ultimasBusquedas.map((item, index) => (
                        <Pressable
                            key={`${item}-${index}`}
                            onPress={() => handleSearch(item)}
                            style={{
                                paddingVertical: 8,
                                paddingHorizontal: 12,
                                backgroundColor: '#eee',
                                borderRadius: 8,
                                marginBottom: 6,
                            }}
                        >
                            <Text>{item}</Text>
                        </Pressable>
                    ))}
                </View>
            )}
        </View>
    )
}