import axios from "axios";
import React, {
  createContext,
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { IAgents } from "../interfaces/IAgents";
import { IRoles } from "../interfaces/IRoles";
import { PaginatorContext } from "./PaginatorContext";

type AgentsListContextProps = {
  agents: IAgents[];
  roles: IRoles[];
  handleGetAgents(): Promise<void>;
  handleGetRoles(): Promise<void>;
  handleFilterAgents(filter: string): void;
  handleFilterRoles(filter: string): void;
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

  const handleGetAgents = async () => {
    if (!dataStore.current.agents) {
      const { data } = await axios.get<{ items: IAgents[] }>("/api/agents");
      setAgents(data.items);
      dataStore.current.agents = data.items;
    }
  };

  const handleGetRoles = async () => {
    if (!dataStore.current.roles) {
      const { data } = await axios.get<{ roles: IRoles[] }>("/api/roles");
      setRoles(data.roles);
      dataStore.current.roles = data.roles;
    }
  };

  const handleFilterAgents = (filter: string) => {
    const filtredArray = dataStore.current.agents?.filter((agent) =>
      agent.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
    setAgents(filtredArray ?? agents);
  };

  const handleFilterRoles = (filter: string) => {
    const filtredArray = dataStore.current.roles?.filter((agent) =>
      agent.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
    setRoles(filtredArray ?? roles);
  };

  return (
    <OrganizationContext.Provider
      value={{
        agents,
        roles,
        handleGetAgents,
        handleGetRoles,
        handleFilterAgents,
        handleFilterRoles,
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};
