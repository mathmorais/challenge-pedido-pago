import React, { createContext, useState } from "react";

type SetState = React.Dispatch<React.SetStateAction<number>>;

type AgentsListContextProps = {
  limit: number;
  setLimit: SetState;
  offset: number;
  setOffset: SetState;
};

export const PaginatorContext = createContext({} as AgentsListContextProps);

export const PaginatorContextProvider: React.FC = ({ children }) => {
  const [limit, setLimit] = useState<number>(5);
  const [offset, setOffset] = useState<number>(0);

  return (
    <PaginatorContext.Provider value={{ limit, offset, setLimit, setOffset }}>
      {children}
    </PaginatorContext.Provider>
  );
};
