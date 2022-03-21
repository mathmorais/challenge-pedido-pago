import { GetServerSideProps, LayoutNextPage } from "next";
import { ColaboratorInfo } from "../../components/pages/ColaboratorInfo";
import { Layout } from "../../components/layouts/Layout/Layout";
import { TablePageTemplate } from "../../components/templates/TablePageTemplate/TablePageTemplate";
import { IAgent } from "../../interfaces/IAgent";
import { getMockedAgent } from "@utils/helpers/getMockedAgent";

type ColaboratorInfoProps = {
  agent: IAgent;
};

const Colaborator: LayoutNextPage<ColaboratorInfoProps> = ({ agent }) => {
  return (
    <TablePageTemplate withBackButton title="Detalhes do colaborador">
      <ColaboratorInfo colaborator={agent} />
    </TablePageTemplate>
  );
};

Colaborator.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Colaborator;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { agent } = getMockedAgent();

  return {
    props: {
      agent: agent,
    },
  };
};
