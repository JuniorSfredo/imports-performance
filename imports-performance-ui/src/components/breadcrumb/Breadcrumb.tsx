import React, { FC } from "react";
import { BreadcrumbProps } from "../../types/props/breadcrumb/BreadcrumbProps";
import {BreadcrumbItem, BreadcrumbNavigator} from "./BreadcrumbStyle";

export const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  return (
    <BreadcrumbNavigator>
      {items.map((item, index) => (
        <BreadcrumbItem key={index}>
          <a href="{item.href}">{item.label}</a>
          {index < items.length - 1 && ">"}
        </BreadcrumbItem>
      ))}
    </BreadcrumbNavigator>
  );
};
