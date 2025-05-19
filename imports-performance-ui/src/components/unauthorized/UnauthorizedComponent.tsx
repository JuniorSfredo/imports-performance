import React, { FC, useEffect, useState } from "react";
import {
  UnauthorizedContainer,
  UnauthorizedSection,
  UnauthorizedText,
  UnauthorizedTitle,
} from "./UnauthorizedComponentStyle";
import { useNavigate } from 'react-router-dom'
import { RedirectProps } from '../../types/props/common/RedirectProps'

export const UnauthorizedComponent: FC<RedirectProps> = ({ redirectPath } ) => {

  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      redirectPath ? navigate(redirectPath) : navigate("/");
    }

    return () => clearInterval(timer);
  }, [countdown, navigate, redirectPath]);

  return (
    <UnauthorizedSection>
      <UnauthorizedContainer>
        <UnauthorizedTitle>Ops! Acesso Negado</UnauthorizedTitle>
        <UnauthorizedText>
          Você não tem permissão para acessar esta página.<br />
          Você será redirecionado em {countdown} segundo{countdown !== 1 ? 's' : ''}.
        </UnauthorizedText>
      </UnauthorizedContainer>
    </UnauthorizedSection>
  );
};
