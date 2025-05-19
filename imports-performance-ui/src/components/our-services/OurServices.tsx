import { FC } from "react";
import { GridCardContainer, OurServicesSection, OurServiceTitle } from "./OurService";
import { Card } from "../card/Card";
import React from "react";
import {
  faMicrochip,
  faOilCan, faPlus,
  faScrewdriverWrench,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

export const OurServices: FC = () => {
  return (
    <OurServicesSection>
      <OurServiceTitle>Nossos Serviços:</OurServiceTitle>
      <GridCardContainer>
        <Card title='Troca de Óleo' icon={faOilCan}></Card>
        <Card title='Remap' icon={faMicrochip}></Card>
        <Card title='Suspensão' icon={faSliders}></Card>
        <Card title='Revisões' icon={faScrewdriverWrench}></Card>
        <Card title='Outros' icon={faPlus}></Card>
      </GridCardContainer>
    </OurServicesSection>
  );
};
