import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import logo from '../../assets/logo.png';

const LogIn = () => {
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Get authentication functions from context
  const { login, isLoading, error, clearError } = useAuth();
  
  // Navigation hook for redirecting after login
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    
    // Clear any previous errors
    clearError();
    
    // Basic validation
    if (!email.trim() || !password.trim()) {
      return; // You could add better error handling here
    }
    
    try {
      // Call the login function from AuthContext
      await login(email, password);
      
      // If login successful, redirect to home page
      navigate('/');
    } catch (error) {
      // Error is already handled in AuthContext
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md border border-gray-200">
        <div className="flex flex-col items-center">
          <img src={logo} alt="FanScape Logo" className="h-16 w-16 mb-2" />
          <h1 className="text-2xl font-bold text-gray-800">FanScape</h1>
        </div>
        
        <h2 className="text-center text-2xl font-semibold text-gray-700">Login</h2>
        
        {/* Error message display */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email or Username
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isLoading 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
        
        <div className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/join" className="font-medium text-blue-600 hover:text-blue-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;