import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import aboutImg from "../../assets/about-us.jpg";

import {
  AboutSection,
  AboutContainer,
  AboutContainerLeft,
  AboutContainerRight,
  ContentTitle,
  AboutText,
  RedBorder,
  SocialMedia,
  Icon,
  AboutImage,
  ContentContainer,
} from "./AboutStyle";

const About: React.FC = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutContainerLeft>
          <ContentContainer>
            <ContentTitle id='about-us'>SOBRE NÓS:</ContentTitle>
            <AboutText>
              Na ImportsPerformance, somos especialistas em veículos importados
              e apaixonados por desempenho. Oferecemos serviços de remap,
              personalização e preparação para que seu carro entregue o máximo
              em potência e eficiência.
            </AboutText>
            <AboutText>
              Trabalhamos com tecnologia de ponta, incluindo testes com
              dinamômetro, garantindo que cada ajuste seja preciso e seguro.
              Nossa equipe é formada por profissionais altamente qualificados,
              prontos para transformar seu carro exatamente do jeito que você
              deseja.
            </AboutText>
            <AboutText>
              Seja para otimizar a performance, melhorar o consumo ou
              simplesmente dar um toque único ao seu veículo, estamos aqui para
              levar sua experiência automotiva a outro nível.
            </AboutText>
            <RedBorder />
            <SocialMedia id='social-media'>
              <Icon>
                <FontAwesomeIcon icon={faTwitter} />
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faLinkedin} />
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faInstagram} />
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faMapPin} />
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faWhatsapp} />
              </Icon>
            </SocialMedia>
          </ContentContainer>
        </AboutContainerLeft>
        <AboutContainerRight>
          <AboutImage src={aboutImg} alt="Sobre nós" />
        </AboutContainerRight>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
