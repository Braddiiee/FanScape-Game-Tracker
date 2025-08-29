import { createContext, useContext } from 'react';

// Define what user data looks like
interface User {
  id: number;
  username: string;
  email: string;
  birthDate?: string;
}

// Define what our context will provide
export interface AuthContextType {
  user: User | null;           // Current user (null if not logged in)
  isLoading: boolean;          // Loading state for API calls
  login: (email: string, password: string) => Promise<void>;  // Login function
  register: (name: string, email: string, password: string, birthDate?: string) => Promise<void>;  // Register function
  logout: () => void;          // Logout function
  error: string | null;        // Error messages
  clearError: () => void;      // Clear error messages
}

// Create the context with a default value
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};