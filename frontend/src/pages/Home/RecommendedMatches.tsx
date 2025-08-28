import { Gamepad } from "lucide-react";
import MatchCard from "../../components/MatchCard";
import useFilters  from "../../context/useFilters";
import matchesData from "../../data/matches";
import type { Match } from "../../types";

const RecommendedMatches: React.FC = () => {
  const { sport, date } = useFilters(); // ✅ Use global filters

  // Filter matches based on selected sport and date
  const filteredMatches = (matchesData as Match[]).filter(
    (m) => (!sport || m.sport === sport) && (!date || m.match_date === date)
  );

  return (
    <div className="bg-white p-6 rounded-xl mb-8 border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Gamepad className="text-gray-600" size={26} />
        Recommended Matches
      </h3>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredMatches.map((match) => (
          <MatchCard
            key={match.match_id}
            homeTeam={match.home_team}
            awayTeam={match.away_team}
            matchScore={match.match_score}
            matchStatus={match.match_status}
            liveMinutes={match.live_duration_minutes}
            matchTime={match.match_time_utc}
            matchDate={match.match_date}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedMatches;
