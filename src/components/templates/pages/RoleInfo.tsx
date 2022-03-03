import { TableCell } from "@components/layouts/TableList/TableList.desktop";
import styled from "@emotion/styled";
import { IRole } from "../../../interfaces/IRole";
import { ITableColumn } from "../../../interfaces/ITableColumn";
import { Checkbox } from "../../buttons/Checkbox/Checkbox";
import { Input } from "../../inputs/Input/Input";
import { TableList } from "../../layouts/TableList/TableList";
import { Paragraphy } from "../../layouts/Typography/Typography";

const RoleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RolefInfoRow = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const RoleInfoSection = styled.section`
  display: flex;
  flex-direction: column;

  ${Paragraphy} {
    font-weight: 600;
    margin-bottom: 40px;
  }
`;

enum RoleColumnFields {
  Role = "role",
  Read = "read",
  Write = "write",
  Delete = "delete",
}

export const RoleInfo: React.FC<IRole> = ({ name, department, grouprules }) => {
  const columns: ITableColumn[] = [
    {
      field: RoleColumnFields.Role,
      headerName: "Cargo",
      width: "100%",
    },
    {
      field: RoleColumnFields.Read,
      headerName: "Ler",
    },
    {
      field: RoleColumnFields.Write,
      headerName: "Editar",
    },
    {
      field: RoleColumnFields.Delete,
      headerName: "Excluir",
    },
  ];

  const handleCellSwitching = (
    column: ITableColumn,
    row: any,
    index: number
  ) => {
    if (column.field !== RoleColumnFields.Role) {
      return <Checkbox field={column.field} reference={row.permissions} />;
    }
  };

  return (
    <RoleInfoContainer>
      <RoleInfoSection>
        <Paragraphy>Dados do cargo</Paragraphy>
        <RolefInfoRow>
          <Input value={department} readOnly label="Departamento" />
          <Input value={name} readOnly label="Cargo" />
        </RolefInfoRow>
      </RoleInfoSection>
      <RoleInfoSection>
        <Paragraphy>Listagem de permissões</Paragraphy>
        <TableList
          cellSpacing={50.5}
          mobileVersion={false}
          cellSwap={handleCellSwitching}
          columns={columns}
          rows={grouprules}
        />
      </RoleInfoSection>
    </RoleInfoContainer>
  );
};
