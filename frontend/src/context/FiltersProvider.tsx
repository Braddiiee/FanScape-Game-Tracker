import { useState } from "react";
import type { ReactNode } from "react";
import { FiltersContext } from "./FiltersContext";

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [sport, setSport] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);

  return (
    <FiltersContext.Provider value={{ sport, date, setSport, setDate }}>
      {children}
    </FiltersContext.Provider>
  );
}
