import { fetchAuthenticatedUser } from "../api/services/fetchAuthenticatedUser";
import { useQuery } from "@tanstack/react-query";
import {UserProfile} from "../types/payloads/response/UserProfile";

export const useAuth = () => {
  const {
    data: response,
    isLoading: isLoadingAuth,
    isError,
  } = useQuery({
    queryKey: ["authenticatedUser"],
    queryFn: fetchAuthenticatedUser,
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  const user: UserProfile | null =
    !isLoadingAuth && !isError && response?.success
      ? {
          id: response.data.id,
          email: response.data.email,
          role: response.data.role,
        }
      : null;

  const isAuthenticated = !!user;

  return { user, isAuthenticated, isLoadingAuth, isError };
};
