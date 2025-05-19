import "../../styles/App.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RequestServiceSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--background-primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BreadcrumbContainer = styled.div`
  width: 70%;
  height: 15%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const VehicleDetailsContainer = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  background-color: var(--background-secondary-color);
  margin-top: 20px;
  border-radius: 15px;
  padding: 30px;
  flex-direction: row;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  flex-grow: 1;

  &:last-child {
    justify-content: flex-end;
  }
`;

export const RightContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const VehicleLabel = styled.label`
  color: var(--text-primary-color);
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const VehicleForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 40px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 0 45px 0 20px;
  border: none;
  background-color: var(--input-background-primary-color);
  color: var(--input-text-primary-color);
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  outline: none;
`;

export const SearchSubmitForm = styled(FontAwesomeIcon)`
  color: var(--text-primary-color);
  width: 20px;
  height: 20px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-50%) scale(1.05);
    color: var(--primary-color);
    cursor: pointer;
  }
`;

export const CardVehicleWrapper = styled.div`
  margin-top: 40px;
  width: 90%;
  height: 120px;
`

export const NotFoundVehicleText = styled.span`
  font-family: "Poppins", sans-serif;
  color: var(--text-primary-color);
  font-size: 16px;
  width: fit-content;
  transition: all 0.3s ease-in-out;
  font-weight: 400;
  margin-top: auto;

  &:hover {
    color: var(--primary-color);
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  width: 23%;
  height: 50px;
`;
