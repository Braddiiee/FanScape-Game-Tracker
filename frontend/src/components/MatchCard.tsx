import React from "react";
import type { Match } from "../types";
import { BookmarkPlus } from "lucide-react";
import TeamLogo from "./TeamLogo";

interface MatchCardProps {
    sport?: Match["sport_name"];
    league?: Match["competition_title"];
    homeTeam: Match["home_team"];
    awayTeam: Match["away_team"];
    matchStatus: Match["match_status"];
    matchDate: Match["match_date"];
    matchTime: Match["match_time_utc"];
    liveMinutes?: Match["live_duration_minutes"];
    matchScore: Match["match_score"]
}

const MatchCard: React.FC<MatchCardProps> = ({
    league,
    homeTeam,
    awayTeam,
    matchStatus,
    matchTime,
    liveMinutes,
    matchScore,
}) => {

    const isLive = matchStatus.includes("Live")

    const renderMatchStatus = () => {
        if (matchStatus === "Live") return `${liveMinutes}'`;
        if (matchStatus === "Final") return "FT";
        return matchTime;
    };


    return (

        <div className="flex border border-gray-300 rounded-md p-6 gap-6 bg-white w-full sm:w-[45%] lg:w-[30%] hover:shadow-md transition">

            {/* Team name and scores */}
            <div className="flex flex-col gap-4 w-full">
                {/* Home Team */}
                <div className="flex items-center gap-3">
                <TeamLogo teamName={homeTeam.team_name} sport={league} />
                <span className="text-gray-900">
                    {homeTeam.team_name}
                </span>
                <span className="ml-auto text-lg font-bold">{matchScore.home_score}</span>
                </div>

                {/* Away Team */}
                <div className="flex items-center gap-3">
                <TeamLogo teamName={awayTeam.team_name} sport={league} />
                <span className="text-gray-900">
                    {awayTeam.team_name}
                </span>
                <span className="ml-auto text-lg font-bold">{matchScore.away_score}</span>
                </div>

            </div>

            {/* Divider */}
            <div className="w-px bg-gray-300 mx-4"></div>

            <div className="flex flex-col items-center justify-center gap-2 min-w-[90px]">
                {isLive && (
                <div className="flex items-center gap-1 text-red-600 text-sm font-bold">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    LIVE
                </div>
                )}
                <span className="text-sm text-gray-600">{renderMatchStatus()}</span>
                <span className="text-xs text-gray-400">{league}</span>

                <button className="flex items-center gap-1 text-sm text-blue-600 mt-2 bg-blue-100 px-3 py-1 rounded-md hover:bg-blue-200">
                <BookmarkPlus size={16} /> Follow
                </button>
            </div>

        </div>
    );
}; 

export default MatchCard;