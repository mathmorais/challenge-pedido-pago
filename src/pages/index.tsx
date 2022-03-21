import axios from "axios";
import type { GetStaticProps, LayoutNextPage } from "next";
import { IAgents } from "../interfaces/IAgents";
import { ITab } from "../interfaces/ITab";
import { TablePageTemplate } from "../components/templates/TablePageTemplate/TablePageTemplate";
import { RolesTab } from "../components/tabs/RolesTab/RolesTab";
import { Layout } from "../components/layouts/Layout/Layout";
import { Tabs } from "../components/layouts/Tabs/Tabs";
import { DropdownContextProvider } from "contexts/DropdownContext";
import { OrganizationContextProvider } from "@contexts/OrganizationContext";
import { ColaboratorsTab } from "@components/tabs/ColaboratorsTab/ColaboratorsTab";
import { getMockedAgents } from "@utils/helpers/getMockedAgents";

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

export const getStaticProps: GetStaticProps = async (context) => {
  const { agents } = getMockedAgents();

  return {
    props: {
      agents: agents,
    },
    revalidate: 600, // 10 minutes
  };
};
