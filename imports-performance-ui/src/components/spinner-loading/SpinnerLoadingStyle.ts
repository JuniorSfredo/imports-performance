import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";
import "../../styles/App.css";
import {IconProps} from "../../types/props/common/IconProps";

export const SpinnerSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
  width: 100vw;
  height: 100vh;
  background-color: var(--background-primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Spin = styled(FontAwesomeIcon)<IconProps>`
  font-size: 3.5rem;
  animation: ${rotate} 2s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  color: var(--primary-color);
`;
