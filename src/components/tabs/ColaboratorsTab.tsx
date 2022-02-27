import { useRouter } from "next/router";
import { useContext } from "react";
import styled from "@emotion/styled";

import { IDropdownItem } from "../../interfaces/IDropdownItem";
import { TableCell, TableList } from "../TableList";
import { ITableColumn } from "../../interfaces/ITableColumn";
import TrashSVG from "../../../public/svgs/trash.svg";
import { OrganizationContext } from "../../context/OrganizationContext";
import { TabPage } from "../TabPage";
import EyeSVG from "../../../public/svgs/eye.svg";
import { Span } from "../Typography";
import { colors } from "../../constants/colors";
import { Avatar } from "../Avatar";

const ColaboratorStatus = styled(Span)<{
  inactive: boolean;
}>`
  min-width: 72px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 80px;
  background: ${(props) =>
    props.inactive ? colors.tertiary.disabled : colors.feedbackColors.success};
  font-weight: 500;
`;

export const ColaboratorsTab: React.FC = () => {
  const { agents } = useContext(OrganizationContext);
  const router = useRouter();
  const columns: ITableColumn[] = [
    {
      field: "name",
      headerName: "Nome completo",
      width: 196,
    },
    {
      field: "department",
      headerName: "Departamento",
      width: 124,
    },
    {
      field: "role",
      headerName: "Cargo",
      width: 96,
    },
    {
      field: "branch",
      headerName: "Unidade",
      width: 182,
    },
    {
      field: "status",
      headerName: "Status",
      width: 182,
    },
  ];

  const items: IDropdownItem[] = [
    {
      enabled: true,
      label: "Ver colaborador",
      icon: <EyeSVG />,
      action: () => router.push("/colaborator/1"),
    },
    {
      label: "Excluir",
      icon: <TrashSVG />,
      action: () => null,
    },
  ];

  const handleCustomCells = (column: ITableColumn, row: any, index: number) => {
    switch (column.field) {
      case "name":
        return (
          <TableCell key={index} bold width={column.width}>
            {row.image && <Avatar src={row.image} />}
            <Span>{row[column.field]}</Span>
          </TableCell>
        );
      case "status":
        return (
          <TableCell key={index} width={column.width}>
            <ColaboratorStatus inactive={row[column.field] === "inactive"}>
              {row[column.field] === "active" ? "Ativo" : "Inativo"}
            </ColaboratorStatus>
          </TableCell>
        );
      default:
        return (
          <TableCell key={index} width={column.width}>
            <Span>{row[column.field]}</Span>
          </TableCell>
        );
    }
  };

  return (
    <TabPage title="Listagem de colaboradores">
      <TableList
        dropdownItems={items}
        rows={agents}
        rowIdField="agent_id"
        columns={columns}
        cellSwitching={handleCustomCells}
      />
    </TabPage>
  );
};
