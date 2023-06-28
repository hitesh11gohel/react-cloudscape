import React from "react";
import BreadcrumbGroup, {
  BreadcrumbGroupProps,
} from "@cloudscape-design/components/breadcrumb-group";
// import { AppContext } from "../contexts/AppContext";

const items: BreadcrumbGroupProps.Item[] = [
  { text: "Home", href: "/" },
  { text: "Dashboard", href: "/dashboard" },
];

export interface BreadcrumbsProps {
  active: BreadcrumbGroupProps.Item;
}

export default function Breadcrumbs() {
  // const context = useContext(AppContext);
  // console.log(context);
  return <BreadcrumbGroup items={items} />;
}
