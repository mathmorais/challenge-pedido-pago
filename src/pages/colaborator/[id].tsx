import axios from "axios";
import { GetServerSideProps, LayoutNextPage } from "next";
import { ColaboratorInfo } from "../../components/templates/pages/ColaboratorInfo";
import { Layout } from "../../components/layouts/Layout/Layout";
import { TablePageTemplate } from "../../components/templates/pages/TablePageTemplate";
import { IAgent } from "../../interfaces/IAgent";

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
  const colaboratorId = context.params?.id || "1";

  const url = `${process.env.API_URL}/agent/${colaboratorId}`;
  const { data } = await axios.get(url);

  return {
    props: {
      agent: data.agent,
    },
  };
};
