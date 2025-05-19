import { useContext } from "react";
import RegisterContextType from '../../types/auth/RegisterContextType'
import { RegisterContext } from './RegisterContext'

export const useRegister = (): RegisterContextType => {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error("useRegister must be used within a RegisterProvider");
  }
  return context;
};
