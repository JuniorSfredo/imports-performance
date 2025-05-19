import styled from "styled-components";

export const VehicleCardContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: 1px solid var(--primary-color);
  padding: 20px;
  background-color: #2a2a2a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s,
  box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const VehicleCardTitle = styled.span`
  color: var(--primary-color);
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 700;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
`;

export const SelectedVehicleInput = styled.input`
  appearance: none;
  width: 25px;
  height: 25px;
  margin-right: 20px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  background-color: var(#2a2a2a);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
    background-color: var(--primary-color);
  }

  &:checked::before {
    transform: scale(1);
  }
`;

export const VehicleCardDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const VehicleCardPlate = styled.span`
  color: var(--text-primary-color);
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
`;

