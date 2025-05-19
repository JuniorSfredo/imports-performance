import {OrderServiceType} from "../../order-service/OrderServiceType";
import {PaginationType} from "../../order-service/PaginationType";

export interface MyServiceProps {
  ordersService: OrderServiceType[];
  isAuthenticated: boolean;
  isError: boolean
  pagination: PaginationType | null;
  currentPage: number;
  onPageChange: (id: number) => void;
}
