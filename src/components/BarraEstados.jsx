import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Estado from './Estado.jsx';


export default function BarraEstados({ userList }) {

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View>
        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYMwYrNhsFgPTUPDwPRFbV53IkdT6F7Zl8iPZUS9XA7YTWJxv1fgByE0&s=10", }} style={styles.image} />
        <Text>Tus historias</Text>
      </View>

      {userList.map((element) => (
        <Estado key={element.id} user={element} />
      ))}
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  barraEstados: { height: 50 },
  image: { width: 150, height: 150, borderRadius: 13000, marginRight: 20 },

})