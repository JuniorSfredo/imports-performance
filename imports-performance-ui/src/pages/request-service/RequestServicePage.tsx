import React, { useCallback, useEffect, useState } from "react";
import {
  BreadcrumbContainer,
  ButtonWrapper,
  CardVehicleWrapper,
  FormInput,
  InputWrapper,
  LeftContent,
  NotFoundVehicleText,
  RequestServiceSection,
  RightContent,
  SearchSubmitForm,
  VehicleDetailsContainer,
  VehicleForm,
  VehicleLabel,
} from "./RequestServiceStyle";
import Header from "../../components/header/Header";
import { Title } from "../../components/title/Title";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../hooks/useAuth";
import { useVehicleByClientIdAndPlate } from "../../hooks/useVehicleByClientIdAndPlate";
import { SpinnerLoading } from "../../components/spinner-loading/SpinnerLoading";
import { FieldValues, useForm } from "react-hook-form";
import { KeyValue } from "../../types/common/KeyValue";
import { Modal } from "../../components/modal/Modal";
import { useRedirect } from "../../hooks/useRedirect";
import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
import { GenericButton } from "../../components/generic-button/GenericButton";
import { VehicleBadgeType } from "../../types/vehicle/VehicleType";
import { VehicleCard } from "../../components/vehicle-card/VehicleCard";
import { useErrorModal } from "../../hooks/useErrorModal";

export const RequestServicePage = () => {
  const { errors, showModal, showErrorModal } = useErrorModal();
  const [searchPlate, setSearchPlate] = useState<string | null>(null);
  const { register, handleSubmit, reset } = useForm();
  const { redirectTo } = useRedirect();
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [isProcessingNextStep, setProcessingNextStep] =
    useState<boolean>(false);

  const {
    user,
    isAuthenticated,
    isLoadingAuth,
    isError: isErrorAuth,
  } = useAuth();

  const { vehicle, isLoading, refetch } = useVehicleByClientIdAndPlate(
    user?.id,
    searchPlate ?? "",
    !isErrorAuth && !isLoadingAuth && isAuthenticated && searchPlate != null,
  );

  const onSubmit = async (fields: FieldValues) => {
    const plate: string = fields.plate;
    setSearchPlate(plate);
    setTriggerSearch(true);
    reset();
  };

  const onInvalidSubmit = (formErrors: FieldValues) => {
    const errorsKeyValue: KeyValue[] = Object.entries(formErrors).map(
      ([field, error]): KeyValue => {
        return {
          key: field,
          message: error?.message as string,
        };
      },
    );

    showErrorModal(errorsKeyValue);
  };

  useEffect(() => {
    if (searchPlate && triggerSearch) {
      (async () => {
        const result = await refetch();
        setTriggerSearch(false);

        if (!result.data?.success || result.data?.status !== 200) {
          const apiErrorKeyValue: KeyValue[] = [
            {
              key: "apiError",
              message:
                (result.data?.data as string) ??
                "Erro ao buscar veículo. Tente novamente.",
            },
          ];

          showErrorModal(apiErrorKeyValue);
        }
      })();
    }
  }, [refetch, searchPlate, showErrorModal, triggerSearch]);

  const toVehicleBadge = (vehicle: any): VehicleBadgeType => {
    return {
      plate: vehicle.vehiclePlate,
      make: vehicle.make,
      color: vehicle.color,
      type: vehicle.vehicleType,
    };
  };

  const toNextStep = useCallback(() => {
    setProcessingNextStep(true);
    const vehicleId = {
      vehicleId: vehicle.id,
      vehiclePlate: vehicle.vehiclePlate,
    };
    setProcessingNextStep(false);
    console.log(vehicleId);
  }, [vehicle]);

  return (
    <RequestServiceSection>
      {(isLoading || isProcessingNextStep || isLoadingAuth) && <SpinnerLoading />}
      <Header isAuthenticated={true} />
      <BreadcrumbContainer>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Serviços", href: "/services" },
            { label: "Selecionar Veículo", href: "/request-service" },
          ]}
        />
      </BreadcrumbContainer>
      <VehicleDetailsContainer>
        <LeftContent>
          <Title size={"1.5rem"} color={"var(--text-primary-color)"}>
            Selecionar Veículo:
          </Title>
          <VehicleForm>
            <VehicleLabel>Placa:</VehicleLabel>
            <InputWrapper>
              <FormInput
                placeholder={"Ex: ABC1D34"}
                {...register("plate", {
                  required: "Campo 'Placa' é obrigatório",
                  pattern: {
                    message: "A placa deve conter letras e números",
                    value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
                  },
                })}
              />
              <SearchSubmitForm
                onClick={handleSubmit(onSubmit, onInvalidSubmit)}
                icon={faSearch}
              />
            </InputWrapper>
          </VehicleForm>

          {vehicle != null && (
            <CardVehicleWrapper>
              <VehicleCard {...toVehicleBadge(vehicle)} />
            </CardVehicleWrapper>
          )}

          <NotFoundVehicleText
            onClick={() => redirectTo("/register-vehicle")}
            className={"vehicle-not-found"}
          >
            Não encontrou seu veículo?
          </NotFoundVehicleText>
        </LeftContent>

        <RightContent>
          <ButtonWrapper className="next-button-wrapper">
            <GenericButton
              fontSize="15px"
              color="#fff"
              bgColor="var(--primary-color)"
              hoverBgColor="var(--btn-hover-primary-color)"
              width="100%"
              height="100%"
              borderRadius="15px"
              fontWeight="bold"
              disabled={!vehicle}
              onClick={() => toNextStep()}
            >
              Próximo Passo
            </GenericButton>
          </ButtonWrapper>
        </RightContent>
      </VehicleDetailsContainer>

      {showModal && <Modal errors={errors} />}
    </RequestServiceSection>
  );
};
