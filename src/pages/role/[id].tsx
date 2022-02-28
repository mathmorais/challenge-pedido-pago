import axios from "axios";
import { GetServerSideProps } from "next";
import { Layout } from "../../components/layouts/Layout/Layout";
import { RoleInfo } from "../../components/templates/pages/RoleInfo";
import { TablePageTemplate } from "../../components/templates/pages/TablePageTemplate";
import { IRole } from "../../interfaces/IRole";

type RoleProps = {
  role: IRole;
};

const Role: React.FC<RoleProps> = ({ role }) => {
  return (
    <Layout pageTitle="Cargo - Pedido Pago">
      <TablePageTemplate withBackButton title="Cargos e permissões">
        <RoleInfo {...role} />
      </TablePageTemplate>
    </Layout>
  );
};

export default Role;

export const getServerSideProps: GetServerSideProps<RoleProps> = async (
  context
) => {
  const roleId = context.params?.id || 1;
  const url = `${process.env.API_URL}/role/${roleId}`;
  const { data } = await axios.get(url);

  return {
    props: {
      role: data.role,
    },
  };
};
