import {  Star } from 'lucide-react';
import type {  FavoriteTeamsProps } from './types';

const FavoriteTeams = ({ teams } : FavoriteTeamsProps) => (
  <div className="bg-blue-100 p-6 rounded-xl">
    <h3 className="text-2xl font-bold text-gray-800 mb-4">Favorite Teams</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {teams.map(team => (
        // Changed bg-white to bg-transparent with a border
        <div key={team.id} className="bg-transparent border border-blue-300 p-4 rounded-lg flex flex-col items-center text-center">
          <img
            src={team.logoUrl}
            alt={`${team.name} Logo`}
            className="w-16 h-16 rounded-full border-2 border-blue-300 mb-2 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; // prevent infinite loop
                target.src = "https://placehold.co/50x50/A0D9F7/0A2330?text=Team";
            }}// Fallback
          />
          <p className="text-md font-medium text-gray-800">{team.name}</p>
          <Star className="text-yellow-500 mt-1" size={16} fill="currentColor"/>
        </div>
      ))}
    </div>
  </div>
);

export default FavoriteTeams;