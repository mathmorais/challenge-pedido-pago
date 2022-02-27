import axios from "axios";
import React, { createContext, useState } from "react";
import { IAgents } from "../interfaces/IAgents";
import { IRole } from "../interfaces/IRole";

type AgentsListContextProps = {
  agents: IAgents[];
  roles: IRole[];
  handleGetAgents(): Promise<void>;
  handleGetRoles(): Promise<void>;
};

export const OrganizationContext = createContext({} as AgentsListContextProps);

export const OrganizationContextProvider: React.FC<{
  initialValue: IAgents[];
}> = ({ initialValue, children }) => {
  const [agents, setAgents] = useState<IAgents[]>(initialValue);
  const [roles, setRoles] = useState<IRole[]>([]);

  const handleGetAgents = async () => {
    if (agents.length <= 0) {
      const { data } = await axios.get<{ items: IAgents[] }>("/api/agents");
      setAgents(data.items);
    }
  };

  const handleGetRoles = async () => {
    if (roles.length <= 0) {
      const { data } = await axios.get<{ roles: IRole[] }>("/api/roles");
      setRoles(data.roles);
    }
  };

  return (
    <OrganizationContext.Provider
      value={{ agents, roles, handleGetAgents, handleGetRoles }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};
