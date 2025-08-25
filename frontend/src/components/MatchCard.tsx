import React from "react";
import type { Match } from "../types";

interface MatchCardProps {
    homeTeam: Match["home_team"];
    awayTeam: Match["away_team"];
    matchStatus: Match["match_status"];
    matchDate: Match["match_date"];
    matchTime: Match["match_time_utc"];
    liveMinutes?: Match["live_duration_minutes"];
    matchScore: Match["match_score"]
}

const MatchCard: React.FC<MatchCardProps> = ({
    homeTeam,
    awayTeam,
    matchStatus,
    matchTime,
    liveMinutes,
    matchScore,
}) => {

    const renderMatchStatus = () => {
        if (matchStatus === "Live") return `${liveMinutes}'`;
        if (matchStatus === "Final") return "FT";
        return matchTime;
    };


    return (

        <div className="flex border border-gray-300 rounded-md p-5 gap-4">

            {/* Team name and scores */}
            <div className="flex flex-col items-center justify-between p-5 ">

                {/* Home Team's name and score  */}
                <div className="flex justify-between gap-4">
                    <div className="m-2 font-bold">{homeTeam.team_name}</div>
                    <div>{matchScore.home_score ?? 0}</div>
                </div>

                {/* Away Team's name and score  */}
                <div className="flex justify-between gap-4">
                    <div className="m-2 font-bold">{awayTeam.team_name}</div>
                    <div>{matchScore.away_score ?? 0}</div>
                </div>

            </div>

            {/* Divider */}
            <div className="w-px bg-gray-300 mx-4"></div>

            {/* Render Match Status */}
            <div className="text-gray-700 text-sm">
                {renderMatchStatus()}
            </div>

        </div>
    );
}; 

export default MatchCard;