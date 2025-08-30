import { useState, useEffect } from 'react';
import type {ReactNode } from 'react';
import { AuthContext } from './useAuth';
import type  { AuthContextType } from './useAuth';
import { authApi } from '../services/api';

// Define what user data looks like
interface User {
  id: number;
  username: string;
  email: string;
  birthDate?: string;
}


// Props for the provider component
interface AuthProviderProps {
  children: ReactNode;
}

// The provider component that wraps your app
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // State variables
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if user is already logged in when app loads
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Function to check if user is already authenticated
  const checkAuthStatus = async () => {
    try {
        const { data } = await authApi.profile();
        setUser(data);
      
    } catch {
      // User is not logged in, which is fine
      setUser(null)
    }
  };

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await authApi.login(email, password);
      await checkAuthStatus();
    } catch (err) {
        const error = err as Error;
        console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string, birthDate?: string) => {
    setIsLoading(true);
    setError(null);

      try {
        await authApi.register({
          name,
          email,
          password,
          birth_day: birthDate ? new Date(birthDate).getDate() : null,
          birth_month: birthDate ? new Date(birthDate).getMonth() + 1 : null,
          birth_year: birthDate ? new Date(birthDate).getFullYear() : null,
        });
      } catch (err) {
          const error = err as Error;
          console.error(error.message);
      } finally {
        setIsLoading(false);
      }
  };

  // Logout function
  const logout = async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setError(null);
    }
  };

  // Clear error messages
  const clearError = () => setError(null);

  // Value object that will be provided to all components
  const value: AuthContextType = {
    user,
    isLoading,
    login,
    register,
    logout,
    error,
    clearError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};