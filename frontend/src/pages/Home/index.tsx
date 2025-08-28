import RecommendedMatches from "./RecommendedMatches";
import FavoriteTeamMatches from "./FavoriteTeamMatches.tsx";

const App = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="min-w-6xl mx-auto py-10">

        <RecommendedMatches />

        <FavoriteTeamMatches  />
      </div>
    </div>
  );
};

export default App;
