import { useQuery } from "@tanstack/react-query";
import { fetchVehicleByClientIdAndPlate } from "../api/services/fetchVehicleByClientIdAndPlate";

export const useVehicleByClientIdAndPlate = (
  clientId: number,
  vehiclePlate: string,
  enabled: boolean,
) => {
  const {
    data,
    isError: queryError,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["vehicle", clientId, vehiclePlate],
    queryFn: () => fetchVehicleByClientIdAndPlate(clientId, vehiclePlate),
    enabled: enabled,
    select: (data) => data,
  });

  const isError = queryError || !data?.success || data?.status !== 200;
  const error = isError ? data?.data : null;
  const vehicle = !isError ? data?.data : null;

  return { vehicle, isError, error, isLoading, refetch };
};
