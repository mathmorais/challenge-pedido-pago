import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { FormEvent, useContext, useEffect } from "react";

import { IDropdownItem } from "../../../interfaces/IDropdownItem";
import { TableCell, TableList } from "../../layouts/TableList/TableList";
import { ITableColumn } from "../../../interfaces/ITableColumn";
import { OrganizationContext } from "../../../contexts/OrganizationContext";
import { Paragraphy, Small, Span } from "../../layouts/Typography/Typography";
import { colors } from "../../../utils/constants/colors";
import { Avatar } from "../../layouts/Avatar/Avatar";
import { Dropdown } from "../../inputs/Dropdown/Dropdown";
import { Paginator } from "../../buttons/Paginator/Paginator";
import { EyeIcon, TrashIcon } from "../../../utils/constants/icons";
import { Input } from "../../inputs/Input/Input";

const ColaboratorsTabContainer = styled.div`
  & > ${Paragraphy} {
    margin: 40px 0;
    font-weight: 600;
  }
`;

const ColaboratorsSearchSection = styled.section`
  margin: 40px 0;
`;

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
  const { agents, handleFilterAgents } = useContext(OrganizationContext);
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
      icon: <EyeIcon />,
      action: () => router.push("/colaborator/1"),
    },
    {
      label: "Excluir",
      icon: <TrashIcon />,
      action: () => null,
    },
  ];

  const handleCellSwitching = (
    column: ITableColumn,
    row: any,
    index: number
  ) => {
    const customCells: { [columnField: string]: JSX.Element } = {
      name: (
        <TableCell key={index} bold width={column.width}>
          {row.image && <Avatar src={row.image} />}
          <Small>{row[column.field]}</Small>
        </TableCell>
      ),
      status: (
        <TableCell key={index} width={column.width}>
          <ColaboratorStatus inactive={row[column.field] === "inactive"}>
            {row[column.field] === "active" ? "Ativo" : "Inativo"}
          </ColaboratorStatus>
        </TableCell>
      ),
    };

    return customCells[column.field];
  };

  const handleSearching = (event: FormEvent<HTMLInputElement>) => {
    handleFilterAgents(event.currentTarget.value);
  };

  useEffect(() => {
    handleFilterAgents("");
  }, []);

  return (
    <ColaboratorsTabContainer>
      <ColaboratorsSearchSection>
        <Input
          onChange={handleSearching}
          label="Pesquisar por"
          placeholder="Pesquise por nome ou cpf"
        />
      </ColaboratorsSearchSection>
      <Paragraphy>Listagem de colaboradores</Paragraphy>
      <TableList
        limit={6}
        rows={agents}
        columns={columns}
        cellSwap={handleCellSwitching}
        additionalCell={
          <TableCell alignRight>
            <Dropdown items={items} />
          </TableCell>
        }
      />
      <Paginator itemsLength={agents.length} limit={5} />
    </ColaboratorsTabContainer>
  );
};
