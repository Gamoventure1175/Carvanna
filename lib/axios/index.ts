import axios from "axios";
import { signOut } from "next-auth/react";

// Create axios instance
const api = axios.create({
  baseURL: "/api",
});

let accessToken: string | null = null;

async function fetchSession() {
  const res = await fetch("/api/auth/session");
  const session = await res.json();
  if (session?.accessToken) {
    accessToken = session.accessToken;
  }
}

api.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;

      try {
        const res = await fetch("/api/auth/refresh-token", {
          method: "POST",
        });
        const data = await res.json();

        if (data?.accessToken) {
          accessToken = data.accessToken; // Store new access token
          error.config.headers = error.config.headers || {};
          error.config.headers.Authorization = `Bearer ${data.accessToken}`;
          return api(error.config); // Retry original request
        }
      } catch (err) {
        await signOut();
      }
    }

    return Promise.reject(error);
  }
);

fetchSession();

export default api;
