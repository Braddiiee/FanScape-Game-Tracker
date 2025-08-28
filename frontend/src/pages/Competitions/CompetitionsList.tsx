import matchesData from "../../data/matches";
import type { Match } from "../../types";
import MatchCard from "../../components/MatchCard";
import useFilters  from "../../context/useFilters";

const CompetitionsList: React.FC = () => {
    const { sport, date } = useFilters(); // ✅ Access global filters

    // Filter matches first by selected sport and date
    const filteredMatches = (matchesData as Match[]).filter(
        (m) => (!sport || m.sport === sport) && (!date || m.match_date === date)
    );

    // Get unique competitions from the filtered matches
    const competitions = Array.from(new Set(filteredMatches.map((m) => m.competition_title)));

    return (
        <div className="space-y-8">
            {competitions.map((competition) => (
                <div key={competition}>
                    <h2 className="text-xl font-bold">{competition}</h2>
                    <div className="space-y-4">
                        {filteredMatches
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
