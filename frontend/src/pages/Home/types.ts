export type Matches = {
    id: string,
    homeTeam: {
        team_name: string;
    },
    awayTeam: {
        team_name: string;
    },
    matchScore: {
        home_score: number,
        away_score: number;
    }
    matchStatus: string,
    matchDate: string,
    matchTime: string,
    liveMinutes: number | string | null,
    league: string,
}

export interface MatchProps {
  matches: Matches[];
};