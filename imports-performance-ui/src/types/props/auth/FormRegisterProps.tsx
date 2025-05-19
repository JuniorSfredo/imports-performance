import { FieldValues, SubmitErrorHandler } from 'react-hook-form'

export interface FormRegisterProps {
  isLogin: boolean;
  animate: boolean;
  invalidFields: SubmitErrorHandler<FieldValues>;
  showModal: boolean;
}
