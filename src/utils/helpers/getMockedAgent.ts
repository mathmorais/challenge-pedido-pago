import { AgentStatus, IAgent } from "@interfaces/IAgent";

export const getMockedAgent = () => {
  const mockedAgent: IAgent = {
    id: 1,
    name: "Kai Cunha Lima",
    email: "kaicunhalinha@email.com",
    phone: {
      ddd: "11",
      ddi: "55",
      number: "987654321",
    },
    document: {
      type: "cpf",
      number: "12345678901",
    },
    birth_date: "2022-02-14T23:15:14.715Z",
    image: "https://picsum.photos/200",
    department: "Administrativo",
    branch: "Farmácia Pedido Pago",
    role: "Diretor",
    status: AgentStatus.Active,
  };

  return { agent: mockedAgent };
};
