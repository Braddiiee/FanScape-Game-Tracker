import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// Define the shape of our filter state
type Filters = {
    sport: string | null;
    date: string | null;
    setSport: (sport: string) => void;
    setDate: (date: string) => void;
}

// Create context
const FiltersContext = createContext<Filters | undefined>(undefined);

// Provider component wraps the app 
export function FiltersProvider({ children }: {children: ReactNode}) {
    const [sport, setSport] = useState<string | null>(null);
    const [date, setDate] = useState<string | null>(null);

    return (
        <FiltersContext.Provider value={{ sport, date, setSport, setDate }}>
            {children}
        </FiltersContext.Provider>
    );
}

// Custom hoook for consuming context
function useFilters() {
    const context = useContext(FiltersContext);
    if (!context) throw new Error("useFilters must be used inside FiltersProvider");
    return context;
}

export default useFilters;