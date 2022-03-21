import { IRoles } from "@interfaces/IRoles";

export const getMockedRoles = () => {
  const mockedRoles: IRoles[] = [
    {
      agents_quantity: 2,
      departament: "SAC",
      name: "Supervisor",
    },
    {
      agents_quantity: 4,
      departament: "Eventos",
      name: "Gerente",
    },
    {
      agents_quantity: 6,
      departament: "Produtivo",
      name: "Analista",
    },
  ];

  return { roles: mockedRoles };
};
