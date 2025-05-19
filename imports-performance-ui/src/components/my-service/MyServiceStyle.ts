import styled from "styled-components";
import "../../styles/App.css";

export const MyServiceSection = styled.section`
  display: block;
  flex-direction: column;
  width: 80vw;
  height: auto;
  padding: 0 40px;

  & div {
    align-items: center;
  }
`;

export const CustomTableContainer = styled.div`
  margin: 2rem auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;

  & > div.pagination {
    align-self: end;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  flex-wrap: wrap;
  gap: 8px;
`;

export const PageButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: var(--text-primary-color);
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--primary-color);
    transform: scale(1.1);
  }

  &:disabled {
    background-color: transparent;
    color: var(--text-disabled-color);
  }
`;

export const PaginationIconButton = styled(PageButton)`
  border-radius: 10px;
`;

export const EmptyOrdersServiceText = styled.p`
  color: var(--text-primary-color);
  font-size: 1.5rem;
  display: flex;
  margin: 20px 0 20px 0;
`;

export const UnauthContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

