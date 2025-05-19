import api from "../config/axios-instance";
import {useAuthStore} from "../../store/AuthStore";

export const validateRefreshToken = async () => {
  return await api
    .post("/auth/refresh", {}, { withCredentials: true })
    .then((response) => {
      useAuthStore.getState().setAccessToken(response.data.access_token);
      return {
        success: true,
        status: response.status,
        data: response.data,
      };
    })
    .catch((err) => {

      if (err.response.status === 401) {
        return {
          success: false,
          status: 401,
          data: err?.response.data,
        }
      }

      return {
        success: false,
        status: err?.response?.status || 500,
        data: err?.response.data || 'Internal Server Error',
      };
    });
};
