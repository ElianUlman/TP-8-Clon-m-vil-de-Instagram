import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Estado from './Estado.jsx';

export default function BarraEstados({ userList }) {

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.ownStoryWrapper}>
        <View style={styles.ownStoryImage} />
        <View style={styles.addBadge}>
          <Text style={styles.addBadgeText}>+</Text>
        </View>
        <Text style={styles.storyLabel}>Ваша история</Text>
      </View>

      {userList.map((element) => (
        <Estado key={element.id} user={element} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#000' },
  content: { paddingHorizontal: 12, paddingVertical: 10, alignItems: 'flex-start' },
  ownStoryWrapper: { alignItems: 'center', marginRight: 14, width: 68 },
  ownStoryImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#e0605a',
  },
  addBadge: {
    position: 'absolute',
    top: 44,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#3897f0',
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBadgeText: { color: '#fff', fontSize: 12, lineHeight: 14 },
  storyLabel: { color: '#eee', fontSize: 11, marginTop: 6, maxWidth: 64, textAlign: 'center' },
});