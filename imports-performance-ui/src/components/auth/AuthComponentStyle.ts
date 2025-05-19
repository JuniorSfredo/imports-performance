import styled, { css, keyframes } from "styled-components";
import "../../styles/App.css";
import { InputMask } from "@react-input/mask";

export const SlideOutRight = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(150%);
  }
`;

export const SlideInLeft = keyframes`
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const SlideOutLeft = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-150%);
  }
`;

export const SlideInRight = keyframes`
  0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const AuthSection = styled.section`
  width: 100vw;
  height: 100vh;
  background: #131313;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthContainer = styled.div`
  display: flex;
  position: relative;
  height: 80%;
  width: 60%;
  border-radius: 30px;
  overflow: hidden;
  justify-content: center;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  z-index: 0;
  filter: blur(1px);
`;

export const Overlayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  display: flex;
`;

export const FormContainer = styled.div<{ animate: boolean; isLogin: boolean }>`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #1d1d1d;
  z-index: 2;
  padding: 40px;
  position: absolute;
  right: ${({ isLogin }) => (isLogin ? "0" : "60%")};
  transition: right 0.3s ease-in-out;

  ${({ animate, isLogin }) =>
    animate &&
    css`
      animation: 0.3s ${isLogin ? SlideOutRight : SlideInLeft} 0.7s forwards;
    `}
`;

export const FormContainerContent = styled.div<{
  animate: boolean;
  isLogin: boolean;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({ animate, isLogin }) =>
    animate &&
    css`
      animation: 0.2s ${isLogin ? SlideOutRight : SlideOutLeft} forwards;
    `}
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 2.7rem;
  margin: 0 0 40px 0;
  font-weight: 800;
  font-family: "Poppins", sans-serif;
  color: rgba(200, 0, 0);
`;

export const FormInputs = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  color: rgb(180, 180, 180);
  font-family: "Poppins", sans-serif;
  margin-bottom: 10px;
`;

const FormInputStyle = css`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
  background: var(--input-background-primary-color);
  color: var(--input-text-primary-color);
  outline: none;
  margin-bottom: 30px;
`;

export const FormInput = styled.input`
  ${FormInputStyle}
`;

export const MaskedInput = styled(InputMask)`
  ${FormInputStyle}
`;

export const FormButton = styled.button`
  margin: 0 auto auto auto;
  width: 55%;
  height: 65px;
  border-radius: 10px;
  background: rgb(200, 0, 0);
  border: none;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: rgb(140, 0, 0);
    transition: all 0.3s ease-in-out;
  }
`;

export const ForgotPassword = styled.a`
  color: rgb(180, 180, 180);
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    color: rgba(200, 0, 0);
    transition: all 0.3s ease-in-out;
  }
`;

export const DescriptionContainerLogin = styled.div<{
  animate: boolean;
  isLogin: boolean;
}>`
  position: absolute;
  left: 5%;
  top: 15%;
  width: 40%;
  display: flex;
  flex-direction: column;

  ${({ animate, isLogin }) =>
    animate &&
    css`
      animation: 0.2s ${isLogin ? SlideOutLeft : SlideOutRight} forwards;
    `}
`;

export const DescriptionContainerRegister = styled.div<{
  animate: boolean;
  isLogin: boolean;
}>`
  position: absolute;
  right: 5%;
  top: 15%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: end;

  ${({ animate, isLogin }) =>
    animate &&
    css`
      animation: 0.2s ${isLogin ? SlideOutLeft : SlideOutRight} forwards;
    `}
`;

export const RegisterButton = styled.button`
  background-color: var(--primary-color);
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  width: 40%;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: #fff;

  &:hover {
    background-color: var(--btn-hover-primary-color);
    transition: all 0.3s ease-in-out;
  }
`;

export const WantRegisterText = styled.p`
  color: rgb(208, 208, 208);
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;
  font-family: "Poppins", sans-serif;
`;
