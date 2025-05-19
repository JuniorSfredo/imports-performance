import styled from 'styled-components'
import "../../styles/App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const CardContainer = styled.div`
  background-color: var(--background-primary-color);
  width: 160px;
  height: 160px;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    background-color: var(--primary-color);
  }
`;

export const CardIcon = styled(FontAwesomeIcon)`
  color: var(--text-primary-color);
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardTitle = styled.p`
  color: var(--text-primary-color);
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
`;
