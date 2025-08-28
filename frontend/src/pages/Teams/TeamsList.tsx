import { useParams } from "react-router-dom";
import { teams } from "../../data/menus";
import matches from "../../data/matches";
import MatchCard from "../../components/MatchCard";
import useFilters  from "../../context/useFilters";

const TeamPage = () => {
  //  Get URL parameters
  const { sport: urlSport, slug } = useParams<{ sport: string; slug: string }>();

  // Get global filters
  const { sport: filterSport, date: filterDate } = useFilters();

  // Safety check
  if (!urlSport || !slug) {
    return <h2>Error: URL parameters are missing.</h2>;
  }

  // Find the sport category from URL (case-insensitive)
  const selectedSportCategory = teams[urlSport.toLowerCase()];
  if (!selectedSportCategory) return <h2>Sport Not Found</h2>;

  // Find the team by slug
  const team = selectedSportCategory.find((t) => t.slug === slug);
  if (!team) return <h2>Team Not Found</h2>;

  // Filter matches for this team
  const teamMatches = matches
    .filter(
      (match) =>
        match.home_team.team_name === team.name || match.away_team.team_name === team.name
    )
    // Apply global filters
    .filter(
      (match) =>
        (!filterSport || match.sport === filterSport) &&
        (!filterDate || match.match_date === filterDate)
    );

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">{team.name}</h1>
      <p className="text-lg text-gray-600 mb-6">
        Showing matches for {team.name}.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Matches</h2>
      {teamMatches.length > 0 ? (
        <ul className="space-y-4">
          {teamMatches.map((match) => (
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
        </ul>
      ) : (
        <p className="text-gray-500">
          No matches found for this team with the current filters. 😔
        </p>
      )}
    </div>
  );
};

export default TeamPage;
