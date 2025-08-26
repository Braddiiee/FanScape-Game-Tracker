import { useParams } from 'react-router-dom';
import { teams } from '../../data/menus'; 
import matches from '../../data/matches'; 

const TeamPage = () => {
    
    //  Get URL parameters with explicit typing for type safety
    const { sport, slug } = useParams<{ sport: string; slug: string }>();

    // Safety check for URL parameters
    if (!sport || !slug) {
        return <h2>Error: URL parameters are missing.</h2>;
    }

    // Ensure case-insensitive matching by converting the sport name to lowercase.
    const selectedSportCategory = teams[sport.toLowerCase()];
    
    if (!selectedSportCategory) {
        return <h2>Sport Not Found</h2>;
    }

    const team = selectedSportCategory.find((t) => t.slug === slug);

    if (!team) {
        return <h2>Team Not Found</h2>;
    }

    // Filter the matches array to find matches for this specific team
    const teamMatches = matches.filter(match => 
        match.home_team.team_name === team.name || match.away_team.team_name === team.name
    );

    // Now we have the team's information and its list of matches!
    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-4">{team.name}</h1>
            <p className="text-lg text-gray-600 mb-6">
                Showing all matches for the {team.name} team.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Matches</h2>
            {teamMatches.length > 0 ? (
                <ul className="space-y-4">
                    {teamMatches.map(match => (
                        <li key={match.match_id} className="p-4 border rounded-lg shadow-sm">
                            <h3 className="text-xl font-medium">{match.match_title}</h3>
                            <p className="text-gray-500">
                                {match.home_team.team_name} vs {match.away_team.team_name}
                            </p>
                            <p className="text-sm text-gray-400">
                                {match.match_date} at {match.match_time_utc}
                            </p>
                            <p className="text-sm text-gray-400">
                                Status: {match.match_status}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No upcoming or past matches found for this team. 😔</p>
            )}
        </div>
    );
};

export default TeamPage;