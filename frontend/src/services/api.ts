import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
  withCredentials: true,
});

export interface LoginResponse {
  message: string;
  user : {
    id: number;
    username: string;
    email: string;
    birthDate?: string | null;
  };
}

export interface RegisterResponse {
  message: string;
  user: {
    id: number;
    username: string;
    email: string;
    birthDate?: string | null;
  }
}

// Auth endpoints
export const authApi = {
  login: (username: string, password: string) => 
    api.post("/login", { username, password }),
  register: (data: RegisterResponse) =>
    api.post("/register", data),
  logout: () => api.post("/logout"),
  profile: () => api.post("/profile"),
};

export default api;
