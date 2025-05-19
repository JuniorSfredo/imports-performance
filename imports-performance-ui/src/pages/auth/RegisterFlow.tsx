import React, { FC } from 'react'
import { RegisterProvider } from '../../context/register-context/RegisterContext'
import { Outlet } from 'react-router-dom'

export const RegisterFlow: FC = () => {
  return(
    <RegisterProvider>
      <Outlet />
    </RegisterProvider>
  );
}
