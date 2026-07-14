import React, { useContext } from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthProvider, AuthContext } from './src/context/AuthContext';

import HomeView from './src/views/Home';
import ProfileView from './src/views/Profile';
import LoginView from './src/views/Login';
import RegisterView from './src/views/Register';
import SearchStack from './src/views/SearchStack';
import PostScreen from './src/views/PostScreen';

import { Home, User, Search } from 'lucide-react-native';

const HomeStack = createStackNavigator();
const AppStackNav = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

const COLORS = {
  background: '#000',
  border: '#1a1a1a',
  active: '#fff',
  inactive: '#8e8e8e',
  accent: '#e0605a',
};

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

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Feed"
        component={HomeView}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="UserProfile"
        component={ProfileView}
        options={{
          title: 'Perfil',
          headerStyle: {
            backgroundColor: COLORS.background,
          },
          headerTintColor: '#fff',
        }}
      />
    </HomeStack.Navigator>
  );
}

function MainTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.active,
        tabBarInactiveTintColor: COLORS.inactive,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopColor: COLORS.border,
          borderTopWidth: StyleSheet.hairlineWidth,
          height: 60,
          paddingTop: 6,
          paddingBottom: 8,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Home
              color={color}
              size={size}
              fill={focused ? color : 'transparent'}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Search color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <User color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function AppStack() {
  return (
    <AppStackNav.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
        },
        cardStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <AppStackNav.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />

      <AppStackNav.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          headerTitle: '',
        }}
      />
    </AppStackNav.Navigator>
  );
}

function AuthStack() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.background,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.accent,
          height: 2,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: COLORS.inactive,
        tabBarLabelStyle: {
          fontWeight: '600',
          textTransform: 'none',
        },
      }}
    >
      <TopTab.Screen
        name="Login"
        component={LoginView}
      />

      <TopTab.Screen
        name="Register"
        component={RegisterView}
      />
    </TopTab.Navigator>
  );
}

function RootNavigator() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer theme={AppDarkTheme}>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
      />
      <RootNavigator />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});