import MatchCard from "../components/MatchCard";
import  matches  from "../data/matches";

const Matches = () => {
    const leagues = [...new Set(matches.map((m) => m.competition_title ))];

    return (
        <div className="space-y-8">
            {leagues.map((league) => (
                <div key={league}>
                    <h2>{league}</h2>
                    <div className="space-y-4">
                        {
                            matches
                            .filter((match) => match.competition_title === league)
                            .map((match) => (
                                <MatchCard
                                    key={match.match_id}
                                    homeTeam={match.home_team}
                                    awayTeam={match.away_team}
                                    matchScore = {match.match_score}
                                    status={match.match_status}
                                    liveDuration={match.live_duration_minutes}
                                    matchTime={match.match_time_utc}
                                />
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Matches;