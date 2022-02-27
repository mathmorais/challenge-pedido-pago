import { Layout } from "../../components/Layout";
import { TableList } from "../../components/TableList";
import { TablePageTemplate } from "../../components/TablePageTemplate";
import { Paragraphy } from "../../components/Typography";
import { IAgent } from "../../interfaces/IAgent";

type ColaboratorInfoProps = {
  agent: IAgent;
};

const ColaboratorInfo: React.FC<ColaboratorInfoProps> = ({ agent }) => {
  return (
    <Layout>
      <TablePageTemplate withBackButton title="Cargos e permissões">
        <Paragraphy>Dados do cargo</Paragraphy>
        <Paragraphy>Dados do cargo</Paragraphy>
        {/* <TableList
          columns={[
            {
              field: "roles",
              headerName: "Cargo",
              width: 500,
            },
          ]}
rows={}
/> */}
      </TablePageTemplate>
    </Layout>
  );
};

export default ColaboratorInfo;
