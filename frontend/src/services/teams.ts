// services/teams.ts
import api from "./api";

export interface TeamPayload {
  name: string;
  city: string;
  founded_year?: number;
}

export const teamsApi = {
  getAll: () => api.get("/teams"),
  getOne: (id: number) => api.get(`/teams/${id}`),
  create: (data: TeamPayload) => api.post("/teams", data),
  update: (id: number, data: Partial<TeamPayload>) =>
    api.put(`/teams/${id}`, data),
  delete: (id: number) => api.delete(`/teams/${id}`),
};
