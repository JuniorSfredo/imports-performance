import api from "../config/axios-instance";

export const fetchOrdersServiceByClientId = async (
  clientId: number,
  page: number,
) => {
  return api
    .get(`orders-service/clients/${clientId}?page=${page}`, {
      withCredentials: true,
    })
    .then((response) => {
      return {
        success: true,
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        return {
          success: false,
          status: error.response.status,
          data: error.response.data.message,
        };
      }

      return {
        success: false,
        status: 500,
        data: error.response.data.message,
      };
    });
};
