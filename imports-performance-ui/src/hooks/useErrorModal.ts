import { KeyValue } from "../types/common/KeyValue";
import { useCallback, useState } from "react";

export const useErrorModal = (duration = 2000) => {
  const [errors, setErrors] = useState<KeyValue[]>([]);
  const [showModal, setShowModal] = useState(false);

  const showErrorModal = useCallback((modalErrors: KeyValue[]) => {
    setErrors(modalErrors);
    setShowModal(true);

    const timeout = setTimeout(() => {
      setShowModal(false);
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration]);

  return {
    errors,
    showModal,
    showErrorModal,
  }
};
