import React, { useState } from 'react';

import Feed from "../components/Feed"
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <>
            <Feed />
        </>

    )
}