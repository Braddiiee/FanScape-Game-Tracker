// frontend/src/services/games.ts
import api from "./api";

export interface GamePayload {
  match_title: string;
  home_team_id: number;
  away_team_id: number;
  date: string;
}

export const gamesApi = {
  getAll: () => api.get("/games"),
  getOne: (gameId: number) => api.get(`/games/${gameId}`),
  create: (data: GamePayload) => api.post("/games", data),
  update: (gameId: number, data: Partial<GamePayload>) =>
    api.put(`/games/${gameId}`, data),
  delete: (gameId: number) => api.delete(`/games/${gameId}`),
};
