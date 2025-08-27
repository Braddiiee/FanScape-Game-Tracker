import { Star } from "lucide-react";
import MatchCard from "../../components/MatchCard";
import type { MatchProps } from "./types";

const FavoriteTeamMatches = ({ matches }: MatchProps) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Star className="text-yellow-500 fill-yellow-400" size={26} />
        Matches of Your Favorite Teams
      </h3>

      <div className="flex flex-wrap justify-center gap-6">
        {matches.map((match) => (
          <MatchCard key={match.id} {...match} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteTeamMatches;
