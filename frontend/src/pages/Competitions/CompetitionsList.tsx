import matchesData from "../../data/matches";
import type { Match } from "../../types";
import MatchCard from "../../components/MatchCard";

const matches: Match[] = matchesData as Match[];

const CompetitionsList: React.FC = () => {

    // Get unique competition titles
    const competitions = Array.from ( new Set (matches.map( (m) => m.competition_title) ));

    return (
        <div className="space-y-8">
            {competitions.map((competition) => (
                <div key={competition}>
                    <h2 className="text-xl font-bold">{competition}</h2>
                    <div className="space-y-4">
                    {matches
                    .filter((match) => match.competition_title === competition)
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

export default CompetitionsList;