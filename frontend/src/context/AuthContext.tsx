import { useState, useEffect } from 'react';
import type {ReactNode } from 'react';
import { AuthContext } from './useAuth';
import type  { AuthContextType } from './useAuth';

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
      // Call your backend /profile endpoint to see if user is logged in
      const response = await fetch('http://localhost:5000/api/profile', {
        credentials: 'include', // This sends cookies/session data
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (error) {
      // User is not logged in, which is fine
      console.log(`User not authenticated ${error}`);
    }
  };

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for session cookies
        body: JSON.stringify({ username: email, password }),
      });

      if (response.ok) {
        await response.json();
        // After successful login, fetch user profile
        await checkAuthStatus();
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Login failed');
      }
    } catch (error) {
      setError(`Network error. Please try again. ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string, birthDate?: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name, 
          username: email, 
          email, 
          password,
          birth_day: birthDate ? new Date(birthDate).getDate() : null,
          birth_month: birthDate ? new Date(birthDate).getMonth() + 1 : null,
          birth_year: birthDate ? new Date(birthDate).getFullYear() : null,
        }),
      });

      if (response.ok) {
        // Registration successful, redirect to login
        setError(null);
        // You could redirect here or show success message
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Registration failed');
      }
    } catch (error) {
      setError(`Network error. Please try again. ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await fetch('http://localhost:5000/api/logout', {
        method: 'POST',
        credentials: 'include',
      });
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