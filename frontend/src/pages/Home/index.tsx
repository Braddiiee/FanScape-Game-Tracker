import { mockRecommendedMatches, mockFavoriteTeamMatches } from "./MockData";
import RecommendedMatches from "./RecommendedMatches";
import FavoriteTeamMatches from "./FavoriteTeamMatches.tsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto py-10">
        
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          FanScape Home
        </h1>

        <RecommendedMatches matches={mockRecommendedMatches} />

        <FavoriteTeamMatches matches={mockFavoriteTeamMatches} />
      </div>
    </div>
  );
};

export default App;
