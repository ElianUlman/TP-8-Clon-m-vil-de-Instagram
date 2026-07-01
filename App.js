import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


import React, { useState, useContext } from 'react';
import { AuthProvider, AuthContext } from './src/context/AuthContext';

import Home from './src/views/Home';
import Profile from './src/views/Profile';
import Login from './src/views/Login';
import Register from './src/views/Register';

import { fetchImages } from './src/services/imageService';

const stack = createStackNavigator()
const tab = createMaterialTopTabNavigator()

function AppStack() {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Profile" component={Profile} />
    </stack.Navigator>
  )
}

function AuthStack() {
  return (
    <tab.Navigator>
      <tab.Screen name="Login" component={Login} />
      <tab.Screen name="Register" component={Register} />
    </tab.Navigator>
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
      <RootNavigator/>
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
