import { getMockedRole } from "@utils/helpers/getMockedRole";
import axios from "axios";
import { GetServerSideProps, LayoutNextPage } from "next";
import { Layout } from "../../components/layouts/Layout/Layout";
import { RoleInfo } from "../../components/pages/RoleInfo";
import { TablePageTemplate } from "../../components/templates/TablePageTemplate/TablePageTemplate";
import { IRole } from "../../interfaces/IRole";

type RoleProps = {
  role: IRole;
};

const Role: LayoutNextPage<RoleProps> = ({ role }) => {
  return (
    <TablePageTemplate withBackButton title="Cargos e permissões">
      <RoleInfo {...role} />
    </TablePageTemplate>
  );
};

Role.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Role;

export const getServerSideProps: GetServerSideProps<RoleProps> = async (
  context
) => {
  const { role } = getMockedRole();

  return {
    props: {
      role: role,
    },
  };
};
