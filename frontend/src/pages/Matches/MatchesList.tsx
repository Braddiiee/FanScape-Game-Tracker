import React, { useEffect, useState } from "react";
import MatchCard from "../../components/MatchCard";
import type { Match } from "../../types";
import useFilters from "../../context/useFilters";
import { gamesApi } from "../../services"; // your axios instance

const MatchesList: React.FC = () => {
  const { sport, date } = useFilters(); // ✅ Global filter
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await gamesApi.getAll(); // fetch all games
        let fetchedMatches = response.data as Match[];

        // Apply global filters
        fetchedMatches = fetchedMatches.filter(
          (m) => (!sport || m.sport === sport) && (!date || m.match_date === date)
        );

        setMatches(fetchedMatches);
      } catch (err: any) {
        setError(err.message || "Failed to fetch matches");
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [sport, date]); // refetch whenever filters change

  if (loading) return <p>Loading matches...</p>;
  if (error) return <p>{error}</p>;
  if (matches.length === 0) return <p>No matches found for the current filters.</p>;

  // Group matches by league
  const leagues = Array.from(new Set(matches.map((m) => m.competition_title)));

  return (
    <div className="space-y-8">
      {leagues.map((league) => (
        <div key={league} className="bg-white p-6 rounded-xl border border-gray-200 m-5">
          <h2 className="text-xl font-semibold m-5">{league}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {matches
              .filter((match) => match.competition_title === league)
              .map((match) => (
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
      ))}
    </div>
  );
};

export default MatchesList;
