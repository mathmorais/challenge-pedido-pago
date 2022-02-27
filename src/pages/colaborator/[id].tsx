import axios from "axios";
import { GetServerSideProps } from "next";
import { ColaboratorProfile } from "../../components/ColaboratorProfile";
import { Layout } from "../../components/Layout";
import { TablePageTemplate } from "../../components/TablePageTemplate";
import { IAgent } from "../../interfaces/IAgent";

type ColaboratorInfoProps = {
  agent: IAgent;
};

const ColaboratorInfo: React.FC<ColaboratorInfoProps> = ({ agent }) => {
  return (
    <Layout>
      <TablePageTemplate withBackButton title="Detalhes do colaborador">
        <ColaboratorProfile colaborator={agent} />
      </TablePageTemplate>
    </Layout>
  );
};

export default ColaboratorInfo;

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
