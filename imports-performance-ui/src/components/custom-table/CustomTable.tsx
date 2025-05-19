import React, { FC } from "react";
import {
  CustomTableDataCell,
  CustomTableDesign,
  CustomTableHeader,
  CustomTableRow,
} from "./CustomTableStyle";
import { CustomTableProps } from "../../types/props/order-service/CustomTableProps";
import { formatDate } from "../../helpers/formatDate";

export const CustomTable: FC<CustomTableProps> = ({
  ordersService,
}: CustomTableProps) => {
  return (
    <CustomTableDesign>
      <thead>
        <CustomTableRow>
          <CustomTableHeader>Data:</CustomTableHeader>
          <CustomTableHeader>Valor:</CustomTableHeader>
          <CustomTableHeader>Descrição:</CustomTableHeader>
        </CustomTableRow>
      </thead>
      <tbody>
        {ordersService.map((order) => (
          <CustomTableRow key={order.id}>
            <CustomTableDataCell>
              {formatDate(order.generatedAt)}
            </CustomTableDataCell>
            <CustomTableDataCell>{order.finalCost}</CustomTableDataCell>
            <CustomTableDataCell>
              {order.serviceDescription}
            </CustomTableDataCell>
          </CustomTableRow>
        ))}
      </tbody>
    </CustomTableDesign>
  );
};
