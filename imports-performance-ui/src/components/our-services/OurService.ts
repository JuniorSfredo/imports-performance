import styled from 'styled-components'
import "../../styles/App.css";

export const OurServicesSection = styled.section`
  margin: 80px 0;
  background-color: var(--background-secondary-color);
  width: 80vw;
  border-radius: 10px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
`;

export const OurServiceTitle = styled.h1`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: var(--text-primary-color);
  text-align: start;
`;

export const GridCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: auto;
  padding: 50px 0;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
