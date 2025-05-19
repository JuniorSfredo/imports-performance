import React from "react";
import { createContext, ReactNode, useState } from 'react'
import { RegisterData } from '../../types/auth/RegisterData'
import RegisterContextType from '../../types/auth/RegisterContextType'

export const RegisterContext = createContext<RegisterContextType | undefined>(undefined);

export const RegisterProvider = ({ children }: { children: ReactNode }) => {
  const [ registerData, setRegisterData ] = useState<RegisterData>({});

  const updateRegisterData = (data: Partial<RegisterData>) => {
    setRegisterData((prev) => ({ ...prev, ...data }));
  }

  const clearRegisterData = () => {
    setRegisterData({});
  }

  return (
    <RegisterContext.Provider value={{ registerData, updateRegisterData, clearRegisterData }}>
      {children}
    </RegisterContext.Provider>
  );
}


