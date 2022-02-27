import { ReactNode } from "react";

export interface IDropdownItem {
  enabled?: boolean;
  icon?: ReactNode;
  label: string;
  action: () => void;
}
