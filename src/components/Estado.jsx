import React, { useState } from 'react';
import { Button, View, Text, Image } from 'react-native';




export default function Estado({user}) {

    return (
        <>
            <View>
                <Image source={{uri: user.url,}}/>
                <Text>{user.photographer} </Text>
            </View>
            <Button
            
            />

        </>

    )
}