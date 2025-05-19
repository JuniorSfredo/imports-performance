import styled, { css } from "styled-components";
import "../../styles/App.css";
import { InputMask } from '@react-input/mask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {StyledInputMaskProps} from "../../types/props/auth/StylezedInputMaskProps";
import {IconProps} from "../../types/props/common/IconProps";

export const FinishSingupSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: var(--background-primary-color);
`;

export const FormContainer = styled.div`
  width: 40%;
  height: 90%;
  margin: auto;
  display: flex;
  background-color: var(--background-secondary-color);
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

export const FormTitle = styled.h1`
  color: var(--primary-color);
  font-size: 2.7rem;
  font-weight: bold;
`;

export const FormContent = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Form = styled.form`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &:last-child {
    align-self: center;
  }
`;

export const Fields = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const FormLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 10px;
  color: var(--text-primary-color);
`;

const CommonInputStyles = css`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding: 0 20px;
  border: none;
  background-color: var(--input-background-primary-color);
  color: var(--input-text-primary-color);
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  outline: none;

  &:not(:last-child):not(:nth-last-child(2)) {
    margin-bottom: 20px;
  }
`;

export const DefaultFormInput = styled.input`
  ${CommonInputStyles}
`;

export const MaskedInput = styled(InputMask)<StyledInputMaskProps>`
    ${CommonInputStyles}
`;

export const PasswordContainer = styled.div`
  width: calc(100% + 20px);
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

export const ViewPassIcon = styled(FontAwesomeIcon)<IconProps>`
  cursor: pointer;
  position: relative;
  right: 30px;
  color: var(--text-primary-color);

  &:hover {
    color: var(--primary-color);
    transition: color 0.3s ease-in-out;
  }
`

export const FormButton = styled.button`
  width: 60%;
  height: 45px;
  border-radius: 10px;
  background-color: var(--primary-color);
  border: none;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: var(--btn-hover-primary-color);
    transition: background-color 0.3s ease-in-out;
  }
`;



