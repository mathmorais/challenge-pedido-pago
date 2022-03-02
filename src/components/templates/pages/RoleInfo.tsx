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
`;

const RoleInfoSection = styled.section`
  display: flex;
  flex-direction: column;

  ${Paragraphy} {
    font-weight: 600;
    margin-bottom: 40px;
  }
`;

export const RoleInfo: React.FC<IRole> = ({ name, department, grouprules }) => {
  const columns: ITableColumn[] = [
    {
      field: "role",
      headerName: "Cargo",
      width: 400,
    },
    {
      field: "read",
      headerName: "Ler",
      width: 96,
    },
    {
      field: "write",
      headerName: "Editar",
      width: 96,
    },
    {
      field: "delete",
      headerName: "Excluir",
      width: 96,
    },
  ];

  const handleCellSwitching = (
    column: ITableColumn,
    row: any,
    index: number
  ) => {
    if (column.field !== "role") {
      return (
        <TableCell key={index} width={column.width}>
          <Checkbox field={column.field} reference={row.permissions} />
        </TableCell>
      );
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
          cellSwap={handleCellSwitching}
          columns={columns}
          rows={grouprules}
        />
      </RoleInfoSection>
    </RoleInfoContainer>
  );
};
