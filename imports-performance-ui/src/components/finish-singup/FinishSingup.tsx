import React, { useState, FC } from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  SubmitErrorHandler,
} from "react-hook-form";
import { FinishSingupSection, FormContainer } from "./FinishSingupStyle";
import { Modal } from "../modal/Modal";
import { KeyValue } from "../../types/common/KeyValue";
import { FinishSingupForm } from "./FinishSingupForm";
import { useRegister } from "../../context/register-context/UseRegister";
import { registerCustomer } from "../../api/services/CustomerService";
import { Customer } from "../../types/payloads/Customer";
import { UserLogin } from "../../types/payloads/request/UserLogin";
import { UserRoles } from "../../types/payloads/enums/UserRoles";
import { signIn } from "../../api/services/AuthService";
import { useAuthStore } from "../../store/AuthStore";
import { useNavigate } from 'react-router-dom'

const FinishSingup: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showModal, setShowModal] = useState(false);
  const { registerData, updateRegisterData } = useRegister();
  const [errorMessages, setErrorMessages] = useState<KeyValue[]>([]);
  const navigate = useNavigate();

  const toggleModal = (errors?: KeyValue[]) => {
    if (errors) setErrorMessages(errors);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      setErrorMessages([]);
    }, 2000);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data, event) => {
    event?.preventDefault();

    const fullCustomerData = {
      ...registerData,
      address: data.address,
      phoneNumber: data.phoneNumber,
      password: data.password,
    };

    updateRegisterData(fullCustomerData);

    const response = await registerCustomer(fullCustomerData as Customer);

    if (response.success && response.status === 201) {
      const loginCustomer: UserLogin = {
        email: fullCustomerData.email!,
        password: fullCustomerData.password!,
        role: UserRoles.CLIENT,
      };

      const loginResponse = await signIn(loginCustomer);
      if (loginResponse.success && loginResponse.status === 200) {
        console.log(useAuthStore.getState().access_token);
        navigate('/');
      }
    }

    if (!response.success) {
      toggleModal([
        {
          key: "error",
          message: response.data.message,
        },
      ] as KeyValue[]);

      return;
    }
  };

  const onInvalidSubmit: SubmitErrorHandler<FieldValues> = (errors) => {
    toggleModal(getErrorMessages(errors));
    return;
  };

  const getErrorMessages: (errors: FieldValues) => KeyValue[] = (errors) => {
    let errorMessages: KeyValue[] = Object.entries(errors).map(
      ([key, value]) => {
        return {
          key: key,
          message: value.message,
        };
      },
    );

    return errorMessages;
  };

  return (
    <FinishSingupSection>
      <FormContainer>
        <FinishSingupForm
          onSubmit={onSubmit}
          onInvalidSubmit={onInvalidSubmit}
          showModal={showModal}
          errors={errors}
          register={register}
          handleSubmit={handleSubmit}
        ></FinishSingupForm>
      </FormContainer>

      {showModal && <Modal errors={errorMessages}></Modal>}
    </FinishSingupSection>
  );
};

export default FinishSingup;
