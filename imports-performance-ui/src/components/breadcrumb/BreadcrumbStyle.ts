import styled from "styled-components";

export const BreadcrumbNavigator = styled.nav`
  list-style: none;
  display: flex;
`;

export const BreadcrumbItem = styled.li`
  color: var(--text-primary-color);
  font-weight: bold;

  &:not(:first-child) {
    margin-left: 10px;
  }

  a {
    color: var(--text-primary-color);
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    margin-right: 10px;

    &:not(:first-child) {
      margin-left: 10px;
    }

    &:hover {
      color: var(--primary-color);
    }
  }
`;
