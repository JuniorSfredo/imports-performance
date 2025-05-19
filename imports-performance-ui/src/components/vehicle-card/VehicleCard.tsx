import React, { FC } from "react";
import {
  SelectedVehicleInput,
  VehicleCardContainer,
  VehicleCardDetails,
  VehicleCardPlate,
  VehicleCardTitle,
} from "./VehicleCardStyle";
import { VehicleBadgeType } from "../../types/vehicle/VehicleType";

export const VehicleCard: FC<VehicleBadgeType> = ({
  plate,
  type,
  make,
  color,
}) => {
  return (
    <VehicleCardContainer>
      <VehicleCardDetails>
        <VehicleCardTitle>
          {make} | {type}
        </VehicleCardTitle>
        <SelectedVehicleInput type={"radio"} checked={true} />
      </VehicleCardDetails>
      <VehicleCardDetails>
        <VehicleCardPlate>Placa: {plate}</VehicleCardPlate>
        <VehicleCardPlate>Cor: {color.toUpperCase()}</VehicleCardPlate>
      </VehicleCardDetails>
    </VehicleCardContainer>
  );
};
