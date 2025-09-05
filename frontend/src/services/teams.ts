// services/teams.ts
import api from "./api";

export interface Team {
  id: number;
  team_name: string;
  logo_url? : string;
}

export interface CreateTeamPayload {
  teams_name: string;
  logo_url?: string;
}


export const teamsApi = {
  getAll: () => api.get("/teams"),
  getOne: (id: number) => api.get(`/teams/${id}`),
  create: (data: CreateTeamPayload) => api.post("/teams", data),
  update: (id: number, data: Partial<CreateTeamPayload>) =>
    api.put(`/teams/${id}`, data),
  delete: (id: number) => api.delete(`/teams/${id}`),
};

export default teamsApi;