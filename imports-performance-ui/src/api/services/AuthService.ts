import { UserLogin } from '../../types/payloads/request/UserLogin'
import TokensResponse from '../../types/payloads/response/TokensResponse'
import api from '../config/axios-instance'
import { useAuthStore } from '../../store/AuthStore'


export const signIn = async (requestBody: UserLogin) => {
  return await api.post('/auth/signin', requestBody, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      useAuthStore.getState().setAccessToken(response.data.access_token)
      return {
        success: true,
        status: response.status,
        data: response.data as TokensResponse,
      }
    })
    .catch((error) => {
      useAuthStore.getState().setAccessToken('')
      if (error.response.status === 401) {
        return {
          success: false,
          status: error.response.status,
          data: error.response.data,
        }
      }
      return {
        sucess: false,
        status: 500,
        data: 'An error occurred during login. Try again later.',
      }
  })
}
