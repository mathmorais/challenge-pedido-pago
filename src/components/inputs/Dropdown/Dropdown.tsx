import { IDropdownItem } from "@interfaces/IDropdownItem";
import { PlataformContext } from "contexts/PlataformContext";
import { ReactNode, useContext } from "react";
import { DropdownDesktop } from "./Dropdown.desktop";
import { DropdownMobile } from "./Dropdown.mobile";

export type DropdownProps = {
  items?: IDropdownItem[];
  mobile?: {
    label?: string;
    caller?: ReactNode;
  };
};

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const { isMobile } = useContext(PlataformContext);

  if (isMobile) {
    return <DropdownMobile {...props} />;
  } else {
    return <DropdownDesktop {...props} />;
  }
};
