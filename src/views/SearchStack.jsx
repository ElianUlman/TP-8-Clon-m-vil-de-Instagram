import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import SearchView from './Search';
import SearchInputView from './SearchInput';
import SearchResultsView from './SearchResults';

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Stack.Screen name="SearchHome" component={SearchView} />
      <Stack.Screen name="SearchInput" component={SearchInputView} />
      <Stack.Screen name="SearchResults" component={SearchResultsView} />
    </Stack.Navigator>
  );
}
