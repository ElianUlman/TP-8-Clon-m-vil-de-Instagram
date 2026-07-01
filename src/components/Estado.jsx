import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';




export default function Estado({user}) {

    return (
        <>
            <View>
                <Image source={{uri: user.url,}} style={styles.image} />
                <Text>{user.photographer} </Text>
            </View>

        </>

    )
}

const styles = StyleSheet.create({
    image: { width: '100%', height: 150, borderRadius: 8 },


})