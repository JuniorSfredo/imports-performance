import React from "react";
import { TitleStyle } from "./TitleStyle";

export const Title = (props: {
  children: React.ReactNode;
  size: string;
  color: string;
}) => {
  return (
    <TitleStyle size={props.size} color={props.color}>
      {props.children}
    </TitleStyle>
  );
};
