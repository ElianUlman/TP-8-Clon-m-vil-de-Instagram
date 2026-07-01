import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const saveUserData = async (userData) => {
    try {
      setUser(userData)
      await AsyncStorage.setItem('userData', user);

      console.log('Datos guardados con éxito');
    } catch (error) {
      console.error('Error al guardar datos:', error);
    }
  }

  const addSearchHistory = async (newSearch) => {
    if (!newSearch || !newSearch.trim()) return;

    const historialActual = user.searchHistory || [];
    const sinDuplicados = historialActual.filter(
      (item) => item.toLowerCase() !== newSearch.toLowerCase()
    );
    const nuevoHistorial = [newSearch, ...sinDuplicados];

    setUser({
      ...user,
      searchHistory: nuevoHistorial
    })
  }

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, addSearchHistory }}>
      {children}
    </AuthContext.Provider>
  );
}