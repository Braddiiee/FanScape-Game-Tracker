import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useFilters from "../../context/useFilters";

export default function Calendar() {
  // Global date
  const { date: selectedDate, setDate } = useFilters();

  // How many days to display at once
  const visibleCount = 13;

  // Track the start date (center of visible dates)
  const [startDate, setStartDate] = useState(new Date());

  // Format a date
  function formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = { weekday: "short", day: "numeric" };
    const label = date.toLocaleDateString("en-US", options);
    const value = date.toISOString().split("T")[0];
    return { label, value, date };
  }

  // Generate visible dates around startDate
  function generateDates() {
    const dates = [];
    const half = Math.floor(visibleCount / 2);

    for (let i = -half; i <= half; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);
      dates.push(formatDate(d));
    }

    return dates;
  }

  const dates = generateDates();

  return (
    <div className="flex flex-col">
      {/* Month name (from the middle date) */}
      <div className="flex items-center justify-center mb-2">
        <p>{dates[Math.floor(dates.length / 2)].date.toLocaleString("en-US", { month: "long", year: "numeric" })}</p>
      </div>

      <div className="flex items-center justify-between">
        {/* Left Arrow */}
        <button
          className="p-2"
          onClick={() => setStartDate(prev => {
            const d = new Date(prev);
            d.setDate(prev.getDate() - 1); // move 1 day back
            return d;
          })}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dates */}
        <ul className="flex gap-4">
          {dates.map(d => (
            <li
              key={d.value}
              onClick={() => setDate(d.value)}
              className={`list-none border border-gray-300 px-3 py-1 rounded-md cursor-pointer ${
                selectedDate === d.value ? "bg-blue-500 text-white" : ""
              }`}
            >
              {d.label}
            </li>
          ))}
        </ul>

        {/* Right Arrow */}
        <button
          className="p-2"
          onClick={() => setStartDate(prev => {
            const d = new Date(prev);
            d.setDate(prev.getDate() + 1); // move 1 day forward
            return d;
          })}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
