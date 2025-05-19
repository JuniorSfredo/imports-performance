import {
  BannerButton,
  BannerContent,
  BannerDetailText,
  BannerImage,
  BannerText,
  MainBannerDiv,
} from "./MainBannerStyle";
import banner from "../../assets/main-banner.jpg";
import React from "react";
import { useRedirect } from "../../hooks/useRedirect";

export const MainBanner = (props: { isAuthenticated: boolean }) => {
  const { redirectTo } = useRedirect();

  return (
    <MainBannerDiv>
      <BannerImage src={banner} />
      <BannerContent>
        <BannerText>
          <BannerDetailText>PERFORMANCE</BannerDetailText> <br />
          que corre nas veias.
        </BannerText>
        <BannerButton onClick={() => redirectTo("/services/request-service")}>
          Agendar Serviço
        </BannerButton>
      </BannerContent>
    </MainBannerDiv>
  );
};
