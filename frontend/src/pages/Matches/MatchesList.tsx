import React from "react";
import MatchCard from "../../components/MatchCard";
import matchesData from "../../data/matches";
import type { Match } from "../../types";
import  useFilters from "../../context/useFilters";

const MatchesList: React.FC = () => {
    const { sport, date } = useFilters(); // ✅ Global filter

    // Filter matches first by selected sport/date
    const filteredMatches = (matchesData as Match[]).filter(
        (m) => (!sport || m.sport === sport) && (!date || m.match_date === date)
    );

    // Group filtered matches by league
    const leagues = Array.from(new Set(filteredMatches.map((m) => m.competition_title)));

    return (
        <div className="space-y-8">
            {leagues.map((league) => (
                <div key={league}>
                    <h2 className="text-xl font-semibold">{league}</h2>
                    <div className="space-y-4">
                        {filteredMatches
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
