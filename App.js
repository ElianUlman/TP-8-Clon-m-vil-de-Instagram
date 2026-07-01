import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React, { useState, useContext } from 'react';
import { AuthProvider, AuthContext } from './src/context/AuthContext';

import HomeView from './src/views/Home';
import ProfileView from './src/views/Profile';
import LoginView from './src/views/Login';
import RegisterView from './src/views/Register';
import SearchView from './src/views/Search';

import { Home, User, Search } from 'lucide-react-native';

const stack = createStackNavigator()
const topTab = createMaterialTopTabNavigator()
const bottomTab = createBottomTabNavigator();

function MainTabs() {
  return (
    <bottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <bottomTab.Screen
        name="Home"
        component={HomeView}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />
        }}
      />
      <bottomTab.Screen
        name="Search"
        component={SearchView}
        options={{
          title: 'search',
          tabBarIcon: ({ color, size }) => <Search color={color} size={size} />
        }}
      />
      <bottomTab.Screen
        name="Profile"
        component={ProfileView}
        options={{ 
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />
        }}
      />
    </bottomTab.Navigator>
  );
}



function AppStack() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
}

function AuthStack() {
  return (
    <topTab.Navigator>
      <topTab.Screen name="Login" component={LoginView} />
      <topTab.Screen name="Register" component={RegisterView} />
    </topTab.Navigator>
  )
}

function RootNavigator() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default function App() {

  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
