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
  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}