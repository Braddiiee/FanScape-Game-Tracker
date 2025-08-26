import { BookmarkMinus, Info } from 'lucide-react';
import type { SavedGamesProps } from './types';

const SavedGames = ({ games }: SavedGamesProps) => (
  <div className="bg-blue-100 p-6 rounded-xl mb-6">
    <h3 className="text-2xl font-bold text-gray-800 mb-4">Saved Games</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {games.map(game => (
        // Changed bg-white to bg-transparent with a border
        <div key={game.id} className="bg-transparent border border-blue-300 p-4 rounded-lg flex flex-col justify-between items-center text-center">
          <p className="text-lg font-semibold text-gray-900">{game.homeTeam} vs {game.awayTeam}</p>
          <p className="text-sm text-gray-700">{game.time}</p>
          {game.score && <p className="text-md font-medium text-blue-700">{game.score}</p>}
          <div className="mt-3 flex gap-2">
            <button className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm p-2 rounded-md transition-colors duration-200 bg-red-100">
              <BookmarkMinus size={16} /> Unfollow
            </button>
            <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm p-2 rounded-md transition-colors duration-200 bg-blue-200">
              <Info size={16} /> Details
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SavedGames;