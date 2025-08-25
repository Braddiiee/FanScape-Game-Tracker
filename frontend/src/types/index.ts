import React from "react";

export interface Date {
    label: string;
    value: string;
}

export interface Sport  {
    label: string;
    value: string;
    icon: React.ComponentType<{ className?: string; size?: number }>;

}

export type Team = {
    team_id: string;
    team_name: string;
}

export type MatchScore = {
    home_score: number | null;
    away_score: number | null;
}

export interface Match {
    match_id: number;
    match_title: string;
    competition_id: string;
    competition_title: string;
    sport_name: string;
    league_abbreviation: string;
    home_team: Team;
    away_team: Team;
    match_status: string;
    match_date: string; // ISO string
    match_time_utc: string;
    live_duration_minutes?: number; // optional
    match_score: MatchScore; // optional
}


type MenuItem = {
    name: string;
    slug: string;
}

export type Teams = Record<string, MenuItem[]>;