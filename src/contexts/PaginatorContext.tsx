import React, { createContext, useState } from "react";

type AgentsListContextProps = {
  limit: number;
  offset: number;
};

export const PaginatorContext = createContext({} as AgentsListContextProps);

export const PaginatorContextProvider: React.FC = ({ children }) => {
  const [limit, setLimit] = useState<number>(5);
  const [offset, setOffset] = useState<number>(5);

  return (
    <PaginatorContext.Provider value={{ limit, offset }}>
      {children}
    </PaginatorContext.Provider>
  );
};
