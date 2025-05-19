import React from 'react'

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  mask?: string;
  children: React.ReactNode | undefined;
}
