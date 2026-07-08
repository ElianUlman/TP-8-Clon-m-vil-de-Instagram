import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './src/context/AuthContext';

import HomeView from './src/views/Home';
import ProfileView from './src/views/Profile';
import LoginView from './src/views/Login';
import RegisterView from './src/views/Register';
import SearchStack from './src/views/SearchStack';

import { Home, User, Search } from 'lucide-react-native';

const homeStack = createStackNavigator()
const appStack = createStackNavigator()
const topTab = createMaterialTopTabNavigator()
const bottomTab = createBottomTabNavigator();

// Stack propio del tab Home: contiene el Feed y el perfil ajeno.
// Al estar dentro del bottomTab, la barra de navegación no desaparece.
function HomeStack() {
  return (
    <homeStack.Navigator>
      <homeStack.Screen
        name="Feed"
        component={HomeView}
        options={{ headerShown: false }}
      />
      <homeStack.Screen
        name="UserProfile"
        component={ProfileView}
        options={{ title: 'Perfil' }}
      />
    </homeStack.Navigator>
  );
}

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
        component={HomeStack}  // ← ahora es un stack, no directamente HomeView
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />
        }}
      />
      <bottomTab.Screen
        name="Search"
        component={SearchStack}
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
    <appStack.Navigator>
      <appStack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
    </appStack.Navigator>
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