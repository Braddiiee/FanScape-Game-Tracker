// --- Mock Teams ---
export const mockTeams = [
  { id: "t1", name: "Lakers" },
  { id: "t2", name: "Celtics" },
  { id: "t3", name: "Warriors" },
  { id: "t4", name: "Bulls" },
  { id: "t5", name: "Knicks" },
];


// --- Mock Recommended Matches ---
export const mockRecommendedMatches = [
  {
    id: "rm1",
    homeTeam: { team_name: "Clippers" },
    awayTeam: { team_name: "Nuggets" },
    matchScore: { home_score: 0, away_score: 0 },
    matchStatus: "Final",
    matchDate: "2025-05-24",
    matchTime: "00:30:00Z",
    liveMinutes: null,
    league: "NBA",
  },
  {
    id: "rm2",
    homeTeam: { team_name: "Liverpool" },
    awayTeam: { team_name: "Man City" },
    matchScore: { home_score: 2, away_score: 2 },
    matchStatus: "Live",
    matchDate: "2025-05-24",
    matchTime: "00:30:00Z",
    liveMinutes: "65'",
    league: "Premier League",
  },
  {
    id: "rm3",
    homeTeam: { team_name: "Yankees" },
    awayTeam: { team_name: "Red Sox" },
    matchScore: { home_score: 5, away_score: 3 },
    matchStatus: "Final",
    matchDate: "2025-05-24",
    matchTime: "00:30:00Z",
    liveMinutes: null,
    league: "MLB",
  },
];

// --- Mock Favorite Matches (hardcoded, no random gen) ---
export const mockFavoriteTeamMatches = [
  {
    id: "fav1",
    homeTeam: { team_name: "Lakers" },
    awayTeam: { team_name: "Mavericks" },
    matchScore: { home_score: 115, away_score: 108 },
    matchStatus: "Final",
    matchDate: "2025-05-24",
    matchTime: "00:30:00Z",
    liveMinutes: null,
    league: "NBA",
    isFavoriteHome: true,
  },
  {
    id: "fav2",
    homeTeam: { team_name: "Celtics" },
    awayTeam: { team_name: "Bulls" },
    matchScore: { home_score: 98, away_score: 97 },
    matchStatus: "Final",
    matchDate: "2025-05-24",
    matchTime: "00:30:00Z",
    liveMinutes: "Q4 (45') ",
    league: "NBA",
    isFavoriteHome: true,
  },
  {
    id: "fav3",
    homeTeam: { team_name: "Warriors" },
    awayTeam: { team_name: "Spurs" },
    matchScore: { home_score: 120, away_score: 110 },
    matchStatus: "Final",
    matchDate: "2025-05-24",
    matchTime: "00:30:00Z",
    liveMinutes: null,
    league: "NBA",
    isFavoriteHome: true,
  },
];
