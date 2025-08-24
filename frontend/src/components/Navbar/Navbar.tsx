import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/image.png";
import {X, Menu} from "lucide-react"




export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full shadow-sm bg-white">
            <div className="flex justify-between items-center px-5 py-4">

                {/* Logo */}
                <div className="flex items-center m-5">
                    <img src={Logo} alt="Logo" className="h-10 w-auto" />
                </div>

                {/* Navbar Links */}
                <div className="flex items-center m-5">
                    <ul className="flex gap-6">
                    <li><Link to="/matches" className="hover:text-gray-600">Matches</Link></li>
                    <li><Link to="/teams" className="hover:text-gray-600">Teams</Link></li>
                    <li><Link to="/competitions" className="hover:text-gray-600">Competitions</Link></li>
                    </ul>
                </div>

                {/* Desktop Register Buttons */}
                <div className="flex items-center gap-4 m-5">
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
                </div>

                {/* Mobile Haburger Button */}
                <button
                className="md:hidden block"
                onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-5 pb-5 space-y-4">

                    {/* Logo */}
                    <div className="flex items-center m-5">
                        <img src={Logo} alt="Logo" className="h-10 w-auto" />
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <Link to="/matches" className="hover:text-gray-600">Matches</Link>
                        <Link to="/teams" className="hover:text-gray-600">Teams</Link>
                        <Link to="/competitions" className="hover:text-gray-600">Competitions</Link>
                    </div>

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
                    </div>

                </div>
            )}
        </nav>
    );
}
