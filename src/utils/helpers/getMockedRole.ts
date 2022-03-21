import { IRole } from "@interfaces/IRole";

export const getMockedRole = () => {
  const mockedRole: IRole = {
    name: "Analista",
    department: "SAC",
    grouprules: [
      {
        role: "Pedidos",
        permissions: ["read"],
      },
      {
        role: "Clientes",
        permissions: ["read", "write"],
      },
      {
        role: "Marketing",
        permissions: ["read", "write", "delete"],
      },
      {
        role: "Colaboradores",
        permissions: ["read", "delete"],
      },
      {
        role: "Cargos e permissões",
        permissions: ["read", "write"],
      },
      {
        role: "Catálogo",
        permissions: ["read"],
      },
      {
        role: "Financeiro",
        permissions: ["read", "write"],
      },
      {
        role: "Website e Lojas físicas",
        permissions: ["read", "delete"],
      },
    ],
  };

  return { role: mockedRole };
};
