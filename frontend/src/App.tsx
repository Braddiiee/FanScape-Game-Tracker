import type { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Competitions from "./pages/Competitions";
import TeamPage from "./pages/Teams/TeamsList";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar/Navbar";
import SportsSelector from "./components/Sports/SportsSelector";
import Calendar from "./components/Calendar/Calendar";

import SignIn from "./pages/Auth/SignIn";
import Join from "./pages/Auth/Join";

import { FiltersProvider } from "./context/FiltersProvider";
import { AuthProvider } from "./context/AuthContext";

import { Navigate } from 'react-router-dom';
import { useAuth } from './context/useAuth'

function RequireAuth({ children }: { children: ReactNode }) {
  const { user, isLoading } = useAuth();
  if (isLoading) return null;
  return user ? children : <Navigate to="/sign-in" replace />;
}


function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="mb-6 space-y-4">
        <SportsSelector />
        <Calendar />
      </div>
      <Outlet /> {/* Nested page content renders here */}
    </>
  );
}

// Layout for register/login pages
function AuthLayout() {
  return <Outlet />; // just renders SignIn or Join
}

function App() {
  return (
    <AuthProvider>
        <FiltersProvider>
        <Router>
            <Routes>
            {/* All pages that show navbar, calendar, sports selector */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/competitions" element={<Competitions />} />
                <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
                <Route path="/teams/:sport/:slug" element={<TeamPage />} />
            </Route>

            {/* Register/Login pages without navbar/calendar */}
            <Route element={<AuthLayout />}>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/join" element={<Join />} />
            </Route>
            </Routes>
        </Router>
        </FiltersProvider>
    </AuthProvider>
  );
}

export default App;
