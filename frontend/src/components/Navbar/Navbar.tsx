import { Link } from "react-router-dom";
import { useState } from"react";
import {Menu, X, ChevronDown, ChevronUp, User} from "lucide-react";
import Logo from "../../assets/logo.png";
import { teams, competitions } from "../../data/menus";
import { FaFutbol, FaBasketballBall, FaBaseballBall,  FaHockeyPuck } from "react-icons/fa";


export default function Navabar() {

    // Use State holding a boolean value to determine if the menu should be visible
    const [isOpen, setIsOpen] = useState(false);
    const [teamsOpen, setTeamsOpen] = useState(false);
    const [compsOpen, setCompsOpen] = useState(false);
    const [mobileTeamsOpen, setMobileTeamsOpen] = useState(false);
    const [mobileCompsOpen, setMobileCompsOpen ] = useState(false);

    const sportIcons: Record<string, React.ReactNode> = {
        Football: <FaFutbol className="inline-block mr-2" />,
        Basketball: <FaBasketballBall className="inline-block mr-2" />,
        Baseball: <FaBaseballBall className="inline-block mr-2" />,
        Hockey: <FaHockeyPuck className="inline-block mr-2" />,
    };

    return (
        <nav className="w-full shadow-sm bg-white">

            {/* Desktop Menu */}
            <div className="flex justify-between items-center px-5 py-4">

                {/* Logo */}
                <div className="flex items-center m-5">
                    <img src={Logo} alt="Logo" className="h-10 w-auto" />
                </div>

                {/* Navbar Links (Desktop) */}
                
                <div className="hidden md:flex items-center m-5">
                    <ul className="flex gap-6 items-start">

                        {/* Matches (Unchanged) */}
                        <li>
                            <Link to="/matches">Matches</Link>
                        </li>

                        {/* Teams (Mega-Menu on Desktop) */}
                        <li
                            className="relative"
                            onMouseEnter={() => setTeamsOpen(true)}
                            onMouseLeave = {() => setTeamsOpen(false)}
                        >
                            {/* Toggle teams mega-menu onclick */}
                            <button
                                onClick={() => setTeamsOpen(!teamsOpen)}
                                className="hover:text-gray-600 flex flex-row text-base"
                            >
                                Teams
                                <span>{teamsOpen ? <ChevronUp /> : <ChevronDown />}</span>
                            </button> 
                       

                            {/* Teams - Mega Panel */}
                            {/* Positioned Relative to its parent */}
                            <div
                                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[750px] rounded bg-white border border-black p-6 z-50 ${teamsOpen ? "block" : "hidden" }`}
                            >
                                <div className="grid grid-cols-4 gap-12">

                                    {/* Object.keys(teams).map(...) helps me loop through teams and get key alone */}
                                    {Object.keys(teams).map((sport) => (

                                        // Column for one sport
                                        <div key={sport}>
                                            <h2 className="mb-2 font-semibold flex items-center">
                                                <span className="w-6 h-6 flex items-center justify-center rounded bg-gray-200 mr-2">
                                                    {sportIcons[sport]}
                                                </span>
                                                {sport}
                                            </h2>


                                            <ul className="space-y-1">

                                                {/* Get the teams for that specific sport, looping through it's array */}
                                                {teams[sport].map((team) => (
                                                    <li key={team.slug}>
                                                        <Link
                                                            to={`/teams/${team.slug}`}
                                                            className="block text-sm hover:text-blue-400"
                                                        >
                                                            {team.name}
                                                        </Link>
                                                    </li>
                                                ))}

                                            </ul>

                                        </div>
                                    ))}

                                </div>
                                
                            </div>
                        </li>

                        {/* Competitions (Mega-Menu on Desktop) */}
                        <li
                            className="relative"
                            onMouseOver = {() => setCompsOpen(true)}
                            onMouseLeave = {() => setCompsOpen(false)}
                        >

                            {/* Toggle comps mega-menu onclick */}
                            <button
                                onClick={() => setCompsOpen(!compsOpen)}
                                className="hover:text-gray-600 flex flex-row text-base"
                            >
                                Competitions
                                <span>{compsOpen ? <ChevronUp /> : <ChevronDown />}</span>
                            </button>  

                            {/* Competitions Mega Panel */}
                            <div
                                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[750px] rounded bg-white border border-black p-6 z-50 ${compsOpen ? "block" : "hidden" } `}
                            >
                                {/* Object.keys(competitions).map(...) helps me loop through teams and get key alone */}
                                <div className="grid grid-cols-4 gap-12">
                                    {Object.keys(competitions).map((competition) => (

                                        <div key={competition}>
                                            <h2 className="mb-2 font-semibold">{competition}</h2>

                                            <ul className="space-y-1">

                                                {/* Get the teams for that specific sport, looping through it's array */}
                                                {competitions[competition].map((competition) => (
                                                    <li key={competition.slug}>
                                                        <Link
                                                            to={`/teams/${competition.slug}`}
                                                            className="block text-sm hover:text-blue-400"
                                                        >
                                                            {competition.name}
                                                        </Link>
                                                    </li>
                                                ))}

                                            </ul>
                                        </div>
                                    ))}

                                </div>

                            </div>


                        </li>


                    </ul>
                </div>

                {/* Desktop Register Buttons  */}

                <div className="hidden md:flex items-center gap-4 m-5">
                    <Link
                        to="/sign-in"
                        className="border border-gray-200 px-5 py-2 rounded hover:bg-gray-100"
                    >
                        Sign In
                    </Link>
                    <Link
                        to="/join"
                        className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800"
                    >
                        Join
                    </Link>   
                    <Link
                        to="/profile"
                        className="hidden bg-black text-white px-5 py-2 rounded hover:bg-gray-800 text-center"
                    >
                        <User />
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}

                <button
                    className="block md:hidden"
                    onClick = {() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} /> }
                </button>
                
            </div>

            {/* Mobile Menu */}

            {isOpen && (
                <div className="md:hidden px-5 pb-5 space-y-4">

                    {/* Mobile Logo */}

                    <div className="flex items-center m-5">
                        <img src={Logo} alt="Logo" className="h-10 w-auto" />
                    </div>

                    {/* Mobile Links */}

                    <div className="flex flex-col gap-4">
                        <Link to="/matches" className="hover:text-gray-600">Matches</Link>

                        {/* Mobile Teams accordion */}
                        <div>

                            {/* The button for the accordion header. Clicking it toggles the `mobileTeamsOpen` state. */}
                            <button
                                onClick={() => setMobileTeamsOpen(!mobileTeamsOpen)}
                                className="w-full text-left flex justify-between items-center hover:text-gray-600"
                            >
                                <span>Teams</span>
                                {/* The plus/minus icon changes based on the accordion's state. */}
                                <span>{mobileTeamsOpen ? "-" : "+"}</span>
                            </button>

                            {/* This div contains the list of teams and is only visible when `mobileTeamsOpen` is true. */}
                            {mobileTeamsOpen && (
                                <div className="pl-4 mt-2 space-y-2">
                                {/* This maps over the `sportsTeams` data to create a nested list, with sport names as headers and teams as sub-links. */}
                                {Object.keys(teams).map((sport) => (
                                    <div key={sport}>
                                    <div className="font-semibold">{sport}</div>
                                    <div className="pl-2">
                                        {teams[sport].map((team) => (
                                        <Link
                                            key={team.slug}
                                            to={`/teams/${team.slug}`}
                                            className="block text-sm py-1 hover:text-gray-700"
                                        >
                                            {team.name}
                                        </Link>
                                        ))}
                                    </div>
                                    </div>
                                ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Competitions accordion */}
                        
                        <div>
                            <button
                                onClick={() => setMobileCompsOpen(!mobileCompsOpen)}
                                className="w-full text-left flex justify-between items-center hover:text-gray-600"
                            >
                                <span>Competitions</span>
                                <span>{mobileCompsOpen ? "-" : "+"}</span>
                            </button>
                            {mobileCompsOpen && (
                                <div className="pl-4 mt-2 space-y-2">
                                {Object.keys(competitions).map((sport) => (
                                    <div key={sport}>
                                    <div className="font-semibold">{sport}</div>
                                    <div className="pl-2">
                                        {competitions[sport].map((comp) => (
                                        <Link
                                            key={comp.slug}
                                            to={`/competitions/${comp.slug}`}
                                            className="block text-sm py-1 hover:text-gray-700"
                                        >
                                            {comp.name}
                                        </Link>
                                        ))}
                                    </div>
                                    </div>
                                ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Auth Buttons (same styling as desktop but stacked) */}
                    {/* These are the 'Sign In' and 'Join' buttons, styled for the mobile view. */}
                    <div className="flex flex-col gap-3 mt-4">
                        <Link
                            to="/sign-in"
                            className="border border-gray-200 px-5 py-2 rounded hover:bg-gray-100 text-center"
                        >
                            Sign In
                        </Link>

                        <Link
                            to="/join"
                            className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 text-center"
                        >
                            Join
                        </Link>

                        <Link
                            to="/profile"
                            className="hidden bg-black text-white px-5 py-2 rounded hover:bg-gray-800 text-center"
                        >
                            <User />
                        </Link>
                    </div>


                </div>
            )}

        </nav>
    )


}