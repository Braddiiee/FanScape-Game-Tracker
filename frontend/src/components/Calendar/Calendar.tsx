import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Calendar() {

    // How many days should be displayed at once
    const visibleCount = 5;

    // Start from today
    const [startIndex, setStartIndex] = useState(0);

    // Function to format a date
    function formatDate(date: Date) {
        const options: Intl.DateTimeFormatOptions = { weekday: "short", day: "numeric" };
        const label = date.toLocaleDateString("en-US", options)
        const value = date.toISOString().split("T")[0];
        return { label, value, date }; 
    }

    // Generate dates dynamically based on startIndex
    function generateDates() {
        const base = new Date(); // today
        const dates = [];

        for (let i = startIndex; i < startIndex + visibleCount; i++) {
            const d = new Date(base);
            d.setDate(base.getDate() + i);
            dates.push(formatDate(d))
        }
        return dates;
    }

    const dates = generateDates();

    return (
        <div className="flex flex-col">
            {/* Month name (from the middle date) */}
            <div className="flex items-center justify-center mb-2">
                <p>{dates[Math.floor(dates.length / 2)].date.toLocaleString("en-US", { month: "long" })}</p>
            </div>

            <div className="flex items-center justify-between">
                {/* Left Arrow */}
                <button
                className="p-2"
                onClick={() => setStartIndex((prev) => prev - 1)}
                >
                <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dates */}
                <ul className="flex gap-4">
                {dates.map((d) => (
                    <li
                    key={d.value}
                    className="list-none border border-gray-300 px-3 py-1 rounded-md hover:border-gray-500 cursor-pointer"
                    >
                    {d.label}
                    </li>
                ))}
                </ul>

                {/* Right Arrow */}
                <button
                className="p-2"
                onClick={() => setStartIndex((prev) => prev + 1)}
                >
                <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
    

}