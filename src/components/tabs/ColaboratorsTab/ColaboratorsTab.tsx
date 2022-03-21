import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useContext } from "react";
import { IDropdownItem } from "@interfaces/IDropdownItem";
import { ITableColumn } from "@interfaces/ITableColumn";

import { PaginatorContextProvider } from "contexts/PaginatorContext";
import { Status } from "@components/layouts/Status/Status";
import { AgentStatus } from "@interfaces/IAgent";
import { DropdownDesktop } from "@components/inputs/Dropdown/Dropdown.desktop";
import { DropdownMobile } from "@components/inputs/Dropdown/Dropdown.mobile";
import { RequestStates } from "enums/RequestStates";
import { Loading } from "@components/layouts/Loading/Loading";
import { OrganizationTabTemplate } from "@components/templates/OrganizationTabTemplate/OrganizationTabTemplate";
import { OrganizationContext } from "@contexts/OrganizationContext";
import { EyeIcon, TrashIcon } from "@utils/constants/icons";
import { CustomCell, TableList } from "@components/layouts/TableList/TableList";
import { Small } from "@components/layouts/Typography/Typography";
import { Avatar } from "@components/layouts/Avatar/Avatar";
import { Paginator } from "@components/buttons/Paginator/Paginator";

export const ColaboratorsTab: React.FC = () => {
  const { state, agents, handleFilterData } = useContext(OrganizationContext);
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

  const handleCellSwitching = (column: ITableColumn, row: any) => {
    const customCells: { [columnField: string]: CustomCell } = {
      name: {
        component: (
          <>
            {row.image && <Avatar src={row.image} />}
            <Small>{row[column.field]}</Small>
          </>
        ),
        options: { bold: true },
      },
      status: {
        component: (
          <Status status={row[column.field]}>
            {row[column.field] === AgentStatus.Active ? "Ativo" : "Inativo"}
          </Status>
        ),
      },
    };

    return customCells[column.field];
  };

  return (
    <OrganizationTabTemplate
      type="agents"
      input={{
        label: "Pesquisar por",
        placeholder: "pesquise por nome ou cpf",
      }}
      title="Listagem de colaboradores"
    >
      {state === RequestStates.completed || state === RequestStates.empty ? (
        <PaginatorContextProvider>
          <TableList
            scrollable
            rowIdField={"agent_id"}
            rows={agents}
            columns={columns}
            cellSwap={handleCellSwitching}
            mobile={{
              drodpdownItems: items,
            }}
            additionalCells={{
              component: <DropdownDesktop items={items} />,
              options: {
                align: "left",
              },
            }}
          />
          <DropdownMobile />
          <Paginator totalItems={agents.length} labelCount limitSelector />
        </PaginatorContextProvider>
      ) : (
        <Loading />
      )}
    </OrganizationTabTemplate>
  );
};
