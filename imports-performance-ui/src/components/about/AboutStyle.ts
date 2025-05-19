import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const AboutSection = styled.section`
  display: flex;
  width: auto;
  height: 100vh;
  background-color: rgb(20, 20, 20);
`;

export const AboutContainer = styled.div`
  @media ${breakpoints.xxl} {
    margin: auto;
    background-color: transparent;
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const AboutContainerLeft = styled.div`
  @media ${breakpoints.xxl} {
    width: 50%;
    height: 100%;
    margin: auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentTitle = styled.h2`
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  color: rgb(200, 0, 0);
  margin-bottom: 20px;
`;

export const AboutText = styled.p`
  line-height: 1.5;
  text-indent: 20px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  margin-bottom: 16px;
`;

export const RedBorder = styled.hr`
  border: 2px solid rgb(200, 0, 0);
  margin: 30px 0;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  font-size: 25px;
  margin: 0 auto;
  gap: 20px;
`;

export const Icon = styled.div`
  &:hover {
    color: rgb(200, 0, 0);
    cursor: pointer;
    transform: scale(1.2);
    transition: all 0.4s ease-in-out;
  }
`;

export const AboutContainerRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
`;

export const AboutImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  border-radius: 20px;
  border: 4px solid rgb(200, 0, 0);
  z-index: 10000;
  box-shadow: 0px 0px 20px 5px rgba(200, 0, 0, 0.5);
`;

export const ContentContainer = styled.div`
  @media ${breakpoints.xxl} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
  }
`;
