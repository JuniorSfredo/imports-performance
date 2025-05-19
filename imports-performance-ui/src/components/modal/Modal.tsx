import React from "react";
import {
  ErrorItem,
  ModalContainer,
  ModalContent,
  ModalTitle,
} from "./ModalStyle";
import { ModalProps } from "../../types/props/modal/ModalProps";

export const Modal: React.FC<ModalProps> = ({ errors }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Ops! Ocorreu um problema</ModalTitle>
        {errors.map((error) => (
          <ErrorItem key={error.key}>{error.message}</ErrorItem>
        ))}
      </ModalContent>
    </ModalContainer>
  );
};
