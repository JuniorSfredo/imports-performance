import React, { FC } from "react";
import {
  CustomTableContainer,
  EmptyOrdersServiceText,
  ErrorContainer,
  MyServiceSection,
  PageButton,
  PaginationContainer,
  PaginationIconButton,
  UnauthContainer,
} from "./MyServiceStyle";
import { CustomTable } from "../custom-table/CustomTable";
import { MyServiceProps } from "../../types/props/order-service/MyServiceProps";
import { Title } from "../title/Title";
import "../../styles/App.css";
import { GenericButton } from "../generic-button/GenericButton";
import { useRedirect } from "../../hooks/useRedirect";
import { useNavigate } from "react-router-dom";

export const MyServices: FC<MyServiceProps> = ({
  ordersService,
  isAuthenticated,
  isError,
  pagination,
  currentPage,
  onPageChange,
}) => {
  const { redirectTo } = useRedirect();
  const navigate = useNavigate();

  const goToPage = (page: number) => {
    console.log('goToPage' + page);
    if (page === 0) return onPageChange(1);
    if (page > pagination.totalPages)
      return onPageChange(pagination.totalPages);
    return onPageChange(page);
  };

  return (
    <MyServiceSection>
      <Title size="2rem" color="var(--text-primary-color)">
        Meus Serviços:
      </Title>
      <CustomTableContainer>
        {!isAuthenticated ? (
          <UnauthContainer>
            <EmptyOrdersServiceText>
              Você precisa estar logado para ver seus serviços.
            </EmptyOrdersServiceText>
            <GenericButton
              fontSize={"1rem"}
              color={"var(--text-primary-color)"}
              bgColor={"var(--primary-color)"}
              width={"25%"}
              height={"50px"}
              onClick={() => redirectTo("/auth/login")}
              hoverBgColor={"var(--btn-hover-primary-color)"}
              borderRadius={"10px"}
              fontWeight={"bold"}
            >
              Fazer Login
            </GenericButton>
          </UnauthContainer>
        ) : isError ? (
          <ErrorContainer>
            <EmptyOrdersServiceText>
              Ocorreu um erro ao buscar as ordens de serviço.
            </EmptyOrdersServiceText>
            <GenericButton
              fontSize={"1rem"}
              color={"var(--text-primary-color)"}
              bgColor={"var(--primary-color)"}
              width={"25%"}
              height={"50px"}
              onClick={() => navigate(0)}
              hoverBgColor={"var(--btn-hover-primary-color)"}
              borderRadius={"10px"}
              fontWeight={"bold"}
            >
              Tentar novamente
            </GenericButton>
          </ErrorContainer>
        ) : ordersService.length > 0 ? (
          <>
            <CustomTable ordersService={ordersService} />
            <PaginationContainer>
              <PaginationIconButton
                disabled={currentPage === 1}
                onClick={() => goToPage(1)}
              >
                {"<<"}
              </PaginationIconButton>
              <PaginationIconButton
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
              >
                {"<"}
              </PaginationIconButton>
              <PageButton>{currentPage}</PageButton>
              <PaginationIconButton
                disabled={currentPage === pagination.totalPages}
                onClick={() => goToPage(currentPage + 1)}
              >
                {">"}
              </PaginationIconButton>
              <PaginationIconButton
                disabled={currentPage === pagination.totalPages}
                onClick={() => goToPage(pagination.totalPages)}
              >
                {">>"}
              </PaginationIconButton>
            </PaginationContainer>
          </>
        ) : (
          <EmptyOrdersServiceText>
            Você ainda não efetuou nenhum serviço.
          </EmptyOrdersServiceText>
        )}
      </CustomTableContainer>
    </MyServiceSection>
  );
};
