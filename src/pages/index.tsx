import axios from "axios";
import type { GetStaticProps, LayoutNextPage, NextPage } from "next";
import { ColaboratorsTab } from "../components/templates/tabs/ColaboratorsTab";
import { OrganizationContextProvider } from "../contexts/OrganizationContext";
import { IAgents } from "../interfaces/IAgents";
import { ITab } from "../interfaces/ITab";
import { TablePageTemplate } from "../components/templates/pages/TablePageTemplate";
import { RolesTab } from "../components/templates/tabs/RolesTab";
import { Layout } from "../components/layouts/Layout/Layout";
import { Tabs } from "../components/layouts/Tabs/Tabs";
import { DropdownContextProvider } from "contexts/DropdownContext";
import { ReactElement } from "react";

type ColaboratorsListProps = {
  agents: IAgents[];
};

const Organization: LayoutNextPage<ColaboratorsListProps> = ({ agents }) => {
  const tabs: ITab[] = [
    {
      title: "Colaboradores",
      component: (
        <OrganizationContextProvider initialValue={agents}>
          <ColaboratorsTab />
        </OrganizationContextProvider>
      ),
    },
    {
      title: "Cargos",
      component: (
        <OrganizationContextProvider initialValue={agents}>
          <RolesTab />
        </OrganizationContextProvider>
      ),
    },
  ];

  return (
    <TablePageTemplate title="Organização">
      <DropdownContextProvider>
        <Tabs tabs={tabs} />
      </DropdownContextProvider>
    </TablePageTemplate>
  );
};

Organization.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Organization;

export const getStaticProps: GetStaticProps = async () => {
  const url = `${process.env.API_URL}/agents`;

  const { data } = await axios.get(url);

  return {
    props: {
      agents: data.items,
    },
    revalidate: 600, // 10 minutes
  };
};
