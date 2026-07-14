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
  style,
  inputStyle,
}) {
  return (
    <Pressable onPress={onPress} style={[styles.wrapper, style]}> 
      <TextInput
        value={searchText}
        style={[styles.searchBar, inputStyle]}
        onChangeText={(text) => setSearchText?.(text)}
        onSubmitEditing={(e) => {
          const text = e?.nativeEvent?.text;
          if (typeof onSubmit === 'function') onSubmit(text);
        }}
        onFocus={onFocus}
        editable={editable}
        showSoftInputOnFocus={showSoftInputOnFocus}
        placeholder={placeholder}
        placeholderTextColor="#888"
        returnKeyType="search"
        pointerEvents={editable ? 'auto' : 'none'}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    marginHorizontal: 12,
  },
  searchBar: {
    height: 42,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 14,
    backgroundColor: '#1a1a1a',
    color: '#fff',
  },
});