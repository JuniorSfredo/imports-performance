import styled from "styled-components";
import '../../styles/App.css'

export const CustomTableDesign = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const CustomTableRow = styled.tr`
  width: 100%;
`

export const CustomTableHeader = styled.th`
  color: #fff;
  text-align: center;
  padding: 8px;
  width: 33.33%;
  border: 1px solid var(--text-primary-color);
`;

export const CustomTableDataCell = styled.td`
  color: var(--text-primary-color);
  border: 1px solid var(--text-primary-color);
  padding: 10px;
  text-align: center;
`;
