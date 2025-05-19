import React from "react";
import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel";
import About from "../../components/about/About";
import { SpinnerLoading } from "../../components/spinner-loading/SpinnerLoading";
import { useAuth } from "../../hooks/useAuth";

export const HomePage = () => {

  const { isAuthenticated, isLoadingAuth: isLoading } = useAuth();

  return (
    <body>
      { isLoading && <SpinnerLoading /> }
      <Header isAuthenticated={isAuthenticated} />
      <Carousel />
      <About />
    </body>
  );
};
