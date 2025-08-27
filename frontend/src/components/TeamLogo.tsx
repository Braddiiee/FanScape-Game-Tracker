import React from "react";
import { FaBasketballBall, FaFutbol } from "react-icons/fa";

interface TeamLogoProps {
    teamName?: string;
    sport: string;
    size?: string;
}

const TeamLogo: React.FC<TeamLogoProps> = ({sport, size = "w-10 h-10"}) => {
    return (
        <div className={`flex items-center justify-center rounded-full bg-blue-100 ${size}`}>
            {sport === "NBA" ? (
                <FaBasketballBall className="text-orange-600" size={22} />
            ) : ( 
                <FaFutbol className="text-blue-700" size={22} />
            )}
        </div>
    )
}

export default TeamLogo;