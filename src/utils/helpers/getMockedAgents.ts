import { AgentStatus } from "@interfaces/IAgent";
import { IAgents } from "@interfaces/IAgents";

export const getMockedAgents = () => {
  const mockedAgents: IAgents[] = [
    {
      id: 1,
      agent_id: 1,
      name: "Kai Cunha Lima",
      branch: "Farmácia Pedido Pago",
      department: "Administrativo",
      image: "https://picsum.photos/id/1/200/300",
      role: "Diretor",
      status: AgentStatus.Active,
    },
    {
      id: 2,
      agent_id: 2,
      name: "Brenda Cunha Pinto",
      branch: "Farmácia Pedido Pago",
      department: "Administrativo",
      image: "https://picsum.photos/id/1/200/300",
      role: "Diretor",
      status: AgentStatus.Active,
    },
    {
      id: 3,
      agent_id: 3,
      name: "Kaua Gomes Castro",
      branch: "Farmácia Pedido Pago",
      department: "Administrativo",
      image: "https://picsum.photos/id/1/200/300",
      role: "Gerente",
      status: AgentStatus.Inactive,
    },
  ];

  return { agents: mockedAgents };
};
