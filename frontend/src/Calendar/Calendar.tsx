import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Calendar() {

    const dates = [
        { label: "24 Tue", value: "2025-07-24" },
        { label: "25 Wed", value: "2025-07-25" },
        { label: "26 Thu", value: "2025-07-26" },
        { label: "27 Fri", value: "2025-07-27" },
        { label: "28 Sat", value: "2025-07-28" },
        { label: "29 Sun", value: "2025-07-29" },
        { label: "30 Mon", value: "2025-07-30" },
        { label: "31 Tue", value: "2025-07-31" },
        { label: "1 Wed", value: "2025-08-01" },
        { label: "2 Thu", value: "2025-08-02" },
        { label: "3 Fri", value: "2025-08-03" },
        { label: "4 Sat", value: "2025-08-04" },
        { label: "5 Sun", value: "2025-08-05" },
        { label: "6 Mon", value: "2025-08-06" },
        { label: "7 Tue", value: "2025-08-07" },
        { label: "8 Wed", value: "2025-08-08" },
        { label: "9 Thu", value: "2025-08-09" },
        { label: "10 Fri", value: "2025-08-10" },
        { label: "11 Sat", value: "2025-08-11" },
        { label: "12 Sun", value: "2025-08-12" },
        { label: "13 Mon", value: "2025-08-13" },
        { label: "14 Tue", value: "2025-08-14" },
        { label: "15 Wed", value: "2025-08-15" },
        { label: "16 Thu", value: "2025-08-16" },
        { label: "17 Fri", value: "2025-08-17" },
        { label: "18 Sat", value: "2025-08-18" },
        { label: "19 Sun", value: "2025-08-19" },
        { label: "20 Mon", value: "2025-08-20" },
        { label: "21 Tue", value: "2025-08-21" },
        { label: "22 Wed", value: "2025-08-22" },
        { label: "Yesterday", value: "2025-08-23" },
        { label: "Today", value: "2025-08-24" },
        { label: "Tomorrow", value: "2025-08-25" },
        { label: "26 Tue", value: "2025-08-26" },
        { label: "27 Wed", value: "2025-08-27" },
        { label: "28 Thu", value: "2025-08-28" },
        { label: "29 Fri", value: "2025-08-29" },
        { label: "30 Sat", value: "2025-08-30" },
        { label: "31 Sun", value: "2025-08-31" },
        { label: "1 Mon", value: "2025-09-01" },
        { label: "2 Tue", value: "2025-09-02" },
        { label: "3 Wed", value: "2025-09-03" },
        { label: "4 Thu", value: "2025-09-04" },
        { label: "5 Fri", value: "2025-09-05" },
        { label: "6 Sat", value: "2025-09-06" },
        { label: "7 Sun", value: "2025-09-07" },
        { label: "8 Mon", value: "2025-09-08" },
        { label: "9 Tue", value: "2025-09-09" },
        { label: "10 Wed", value: "2025-09-10" },
        { label: "11 Thu", value: "2025-09-11" },
        { label: "12 Fri", value: "2025-09-12" },
        { label: "13 Sat", value: "2025-09-13" },
        { label: "14 Sun", value: "2025-09-14" },
        { label: "15 Mon", value: "2025-09-15" },
        { label: "16 Tue", value: "2025-09-16" },
        { label: "17 Wed", value: "2025-09-17" },
        { label: "18 Thu", value: "2025-09-18" },
        { label: "19 Fri", value: "2025-09-19" },
        { label: "20 Sat", value: "2025-09-20" },
        { label: "21 Sun", value: "2025-09-21" },
        { label: "22 Mon", value: "2025-09-22" },
        { label: "23 Tue", value: "2025-09-23" },
        { label: "24 Wed", value: "2025-09-24" }
    ];

    const [startIndex , setStartIndex] = useState(0)
    const visibleCount = 5;


    return(
        <div className="flex flex-col">

            {/* Month name */}
            <div className="flex items-center justify-center mb-2">
                <p>August</p>
            </div>

            <div className="flex items-center justify-between">

                {/* Left Arrow   */}
                <button className="p-2" 
                onClick={() => setStartIndex(Math.max(0, startIndex - 1))}
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dates */}
                <ul className="flex gap-4">
                    {/* Use of index to only see 5 dates*/}
                    {dates.slice(startIndex, startIndex + visibleCount).map(date => (
                        <li className="list-none border border-gray-300 px-3 py-1 rounded-md hover:border-gray-500 cursor-pointer">
                            {date.label}
                        </li>  
                    ))}
                </ul>

                {/* Right Arrow */}
                <button className="p-2"
                onClick={() => setStartIndex(Math.min(dates.length - visibleCount, startIndex + 1))}>
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )

}
