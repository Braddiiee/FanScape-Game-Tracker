import { createContext } from "react";

// Define the shape of our filter state
type Filters = {
    sport: string | null;
    date: string | null;
    setSport: (sport: string) => void;
    setDate: (date: string) => void;
}

// Create context
export const FiltersContext = createContext<Filters | undefined>(undefined);


