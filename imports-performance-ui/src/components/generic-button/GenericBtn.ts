import styled from "styled-components";
import "../../styles/App.css"

export const GenericBtn = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !["bgColor", "hoverBgColor", "borderRadius", "fontWeight"].includes(prop),
})<{
  fontSize: string;
  color: string;
  bgColor: string;
  width: string;
  height: string;
  border?: string;
  boxShadow?: string;
  hoverBgColor: string;
  borderRadius?: string;
  fontWeight?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ border }) => (border ? border : "none")};
  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : "none")};
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => borderRadius ?? 0};
  font-weight: ${({ fontWeight }) => fontWeight ?? "normal"};
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor};
    transition: 0.4s background-color ease-in-out;
  }
`;
