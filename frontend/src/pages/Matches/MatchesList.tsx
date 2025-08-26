import React from "react";
import MatchCard from "../../components/MatchCard";
import matchesData from "../../data/matches";
import type { Match} from "../../types";


// Matches array
const matches: Match[] = matchesData as Match[];

const MatchesList : React.FC = () => {
  const leagues = Array.from(new Set(matches.map((m) => m.competition_title)));

  return (
    <div className="space-y-8">
      {leagues.map((league) => (
        <div key={league}>
          <h2>{league}</h2>
          <div className="space-y-4">
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
