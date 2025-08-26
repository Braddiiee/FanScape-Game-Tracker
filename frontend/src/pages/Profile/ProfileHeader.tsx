import { Gamepad, Users, Calendar, Mail, Gift } from 'lucide-react';
import type { ProfileHeaderProps } from './types';

const ProfileHeader = ({ user }: ProfileHeaderProps) => (
  <div className="bg-blue-100 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
    <div className="flex flex-col items-center md:items-start gap-4">
      <img
        src={user.avatarUrl}
        alt="User Avatar"
        className="w-24 h-24 rounded-full border-4 border-blue-300 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // prevent infinite loop
            target.src = "https://placehold.co/50x50/A0D9F7/0A2330?text=JD";
        }} 
      />
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
        <p className="flex items-center justify-center md:justify-start gap-2 text-md text-gray-700 mt-2">
          <Mail size={18} className="text-blue-600" /> {user.email}
        </p>
        <p className="flex items-center justify-center md:justify-start gap-2 text-md text-gray-700">
          <Gift size={18} className="text-blue-600" /> {user.dateOfBirth}
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center md:text-left">
      <div className="flex flex-col items-center md:items-start">
        <Gamepad className="text-blue-600 mb-1" size={24} />
        <span className="text-2xl font-semibold text-gray-800">{user.gamesSaved}</span>
        <span className="text-sm text-gray-600">Games Saved</span>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <Users className="text-blue-600 mb-1" size={24} />
        <span className="text-2xl font-semibold text-gray-800">{user.teamsFollowed}</span>
        <span className="text-sm text-gray-600">Teams Followed</span>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <Calendar className="text-blue-600 mb-1" size={24} />
        <span className="text-2xl font-semibold text-gray-800">{user.joinedDate}</span>
        <span className="text-sm text-gray-600">Joined</span>
      </div>
    </div>
  </div>
);

export default ProfileHeader;