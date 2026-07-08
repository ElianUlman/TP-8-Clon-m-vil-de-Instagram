import React from 'react';
import { Pressable, TextInput, StyleSheet } from 'react-native';

export default function SearchBar({
  setSearchText,
  searchText,
  onSubmit,
  editable = true,
  onFocus,
  onPress,
  placeholder = 'Buscar',
  showSoftInputOnFocus = true,
}) {
  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <TextInput
        value={searchText}
        style={styles.searchBar}
        onChangeText={(text) => setSearchText?.(text)}
        onSubmitEditing={onSubmit}
        onFocus={onFocus}
        editable={editable}
        showSoftInputOnFocus={showSoftInputOnFocus}
        placeholder={placeholder}
        placeholderTextColor="#999"
        returnKeyType="search"
        pointerEvents="none"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  searchBar: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});