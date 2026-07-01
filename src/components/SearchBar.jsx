import { TextInput, StyleSheet } from 'react-native';

export default function SearchBar({ setSearchText, searchText }) {

    return (
        <TextInput
            value={searchText}
            style={styles.searchBar}
            onChangeText={(text) => setSearchText(text)}
            placeholder="search 4 shit"
            placeholderTextColor="#999"
        />
    )
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 20,
        marginHorizontal: 10,
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: "white",
    }
});