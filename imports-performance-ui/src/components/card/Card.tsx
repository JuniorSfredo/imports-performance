import React, { FC } from "react";
import { CardProps } from "../../types/props/card/CardProps";
import { CardContainer, CardIcon, CardTitle } from "./CardStyle";

export const Card: FC<CardProps> = ( { title, icon }) => {
  return (
    <CardContainer>
      <CardIcon icon={icon}></CardIcon>
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};
