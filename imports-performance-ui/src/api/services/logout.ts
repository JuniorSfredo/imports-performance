import { useAuthStore } from "../../store/AuthStore";
import api from "../config/axios-instance";

export const logout = async () => {
  try {
    const response = await api.post(
      "/auth/logout",
      {},
      { withCredentials: true },
    );
    useAuthStore.getState().setAccessToken("");
    return {
      success: true,
      status: response.status,
    };
  } catch (err) {
    return {
      success: false,
      status: (err.response?.status as number) || 500,
      data: err.response?.data || "Internal Server Error",
    };
  }
};
