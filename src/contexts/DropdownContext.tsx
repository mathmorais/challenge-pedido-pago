import { Dropdown } from "@components/inputs/Dropdown/Dropdown";
import { DropdownMobile } from "@components/inputs/Dropdown/Dropdown.mobile";
import { IDropdownItem } from "@interfaces/IDropdownItem";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";

type DropdownInfo = {
  label?: string;
};

type DropdownContextTypes = {
  items?: IDropdownItem[] | undefined;
  setItems: Dispatch<SetStateAction<IDropdownItem[] | undefined>>;
  dropdownInfo?: DropdownInfo;
  setDropdownInfo: Dispatch<SetStateAction<DropdownInfo | undefined>>;
};

export const DropdownContext = createContext({} as DropdownContextTypes);

export const DropdownContextProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<IDropdownItem[]>();
  const [dropdownInfo, setDropdownInfo] = useState<DropdownInfo>();

  const value = useMemo(
    () => ({
      items,
      dropdownInfo,
      setItems,
      setDropdownInfo,
    }),
    [items, dropdownInfo]
  );

  return (
    <DropdownContext.Provider value={value}>
      {children}
      <DropdownMobile />
    </DropdownContext.Provider>
  );
};
