import { IDropdownItem } from "@interfaces/IDropdownItem";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type DropdownContextTypes = {
  items: IDropdownItem[] | undefined;
  setItems: Dispatch<SetStateAction<IDropdownItem[] | undefined>>;
};

export const DropdownContext = createContext({} as DropdownContextTypes);

export const DropdownContextProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<IDropdownItem[]>();

  return (
    <DropdownContext.Provider value={{ items, setItems }}>
      {children}
    </DropdownContext.Provider>
  );
};
