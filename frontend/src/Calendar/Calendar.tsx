import { ChevronLeft, ChevronRight } from "lucide-react";



export default function Calendar() {

    const dates = ["20 Wed", "21 Thu", "Yesterday", "Today", "Tomorrow", "25 Mon", "26 Tue"];

    return(
        <div className="flex flex-col">

            {/* Month name */}
            <div className="flex items-center justify-center mb-2">
                <p>August</p>
            </div>

            <div className="flex items-center justify-between">

                {/* Left Arrow   */}
                <button className="p-2">
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dates */}
                <ul className="flex gap-4">
                    {dates.map((date, index) => (
                        <li key={index} className="list-none border border-gray-300 px-3 py-1 rounded-md hover:border-gray-500 cursor-pointer">
                            {date}
                        </li>  
                    ))}
                </ul>

                {/* Right Arrow */}
                <button className="p-2">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )

}
