import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Estado from './Estado.jsx';


export default function BarraEstados({userList}) {
  
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {userList.map((element) => (
        <Estado key={element.id} user={element} />
      ))}
    </ScrollView>
    
  );
}


const styles = StyleSheet.create({
    barraEstados: { height: 50},


})