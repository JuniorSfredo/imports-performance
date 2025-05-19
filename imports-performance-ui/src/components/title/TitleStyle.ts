import styled from "styled-components";

export const TitleStyle = styled.h2<{ size: string, color: string }>`
  color: ${({color}) => color};
  font-size: ${({size}) => size};
  font-family: "Poppins", sans-serif;
  text-align: start;
`;
