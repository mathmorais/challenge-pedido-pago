import styled from "@emotion/styled";
import { mediaQueries } from "@utils/constants/mediaQueries";
import { RolePermissions } from "enums/GroupPermissions";
import { IRole, IRoleGroupRule } from "../../interfaces/IRole";
import { ITableColumn } from "../../interfaces/ITableColumn";
import { Checkbox } from "../buttons/Checkbox/Checkbox";
import { Input } from "../inputs/Input/Input";
import { CustomCell, TableList } from "../layouts/TableList/TableList";
import { Paragraphy } from "../layouts/Typography/Typography";

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

  ${mediaQueries.mediaQuery[0]} {
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

export const RoleInfo: React.FC<IRole> = ({ name, department, grouprules }) => {
  const columns: ITableColumn[] = [
    {
      field: "role",
      headerName: "Cargo",
      width: "100%",
    },
    {
      field: "read",
      headerName: "Ler",
      width: 150,
    },
    {
      field: "write",
      headerName: "Editar",
      width: 150,
    },
    {
      field: "delete",
      headerName: "Excluir",
      width: 150,
    },
  ];

  const handleCellSwitching = (
    column: ITableColumn,
    row: IRoleGroupRule
  ): CustomCell | undefined => {
    if (column.field !== "role") {
      return {
        component: (
          <Checkbox
            field={column.field}
            checked={row.permissions.includes(column.field as RolePermissions)}
          />
        ),
      };
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
          scrollable={false}
          mobileVersion={false}
          cellSwap={handleCellSwitching}
          columns={columns}
          rows={grouprules}
        />
      </RoleInfoSection>
    </RoleInfoContainer>
  );
};
