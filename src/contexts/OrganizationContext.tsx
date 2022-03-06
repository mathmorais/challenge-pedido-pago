import axios from "axios";
import { RequestStates } from "enums/RequestStates";
import React, { createContext, useRef, useState } from "react";
import { IAgents } from "../interfaces/IAgents";
import { IRoles } from "../interfaces/IRoles";

type OrganizationDataTypes = "agents" | "roles";

type AgentsListContextProps = {
  state: RequestStates;
  agents: IAgents[];
  roles: IRoles[];
  handleGetData(type: OrganizationDataTypes): Promise<void>;
  handleFilterData(type: OrganizationDataTypes, filter: string): Promise<void>;
};

export const OrganizationContext = createContext({} as AgentsListContextProps);

export const OrganizationContextProvider: React.FC<{
  initialValue: IAgents[];
}> = ({ initialValue, children }) => {
  let dataStore = useRef({
    agents: initialValue,
    roles: null,
  } as { agents: IAgents[] | null; roles: IRoles[] | null });
  const [agents, setAgents] = useState<IAgents[]>(initialValue);
  const [roles, setRoles] = useState<IRoles[]>([]);
  const [state, setState] = useState<RequestStates>(RequestStates.empty);

  const organizationDataTypes = {
    agents: {
      dataResponseProp: "items",
      dataGetter: agents,
      dataSetter: setAgents,
    },
    roles: {
      dataResponseProp: "roles",
      dataGetter: roles,
      dataSetter: setRoles,
    },
  };

  const handleGetData = async (type: OrganizationDataTypes) => {
    const { dataSetter, dataResponseProp } = organizationDataTypes[type];

    if (!dataStore.current[type]) {
      setState(RequestStates.loading);
      const response = await axios.get(`/api/${type}`);
      const data = response.data[dataResponseProp];

      dataSetter(data);
      setState(RequestStates.completed);

      dataStore.current[type] = data;
    }
  };

  const handleFilterData = async (
    type: OrganizationDataTypes,
    filter: string
  ) => {
    const { dataGetter, dataSetter } = organizationDataTypes[type];

    const data = [...(dataStore.current[type] ?? [])];

    const filtredArray = data?.filter((dataItem) => {
      return dataItem.name.toLowerCase().includes(filter.toLocaleLowerCase());
    }) as any[];

    dataSetter(filtredArray ?? dataGetter);
  };

  return (
    <OrganizationContext.Provider
      value={{
        state,
        agents,
        roles,
        handleGetData,
        handleFilterData,
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};
