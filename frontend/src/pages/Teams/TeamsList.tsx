import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MatchCard from "../../components/MatchCard";
import { gamesApi} from "../../services/games"; 
import { teamsApi } from "../../services/teams";
import useFilters from "../../context/useFilters";
// import { useAuth } from "../../context/useAuth";

interface Team {
  id: number;
  name: string;
  slug: string;
  logo_url?: string;
}

interface Match {
  match_id: number;
  home_team: Team;
  away_team: Team;
  match_score?: string;
  match_status?: string;
  live_duration_minutes?: number;
  match_time_utc?: string;
  match_date?: string;
  sport?: string;
}

const TeamPage = () => {
  const {  slug } = useParams<{ sport: string; slug: string }>();
  const { sport: filterSport, date: filterDate } = useFilters();


  const [team, setTeam] = useState<Team | null>(null);
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchTeamAndMatches = async () => {
      try {
        // Fetch all teams in this sport and find the one matching the slug
        const teamsResponse = await teamsApi.getAll();
        const sportTeams = teamsResponse.data.filter((t: Team) => t.slug === slug);

        if (sportTeams.length === 0) {
          setError("Team Not Found");
          return;
        }

        const selectedTeam = sportTeams[0];
        setTeam(selectedTeam);

        // Fetch all games and filter for this team
        const gamesResponse = await gamesApi.getAll();
        const teamGames = gamesResponse.data.filter(
          (match: Match) =>
            match.home_team.id === selectedTeam.id ||
            match.away_team.id === selectedTeam.id
        );

        // Apply global filters
        const filteredGames = teamGames.filter(
          (match: Match) =>
            (!filterSport || match.sport === filterSport) &&
            (!filterDate || match.match_date === filterDate)
        );

        setMatches(filteredGames);
      } catch (err) {
        setError(err.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamAndMatches();
  }, [slug, filterSport, filterDate]);

  if (loading) return <p>Loading team data...</p>;
  if (error) return <p>{error}</p>;
  if (!team) return <p>Team not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">{team.name}</h1>
      <p className="text-lg text-gray-600 mb-6">
        Showing matches for {team.name}.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Matches</h2>
      {matches.length > 0 ? (
        <ul className="space-y-4">
          {matches.map((match) => (
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
