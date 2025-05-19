import React, { FC } from "react";
import { FormRegisterProps } from "../../types/props/auth/FormRegisterProps";
import {
  Form,
  FormButton,
  FormContainerContent,
  FormInput,
  FormInputs,
  FormLabel,
  FormTitle,
  MaskedInput,
} from "./AuthComponentStyle";
import { FieldValues, useForm } from "react-hook-form";
import { validateCPF } from '../../validators/validateCPF'
import { useRegister } from '../../context/register-context/UseRegister'
import { useNavigate } from 'react-router-dom'

export const RegisterSection: FC<FormRegisterProps> = ({
  isLogin,
  animate,
  invalidFields,
  showModal,
}) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { updateRegisterData } = useRegister();

  const nextRegisterStep = (data: FieldValues, event: any) => {
    event.preventDefault();
    const { emailRegister, name, cpf } = data;

    const formData = {
      email: emailRegister,
      name: name,
      cpf: cpf,
    };

    updateRegisterData(formData);
    navigate("/auth/login/register");
  };

  return (
    <FormContainerContent
      isLogin={isLogin}
      animate={animate}
      className="form-register"
    >
      <Form onSubmit={handleSubmit(nextRegisterStep, invalidFields)}>
      <FormTitle>Registrar</FormTitle>
      <FormInputs>
        <FormLabel htmlFor="emailRegister">E-mail:</FormLabel>
        <FormInput
          id="emailRegister"
          type="text"
          placeholder="example@exemple.com"
          {...register("emailRegister", {
            required: "O Campo 'Email' deve ser preenchido.",
            pattern: {
              value: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
              message:
                "O Email deve ser válido",
            },
          })}
        />

        <FormLabel htmlFor="name">Nome:</FormLabel>
        <FormInput
          id="name"
          type="text"
          placeholder="Seu nome"
          {...register("name", {
            required: "O Campo 'Nome' deve ser preenchido.",
            minLength: {
              value: 1,
              message: "Insira um nome válido",
            },
            maxLength: {
              value: 255,
              message: "O nome deve ter no máximo 255 caracteres",
            },
          })}
        />

        <FormLabel htmlFor="cpf">CPF:</FormLabel>
        <MaskedInput
          mask="___.___.___-__"
          replacement={{ "_": /\d/ }}
          placeholder="000.000.000-00"
          {...register("cpf", {
            required: "O Campo 'CPF' deve ser preenchido.",
            validate: (_, values) => {
              if (!validateCPF(values.cpf)) return "Insira um CPF válido";
            }
          })}
        />
      </FormInputs>
      <FormButton disabled={showModal}>Prosseguir</FormButton>
      </Form>
    </FormContainerContent>
  );
};
