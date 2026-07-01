import React, { useState } from 'react';

import Feed from "../components/Feed"
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';




export default function Home() {
    const navigation = useNavigation();

    return (
        <>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')} 
            />
            
            <Feed />
        </>

    )
}