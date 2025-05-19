import { useQuery } from "@tanstack/react-query";
import { fetchOrdersServiceByClientId } from "../api/services/fetchOrdersServiceByClientId";

export const useOrderServiceByClientId = (
  clientId: number,
  page: number,
  enabled: boolean,
) => {
  const {
    data,
    isLoading,
    isError: queryError,
    refetch,
  } = useQuery({
    queryKey: ["ordersService", clientId, page],
    queryFn: () => fetchOrdersServiceByClientId(clientId, page),
    enabled: enabled,
    select: (data) => data,
  });

  const isError = queryError || !data?.success || data?.status !== 200;
  const ordersService = !isError ? data?.data.ordersService : [];
  const pagination = !isError ? data?.data.pagination : null;
  const reload = () => refetch();
  return { ordersService, isLoading, isError, pagination, reload };
};
