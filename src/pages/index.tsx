import axios from "axios";
import type { NextPage, GetServerSideProps } from "next";
import { ColaboratorsTab } from "../components/templates/tabs/ColaboratorsTab";
import { OrganizationContextProvider } from "../contexts/OrganizationContext";
import { IAgents } from "../interfaces/IAgents";
import { ITab } from "../interfaces/ITab";
import { TablePageTemplate } from "../components/templates/pages/TablePageTemplate";
import { RolesTab } from "../components/templates/tabs/RolesTab";
import { Layout } from "../components/layouts/Layout/Layout";
import { Tabs } from "../components/layouts/Tabs/Tabs";

type ColaboratorsListProps = {
  agents: IAgents[];
};

const ColaboratorsList: NextPage<ColaboratorsListProps> = ({ agents }) => {
  const tabs: ITab[] = [
    {
      title: "Colaboradores",
      component: <ColaboratorsTab />,
    },
    {
      title: "Cargos",
      component: <RolesTab />,
    },
  ];

  return (
    <Layout pageTitle="Organização - Pedido Pago">
      <TablePageTemplate title="Organização">
        <OrganizationContextProvider initialValue={agents}>
          <Tabs tabs={tabs} />
        </OrganizationContextProvider>
      </TablePageTemplate>
    </Layout>
  );
};

export default ColaboratorsList;

export const getServerSideProps: GetServerSideProps = async () => {
  const url = `${process.env.API_URL}/agents`;

  const { data } = await axios.get(url);

  return {
    props: {
      agents: data.items,
    },
  };
};
