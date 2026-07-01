import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';




export default function Post({post}) {
    console.log(post)
    return (
        <>
            <View>
                <Image source={{uri: post.url,}} style={styles.pfp}></Image><Text>{post.photographer}</Text>
                <Image source={{uri: post.url}} style={styles.image}></Image>

                <Text>likes: *number*</Text>
                <Text>{post.photographer}: {post.description}</Text>
            </View>

        </>

    )
}

const styles = StyleSheet.create({
    image: { width: "100%", height: 100,},
    pfp: {width: 50, height: 50, borderRadius: 13000,},

})