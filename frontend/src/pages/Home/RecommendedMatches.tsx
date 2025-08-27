import { Gamepad } from "lucide-react";
import MatchCard from "../../components/MatchCard";
import type { MatchProps } from "./types";

const RecommendedMatches = ({ matches }: MatchProps) => {
  return (
    <div className="bg-white p-6 rounded-xl mb-8 border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Gamepad className="text-gray-600" size={26} />
        Recommended Matches
      </h3>

      <div className="flex flex-wrap justify-center gap-6">
        {matches.map((match) => (
          <MatchCard key={match.id} {...match} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedMatches;
