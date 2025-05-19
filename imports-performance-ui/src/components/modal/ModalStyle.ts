import styled, { keyframes } from 'styled-components'
import '../../styles/App.css'

const shake = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-10px); }
  40% { transform: translateX(10px); }
  60% { transform: translateX(-10px); }
  80% { transform: translateX(10px); }
  100% { transform: translateX(0); }
`;

export const ModalContainer = styled.div`
  animation: ${shake} 0.3s ease-in-out;
  position: fixed;
  top: 3%;
  left: calc(50% - 15%);
  width: 30%;
  height: 35%;
  background-color: rgba(66, 0, 0, 0.97);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000000;
  border-radius: 5px;
  box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.h1`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(99, 0, 0, 0.9);
  color: var(--input-text-primary-color);
  font-size: 1.2rem;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
`;


export const ErrorItem = styled.li`
  width: 95%;
  color: var(--input-text-primary-color);
  list-style: none;
  line-height: 1.4;
`;
