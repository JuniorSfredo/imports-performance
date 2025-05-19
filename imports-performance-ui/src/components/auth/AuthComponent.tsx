import React, { useEffect, useState } from "react";
import bmwLogin from "../../assets/bmw-login.jpeg";
import {
  AuthContainer,
  AuthSection,
  BackgroundImg,
  DescriptionContainerLogin,
  DescriptionContainerRegister,
  FormContainer,
  Overlayer,
  RegisterButton,
  WantRegisterText,
} from "./AuthComponentStyle";
import { RegisterSection } from "./RegisterSection";
import { KeyValue } from "../../types/common/KeyValue";
import { Modal } from "../modal/Modal";
import { LoginSection } from "./LoginSection";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { SpinnerLoading } from '../spinner-loading/SpinnerLoading'

const AuthComponent = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState<KeyValue[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleModal = (errorsModal: KeyValue[]) => {
    setErrors(errorsModal);

    setShowModal((prev) => !prev);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  const changeLoading = (isActive: boolean) => {
    setIsLoading(isActive);
  }

  const invalidFields: SubmitErrorHandler<FieldValues> = (errors, event) => {
    const formattedErrors = getErrorKeyValue(errors);
    toggleModal(formattedErrors);
  };

  const getErrorKeyValue = (errFieldValue: FieldValues) => {
    return Object.entries(errFieldValue).map(([key, value]) => ({
      key,
      message: (value as { message: string }).message,
    }));
  };

  const handleToggleForm = () => {
    setAnimate(true);
  };

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setIsLogin((prev) => !prev);
        setAnimate(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (

    <AuthSection>
      { isLoading && (<SpinnerLoading />)}
      <AuthContainer>
        <BackgroundImg src={bmwLogin} />
        <Overlayer>
          {isLogin ? (
            <DescriptionContainerLogin animate={animate} isLogin={isLogin}>
              <WantRegisterText>Não possui uma conta?</WantRegisterText>
              <RegisterButton onClick={handleToggleForm}>
                Registrar
              </RegisterButton>
            </DescriptionContainerLogin>
          ) : (
            <DescriptionContainerRegister animate={animate} isLogin={isLogin}>
              <WantRegisterText>Já possui uma conta?</WantRegisterText>
              <RegisterButton onClick={handleToggleForm}>
                Fazer Login
              </RegisterButton>
            </DescriptionContainerRegister>
          )}
        </Overlayer>
        <FormContainer animate={animate} isLogin={isLogin}>
          {isLogin ? (
            <LoginSection
              changeLoading={changeLoading}
              showModal={showModal}
              toggleModal={toggleModal}
              isLogin={isLogin}
              animate={animate}
              invalidFields={invalidFields}
            />
          ) : (
            <RegisterSection
              showModal={showModal}
              invalidFields={invalidFields}
              isLogin={isLogin}
              animate={animate}
            />
          )}
        </FormContainer>
      </AuthContainer>
      {showModal && <Modal errors={errors} />}
    </AuthSection>
  );
};

export default AuthComponent;
