import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect } from "react";

import { IDropdownItem } from "@interfaces/IDropdownItem";
import { TableList } from "../../layouts/TableList/TableList";
import { ITableColumn } from "@interfaces/ITableColumn";
import { OrganizationContext } from "../../../contexts/OrganizationContext";
import { Paragraphy, Small } from "../../layouts/Typography/Typography";
import { Avatar } from "../../layouts/Avatar/Avatar";
import { Paginator } from "../../buttons/Paginator/Paginator";
import { EyeIcon, TrashIcon } from "../../../utils/constants/icons";
import { Input } from "../../inputs/Input/Input";
import { PaginatorContextProvider } from "contexts/PaginatorContext";
import { TableCell } from "@components/layouts/TableList/TableList.desktop";
import { Status } from "@components/layouts/Status/Status";
import { debounce } from "@utils/helpers/debounce";
import { AgentStatus } from "@interfaces/IAgent";
import { Dropdown } from "@components/inputs/Dropdown/Dropdown";

const ColaboratorsTabContainer = styled.div`
  & > ${Paragraphy} {
    margin: 40px 0;
    font-weight: 600;
  }
`;

const ColaboratorsSearchSection = styled.section`
  margin: 40px 0;
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
        <>
          {row.image && <Avatar src={row.image} />}
          <Small>{row[column.field]}</Small>
        </>
      ),
      status: (
        <TableCell key={index} width={column.width}>
          <Status status={row[column.field]}>
            {row[column.field] === AgentStatus.Active ? "Ativo" : "Inativo"}
          </Status>
        </TableCell>
      ),
    };

    return customCells[column.field];
  };

  const handleInputSearch = useCallback(debounce(handleFilterAgents), []);

  useEffect(() => {
    handleFilterAgents("");
  }, []);

  return (
    <ColaboratorsTabContainer>
      <ColaboratorsSearchSection>
        <Input
          onChange={(event) => handleInputSearch(event.currentTarget.value)}
          label="Pesquisa por"
          placeholder="Pesquise por nome ou cpf"
        />
      </ColaboratorsSearchSection>
      <Paragraphy>Listagem de colaboradores</Paragraphy>
      <PaginatorContextProvider>
        <TableList
          cellSpacing={30.8}
          rows={agents}
          columns={columns}
          withDropdown={{
            items: items,
          }}
          cellSwap={handleCellSwitching}
          additionalCell={<Dropdown items={items} />}
        />

        <Paginator totalItems={agents.length} labelCount limitSelector />
      </PaginatorContextProvider>
    </ColaboratorsTabContainer>
  );
};
