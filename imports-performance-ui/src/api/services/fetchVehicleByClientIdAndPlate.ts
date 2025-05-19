import api from "../config/axios-instance";

export const fetchVehicleByClientIdAndPlate = async (
  clientId: number,
  plate: string,
) => {
  return await api
    .get(`/vehicles/clients/${clientId}?plate=${plate}`, {
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
      return {
        success: false,
        status: Number(error.response.status),
        data: error.response.data.message,
      };
    });
};
