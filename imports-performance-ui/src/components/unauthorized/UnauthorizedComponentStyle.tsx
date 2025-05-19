import styled from 'styled-components'
import '../../styles/App.css'

export const UnauthorizedSection = styled.section`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: var(--background-primary-color);
`;

export const UnauthorizedContainer = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 40%;
  justify-content: space-around;
`;

export const UnauthorizedTitle = styled.h1`
  color: var(--primary-color);
  font-size: 4.5rem;
  font-family: 'Poppins', sans-serif;
`;

export const UnauthorizedText = styled.p`
  font-size: 1.3rem;
  font-family: 'Poppins', sans-serif;
  color: var(--text-primary-color);
  text-align: center;
  line-height: 1.5;
`;
