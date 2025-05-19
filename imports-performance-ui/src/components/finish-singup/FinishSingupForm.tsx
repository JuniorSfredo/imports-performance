import React, { FC } from "react";
import {
  DefaultFormInput,
  Fields,
  Form,
  FormButton,
  FormContent,
  FormLabel,
  FormTitle,
  MaskedInput,
  PasswordContainer,
  ViewPassIcon,
} from "./FinishSingupStyle";
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface FinishSingupFormProps {
  onSubmit: SubmitHandler<FieldValues>;
  onInvalidSubmit: SubmitHandler<FieldValues>;
  showModal: boolean;
  errors: FieldValues;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
}

export const FinishSingupForm: FC<FinishSingupFormProps> = ({
  onSubmit: onFormSubmit,
  onInvalidSubmit,
  showModal,
  errors,
  register,
  handleSubmit,
}) => {
  return (
    <FormContent>
      <FormTitle>Registrar</FormTitle>
      <Form onSubmit={handleSubmit(onFormSubmit, onInvalidSubmit)}>
        <Fields>
          <FormLabel htmlFor="address">Endereço:</FormLabel>
          <DefaultFormInput
            type="text"
            id="address"
            placeholder="Ex: Av. Brigadeiro Faria Lima, São Paulo"
            {...register("address", {
              required: "O campo 'Endereço' não pode estar vazio ",
            })}
          />

          <FormLabel htmlFor="phoneNumber">Telefone:</FormLabel>
          <MaskedInput
            mask="(__) _____-____"
            replacement={{ _: /\d/ }}
            placeholder="(99) 99999-9999"
            type="text"
            id="phoneNumber"
            {...register("phoneNumber", {
              required: "O campo 'Telefone' não pode estar vazio ",
              pattern: {
                value: /^\(\d{2}\) \d{5}-\d{4}$/,
                message: "O telefone deve estar no formato (11) 99999-9999",
              },
            })}
          />

          <FormLabel htmlFor="password">Senha:</FormLabel>
          <PasswordContainer>
            <DefaultFormInput
              type="password"
              id="password"
              placeholder="********"
              {...register("password", {
                required: "O campo 'Senha' não pode estar vazio ",
                maxLength: {
                  value: 50,
                  message: "O Campo 'Senha' deve ter no máximo 50 caracteres",
                },
                minLength: {
                  value: 3,
                  message: "O Campo 'Senha' deve ter no mínimo 3 caracteres",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{3,}$/,
                  message: "A senha deve conter letras, números e simbolos",
                },
                validate: (_, values) => {
                  if (values.password !== values.confirmPassword) {
                    return "As senhas não coincidem";
                  }
                },
              })}
            />
            <ViewPassIcon icon={faEyeSlash}></ViewPassIcon>
          </PasswordContainer>

          <FormLabel htmlFor="confirmPassword">Confirmar Senha:</FormLabel>
          <PasswordContainer>
            <DefaultFormInput
              type="password"
              id="confirmPassword"
              placeholder="********"
              {...register("confirmPassword", {
                required: "O campo 'Confirmar Senha' não pode estar vazio ",
              })}
            />
            <ViewPassIcon icon={faEyeSlash}></ViewPassIcon>
          </PasswordContainer>
        </Fields>
        <FormButton disabled={showModal ? true : false} type="submit">
          Confirmar
        </FormButton>
      </Form>
    </FormContent>
  );
};
