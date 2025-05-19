import api from "../config/axios-instance";

export const fetchAuthenticatedUser = async () => {
  return await api
    .get("/auth/profile")
    .then((response) => {
      return {
        success: true,
        status: response.status,
        data: {
          id: response.data.id,
          email: response.data.email,
          role: response.data.role,
        },
      };
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        return {
          success: false,
          status: error.response.status,
          data: error.response.data.message || "Session Expired",
        };
      }

      return {
        success: false,
        status: error.response.status,
        data: error.response.data,
      };
    });
};
