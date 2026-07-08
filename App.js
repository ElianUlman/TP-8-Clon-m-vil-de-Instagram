import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import React, { useState, useContext } from 'react';
import { AuthProvider, AuthContext } from './src/context/AuthContext';

import HomeView from './src/views/Home';
import ProfileView from './src/views/Profile';
import LoginView from './src/views/Login';
import RegisterView from './src/views/Register';
import SearchStack from './src/views/SearchStack';
import PostScreen from './src/views/PostScreen';

import { Home, User, Search, PlusSquare, Heart } from 'lucide-react-native';

const stack = createStackNavigator()
const topTab = createMaterialTopTabNavigator()
const bottomTab = createBottomTabNavigator();

// Shared dark palette
const COLORS = {
  background: '#000',
  border: '#1a1a1a',
  active: '#fff',
  inactive: '#8e8e8e',
  accent: '#e0605a',
};

// Custom dark theme so screens without explicit backgrounds don't flash white
const AppDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: COLORS.background,
    card: COLORS.background,
    border: COLORS.border,
    text: '#fff',
    primary: COLORS.accent,
  },
};

function MainTabs() {
  const getTabBarStyle = ({ route }) => {
    const isSearchFlow = route.name === 'Search' && route.state?.index > 0;

    return {
      display: isSearchFlow ? 'none' : 'flex',
      backgroundColor: COLORS.background,
      borderTopColor: COLORS.border,
      borderTopWidth: StyleSheet.hairlineWidth,
      height: 60,
      paddingTop: 6,
      paddingBottom: 8,
    };
  };

  return (
    <bottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.active,
        tabBarInactiveTintColor: COLORS.inactive,
        tabBarStyle: getTabBarStyle,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <bottomTab.Screen
        name="Home"
        component={HomeView}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Home color={color} size={size} fill={focused ? color : 'transparent'} />
          ),
        }}
      />
      <bottomTab.Screen
        name="Search"
        component={SearchStack}
        options={{
          title: 'search',
          tabBarIcon: ({ color, size }) => <Search color={color} size={size} />,
        }}
      />
      <bottomTab.Screen
        name="Profile"
        component={ProfileView}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </bottomTab.Navigator>
  );
}

function AppStack() {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.background },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '600' },
        headerShadowVisible: false,
        cardStyle: { backgroundColor: COLORS.background },
      }}
    >
      <stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <stack.Screen name="PostScreen" component={PostScreen} options={{ headerTitle: '' }}/>
    </stack.Navigator>
  );
}

function AuthStack() {
  return (
    <topTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: COLORS.background, elevation: 0, shadowOpacity: 0 },
        tabBarIndicatorStyle: { backgroundColor: COLORS.accent, height: 2 },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: COLORS.inactive,
        tabBarLabelStyle: { fontWeight: '600', textTransform: 'none' },
      }}
    >
      <topTab.Screen name="Login" component={LoginView} />
      <topTab.Screen name="Register" component={RegisterView} />
    </topTab.Navigator>
  )
}

function RootNavigator() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer theme={AppDarkTheme}>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default function App() {

  return (
    <AuthProvider>
      <StatusBar style="light" />
      <RootNavigator />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});