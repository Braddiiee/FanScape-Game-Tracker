import { useState } from "react";
import { Volleyball, ChevronLeft, ChevronRight } from "lucide-react";
import { FaFutbol, FaFootballBall, FaBasketballBall, FaBaseballBall, FaTableTennis, FaSkating, FaGolfBall, FaMedal , FaMitten, FaBiking } from "react-icons/fa";
import  useFilters  from "../../context/useFilters.ts"


import type { Sport } from  "../../types";

export default function SportsSelector() {

    const sports: Sport[] = [
        { label: "Football", value: "football", icon: FaFutbol },
        { label: "American Football", value: "football", icon: FaFootballBall },
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


    const {sport: selectedSport, setSport} = useFilters();
    const [startIndex, setStartIndex] = useState(0);

    return(
        <div className="flex flex-row items-center justify-between mt-4">
        
            {/* Left Arrow   */}
            <button className="p-2" 
            onClick={() => setStartIndex(Math.max(0, startIndex - 1))}
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Sports grid */}
            <div className="flex flex-row">
                {sports.slice(startIndex, startIndex + 7).map((s) => (
                    <div
                        key={s.value}
                        onClick={() => setSport(s.value)} 
                        className={`flex items-center gap-2 border p-2 rounded-lg cursor-pointer m-5 ${
                            selectedSport === s.value ? "bg-blue-500 text-white" : ""
                        }`}
                    >
                        <s.icon size={24} />
                        <span>{s.label}</span>
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