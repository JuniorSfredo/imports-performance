import axios from "axios";
import { useAuthStore } from "../../store/AuthStore";
import {useRedirect} from "../../hooks/useRedirect";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().access_token;
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/refresh") &&
      !originalRequest.url?.includes("/auth/signin") &&
      !originalRequest.url?.includes("/auth/logout")
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(
          "/auth/refresh",
          {},
          {
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true,
          },
        );

        const newAccessToken = response.data.access_token ?? null;
        useAuthStore.getState().setAccessToken(newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        const { redirectTo } = useRedirect();
        if (window.location.pathname !== '/services') {
          redirectTo('/auth/login');
        }
      }
    }

    return Promise.reject(error);
  },
);

export default api;
