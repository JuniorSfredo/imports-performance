import styled from 'styled-components'
import "../../styles/App.css";

export const MainBannerDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 85vh;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8;
    z-index: 1;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const BannerContent = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  top: 30%;
  left: 10%;
`;

export const BannerText = styled.p`
  color: var(--text-primary-color);
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 1;
`;

export const BannerDetailText = styled.span`
  color: var(--primary-color);
  font-size: 2.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
`;

export const BannerButton = styled.button`
  background-color: var(--primary-color);
  color: var(--text-primary-color);
  width: 70%;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: var(--btn-hover-primary-color);
    transition: background-color 0.3s ease-in-out;
  }
`;
