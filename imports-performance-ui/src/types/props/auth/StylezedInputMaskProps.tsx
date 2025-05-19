import { InputMaskProps } from '@react-input/mask';
import {InputHTMLAttributes} from "react";

export interface StyledInputMaskProps extends InputMaskProps, InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}
