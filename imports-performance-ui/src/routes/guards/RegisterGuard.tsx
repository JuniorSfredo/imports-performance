import {FC, useEffect, useState} from 'react'
import { useRegister } from "../../context/register-context/UseRegister";
import { useNavigate } from "react-router-dom";
import React from "react";

export const RegisterDetailsGuard: FC<{ children: React.ReactNode }> = (children) => {
  const { registerData } = useRegister();
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    const registerValid = !!(
      registerData.email &&
      registerData.cpf &&
      registerData.name
    );

    if (!registerValid) {
      navigate("/auth/login");
      setIsAllowed(false);
    } else {
      setIsAllowed(true);
    }
  }, [registerData, navigate]);

  if (isAllowed === null) return null;
  if (!isAllowed) return null;

  return <>{children}</>;
};
