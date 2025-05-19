import { Customer } from "../../types/payloads/Customer";
import api from '../config/axios-instance'

export const registerCustomer = async (customer: Customer) => {
  return await api
    .post('/clients/create', customer, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      return {
        success: true,
        status: response.status,
        data: response.data,
      };
    }).catch((error) => {
      if (error.response.status === 400) {
        return {
          success: false,
          status: error.response.status,
          data: error.response.data,
        };
      }

      if (error.response.status === 500) {
        return {
          success: false,
          status: error.response.status,
          data: "Erro interno do servidor",
        };
      }

      return {
        success: false,
        status: error.response?.status || 0,
        data: "Erro na requisição",
      }
    });

};
