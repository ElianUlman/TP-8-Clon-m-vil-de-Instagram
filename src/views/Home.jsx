import React from 'react';
import Feed from "../components/Feed"
import { useRoute } from '@react-navigation/native';

export default function Home() {
    const route = useRoute();
    const searchText = route.params?.searchText;

    return (
        <>
            <Feed searchText={searchText} />
        </>
    )
}