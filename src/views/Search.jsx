import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, ActivityIndicator, Text, TextInput } from 'react-native';
import SearchBar from '../components/SearchBar';


export default function SearchView() {

    const [searchText, setSearchText] = useState();

    return (
        <>
            <SearchBar setSearchText={setSearchText} searchText={searchText} />
        </>
    )
}