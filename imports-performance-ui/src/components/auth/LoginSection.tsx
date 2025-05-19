import React, { FC } from "react";
import {
  ForgotPassword,
  Form,
  FormButton,
  FormContainerContent,
  FormInput,
  FormInputs,
  FormLabel,
  FormTitle,
} from "./AuthComponentStyle";
import { LoginSectionProps } from "../../types/props/auth/LoginSectionProps";
import { FieldValues, useForm } from "react-hook-form";
import { UserLogin } from "../../types/payloads/request/UserLogin";
import { UserRoles } from "../../types/payloads/enums/UserRoles";
import { signIn } from "../../api/services/AuthService";
import { KeyValue } from "../../types/common/KeyValue";
import { useNavigate } from 'react-router-dom'

export const LoginSection: FC<LoginSectionProps> = ({
  isLogin,
  animate,
  invalidFields,
  toggleModal,
  showModal,
  changeLoading,
}) => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const submitLogin = async (data: FieldValues, event: any) => {
    changeLoading(true);
    event.preventDefault();

    const loginCustomer: UserLogin = {
      email: data.emailLogin,
      password: data.passwordLogin,
      role: UserRoles.CLIENT,
    };

      const response = await signIn(loginCustomer);
      if (response.success && response.status === 200) {
        navigate('/');
        changeLoading(false);
      }

      if (!response.success && response.status !== 200) {
        const modalErr: KeyValue = {
          key: "error",
          message: "E-mail ou senha inválidos.",
        };
        changeLoading(false);
        toggleModal([modalErr]);
      }
  };

  return (
    <Form onSubmit={handleSubmit(submitLogin, invalidFields)}>
      <FormContainerContent
        isLogin={isLogin}
        animate={animate}
        className="form-login"
      >
        <FormTitle>Login</FormTitle>
        <FormInputs>
          <FormLabel htmlFor="emailLogin">E-mail:</FormLabel>
          <FormInput
            type="email"
            placeholder="example@gmail.com"
            {...register("emailLogin", {
              required: "Campo 'Email' deve ser preenchido",
              pattern: {
                value: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "E-mail inválido",
              },
            })}
          ></FormInput>
          <FormLabel htmlFor="passwordLogin">E-mail:</FormLabel>
          <FormInput
            type="password"
            placeholder="********"
            {...register("passwordLogin", {
              required: "Campo 'Senha' deve ser preenchido",
            })}
          ></FormInput>
        </FormInputs>
        <FormButton disabled={showModal}>Logar</FormButton>
        <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
      </FormContainerContent>
    </Form>
  );
};
