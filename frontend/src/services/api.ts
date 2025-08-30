import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
  withCredentials: true,
});

export interface RegisterPayload {
  name: string;
  username?: string;
  email: string;
  password: string;
  birth_day?: number | null;
  birth_month?: number | null;
  birth_year?: number | null;
}

// Auth endpoints
export const authApi = {
  login: (username: string, password: string) => 
    api.post("/login", { username, password }),
  register: (data: RegisterPayload) =>
    api.post("/register", data),
  logout: () => api.post("/logout"),
  profile: () => api.post("/profile"),
};

export default api;
