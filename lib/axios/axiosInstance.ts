import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import { signOut } from "next-auth/react";
const api = axios.create({
  baseURL: "/api",
});

let accessToken: string | null = null;

// Fetches latest access token from session
async function loadAccessToken(): Promise<string | null> {
  try {
    const res = await fetch("/api/auth/session");
    const session = await res.json();
    accessToken = session?.user?.accessToken ?? null;
    return accessToken;
  } catch {
    accessToken = null;
    return null;
  }
}

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await loadAccessToken();

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      await loadAccessToken();

      if (accessToken) {
        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      }

      await signOut();
    }

    return Promise.reject(error);
  },
);
export default api;
