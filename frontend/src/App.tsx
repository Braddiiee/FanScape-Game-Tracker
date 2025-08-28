import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Matches from "./pages/Matches";
import Competitions from "./pages/Competitions";
import TeamPage from "./pages/Teams/TeamsList";
import Profile from "./pages/Profile"


import SportsSelector from "./components/Sports/SportsSelector";
import Calendar from "./components/Calendar/Calendar";
import { FiltersProvider } from "./context/FiltersProvider";

function App() {
    return (
        <FiltersProvider>
            <Router>
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Sports DashBoard</h1>

                    {/* === GLOBAL FILTERS === */}
                    <div className="mb-6 space-y-4">
                        <SportsSelector />
                        <Calendar />
                    </div> 

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/matches" element={<Matches />} />
                        <Route path="/competitions" element={<Competitions />} />
                        <Route path="/profile" element={<Profile />} />
                        

                        {/* Dynamic team route */}
                        <Route path="/teams/:sport/:slug"  element={<TeamPage />} />

                    </Routes>
                </div>
            </Router>
        </FiltersProvider>
    )

}

export default App;