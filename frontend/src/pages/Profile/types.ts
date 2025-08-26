export type Game = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  score: string;
  // add whatever fields your game object has
};

export type SavedGamesProps = {
  games: Game[];
};


export type Teams = {
    id: string;
    name: string;
    logoUrl: string;
}

export type FavoriteTeamsProps = {
  teams: Teams[];
};

export type User = {
    name: string,
    email: string,
    dateOfBirth: string,
    avatarUrl: string,
    gamesSaved: number,
    teamsFollowed: number,
    joinedDate: string
}

export type ProfileHeaderProps = {
  user: User;
};