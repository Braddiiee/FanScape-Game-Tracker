import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Matches from "./pages/Matches";
import Competitions from "./pages/Competitions";
import TeamPage from "./pages/Teams/TeamsList";
import { FiltersProvider } from "./context/FiltersContext";

function App() {
    return (
        <FiltersProvider>
            <Router>
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Sports DashBoard</h1>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/matches" element={<Matches />} />
                        <Route path="/competitions" element={<Competitions />} />

                        {/* Dynamic team route */}
                        <Route path="/teams/:sport/:slug"  element={<TeamPage />} />

                    </Routes>
                </div>
            </Router>
        </FiltersProvider>
    )

}

export default App;