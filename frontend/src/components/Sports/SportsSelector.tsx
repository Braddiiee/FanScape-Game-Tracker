import { useState } from "react";
import { Volleyball, ChevronLeft, ChevronRight } from "lucide-react";
import { FaFootballBall, FaBasketballBall, FaBaseballBall, FaTableTennis, FaSkating, FaGolfBall, FaMedal , FaMitten, FaBiking } from "react-icons/fa";

import type { Sport } from  "../../types";

export default function SportsSelector() {

    const sports: Sport[] = [
        { label: "Football", value: "football", icon: FaFootballBall },
        { label: "Basketball", value: "basketball", icon: FaBasketballBall },
        { label: "Baseball", value: "baseball", icon: FaBaseballBall },
        { label: "Volleyball", value: "volleyball", icon: Volleyball }, 
        { label: "Tennis", value: "tennis", icon: FaTableTennis },
        { label: "Skateboarding", value: "skateboarding", icon: FaSkating },
        { label: "Golf", value: "golf", icon: FaGolfBall },
        { label: "Rugby", value: "rugby", icon: FaMedal },
        { label: "Boxing", value: "boxing", icon: FaMitten },
        { label: "Cycling", value: "cycling", icon: FaBiking },
    ];


    const [startIndex, setStartIndex] = useState(0);

    return(
        <div className="flex items-center justify-between">
        
            {/* Left Arrow   */}
            <button className="p-2" 
            onClick={() => setStartIndex(Math.max(0, startIndex - 1))}
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dates */}
                <div className="grid grid-cols-2 gap-4">
                    {sports.map((sport) => (
                        <div key={sport.value} className="flex items-center gap-2 border p-2 rounded-lg">
                        <sport.icon size={24} />
                        <span>{sport.label}</span>
                        </div>
                    ))}
                </div>

            {/* Right Arrow */}
            <button className="p-2"
            onClick={() => setStartIndex(Math.min(sports.length, startIndex + 1))}>
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    )
}