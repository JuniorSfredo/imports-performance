import React from "react";
import { GenericBtn } from "./GenericBtn";

export const GenericButton = (props: {
  fontSize: string;
  color: string;
  bgColor: string;
  hoverBgColor: string;
  width: string;
  height: string;
  border?: string;
  boxShadow?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  borderRadius?: string;
  fontWeight?: string;
  disabled?: boolean;
}) => {
  return (
    <GenericBtn
      onClick={props.onClick}
      color={props.color}
      fontSize={props.fontSize}
      bgColor={props.bgColor}
      height={props.height}
      width={props.width}
      border={props.border}
      boxShadow={props.boxShadow}
      hoverBgColor={props.hoverBgColor}
      borderRadius={props.borderRadius}
      fontWeight={props.fontWeight}
      disabled={props.disabled ?? false}
    >
      {props.children}
    </GenericBtn>
  );
};
