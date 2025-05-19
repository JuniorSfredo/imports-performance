import React from "react";
import Header from "../../components/header/Header";
import { MainBanner } from "../../components/main-banner/MainBanner";
import { OurServices } from "../../components/our-services/OurServices";
import { ServiceSection } from "./ServiceStyle";
import { MyServices } from "../../components/my-service/MyServices";
import { SpinnerLoading } from "../../components/spinner-loading/SpinnerLoading";
import { useAuth } from "../../hooks/useAuth";
import { useOrderServiceByClientId } from "../../hooks/useOrderServiceByClientId";
import { useSearchParams } from "react-router-dom";

export const Services = () => {
  const { user, isAuthenticated, isLoadingAuth } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = Number(searchParams.get("page")) || 1;
  const page =
    Number.isInteger(pageFromUrl) && pageFromUrl > 0 ? pageFromUrl : 1;

  const { ordersService, isLoading, isError, pagination, reload } =
    useOrderServiceByClientId(user?.id, page, !isLoadingAuth && !!user?.id);

  const handlePageChange = async (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
    await reload();
  };

  return (
    <ServiceSection>
      {isLoading && <SpinnerLoading />}
      <Header isAuthenticated={isAuthenticated} />
      <MainBanner isAuthenticated={isAuthenticated} />
      <OurServices />
      <MyServices
        isError={isError}
        isAuthenticated={isAuthenticated}
        ordersService={ordersService}
        pagination={pagination}
        currentPage={page}
        onPageChange={(page) => {
          handlePageChange(page).then();
        }}
      />
    </ServiceSection>
  );
};
