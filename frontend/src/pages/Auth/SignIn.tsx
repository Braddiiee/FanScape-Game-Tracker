import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'; 

const LogIn= () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md border border-gray-200">
        <div className="flex flex-col items-center">
          <img src={Logo} alt="FanScape Logo" className="h-16 w-16 mb-2" />
          <h1 className="text-2xl font-bold text-gray-800">FanScape</h1>
        </div>
        <h2 className="text-center text-2xl font-semibold text-gray-700">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email or Username</label>
            <input
              id="email"
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </form>
        <div className="text-center text-sm text-gray-600">
          Don't have an account? <Link to="/join" className="font-medium text-blue-600 hover:text-blue-500">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;