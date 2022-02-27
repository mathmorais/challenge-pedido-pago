import axios from "axios";
import type { NextPage, GetServerSideProps, GetStaticProps } from "next";
import { Layout } from "../components/Layout";
import { RolesTab } from "../components/tabs/RolesTab";
import { ColaboratorsTab } from "../components/tabs/ColaboratorsTab";
import { Tabs } from "../components/Tabs";
import { Table } from "../components/Table";
import { Title } from "../components/Typography";
import { OrganizationContextProvider } from "../context/OrganizationContext";
import { IAgents } from "../interfaces/IAgents";
import { ITab } from "../interfaces/ITab";
import { TablePageTemplate } from "../components/TablePageTemplate";

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
    <Layout>
      <TablePageTemplate title="Organização">
        <OrganizationContextProvider initialValue={agents}>
          <Tabs tabs={tabs} />
        </OrganizationContextProvider>
      </TablePageTemplate>
    </Layout>
  );
};

export default ColaboratorsList;

export const getStaticProps: GetStaticProps = async () => {
  const url = `${process.env.API_URL}/agents`;
  const { data } = await axios.get(url);

  return {
    props: {
      agents: data.items,
    },
    revalidate: 60 * 5, // 5 minutes
  };
};
