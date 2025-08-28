import ProfileHeader from "./ProfileHeader";
import SavedGames from "./SavedGames";
import FavoriteTeams from "./FavoriteTeams";
import type { Game } from "./types";
import type { User } from "./types";
import type { Teams } from "./types";

// Mock Data For User
const mockUser: User = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    dateOfBirth: "May 15, 1990",
    avatarUrl: "https://placehold.co/100x100/A0D9F7/0A2330?text=JD",
    gamesSaved: 12,
    teamsFollowed: 5,
    joinedDate: "Jan 1, 2023",
};

const mockGames: Game[] = [
  { id: 'g1', homeTeam: 'Lakers', awayTeam: 'Celtics', time: '7:00 PM', score: '110-108' },
  { id: 'g2', homeTeam: 'Warriors', awayTeam: 'Bulls', time: '8:30 PM', score: '95-102' },
  { id: 'g3', homeTeam: 'Knicks', awayTeam: 'Heat', time: 'Postponed', score: '' },
  { id: 'g4', homeTeam: 'Rockets', awayTeam: 'Spurs', time: '6:00 PM', score: 'In Progress' },
];

const mockTeams: Teams[] = [
  { id: 't1', name: 'Lakers', logoUrl: 'https://placehold.co/50x50/A0D9F7/0A2330?text=LAL' },
  { id: 't2', name: 'Celtics', logoUrl: 'https://placehold.co/50x50/A0D9F7/0A2330?text=BOS' },
  { id: 't3', name: 'Warriors', logoUrl: 'https://placehold.co/50x50/A0D9F7/0A2330?text=GSW' },
  { id: 't4', name: 'Bulls', logoUrl: 'https://placehold.co/50x50/A0D9F7/0A2330?text=CHI' },
  { id: 't5', name: 'Knicks', logoUrl: 'https://placehold.co/50x50/A0D9F7/0A2330?text=NYK' },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-4 font-inter">
      {/* Inter font should be loaded in public/index.html or similar global CSS */}
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-8">Your Profile</h1>
        <ProfileHeader user={mockUser} />
        <SavedGames games={mockGames} />
        <FavoriteTeams teams={mockTeams} />
      </div>
    </div>
  );
};

export default Profile;