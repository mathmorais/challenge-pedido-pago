import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect } from "react";

import { IDropdownItem } from "@interfaces/IDropdownItem";
import { CustomCell, TableList } from "../../layouts/TableList/TableList";
import { ITableColumn } from "@interfaces/ITableColumn";
import { OrganizationContext } from "../../../contexts/OrganizationContext";
import { Paragraphy, Small } from "../../layouts/Typography/Typography";
import { Avatar } from "../../layouts/Avatar/Avatar";
import { Paginator } from "../../buttons/Paginator/Paginator";
import { EyeIcon, TrashIcon } from "../../../utils/constants/icons";
import { Input } from "../../inputs/Input/Input";
import { PaginatorContextProvider } from "contexts/PaginatorContext";
import { Status } from "@components/layouts/Status/Status";
import { debounce } from "@utils/helpers/debounce";
import { AgentStatus } from "@interfaces/IAgent";
import { DropdownDesktop } from "@components/inputs/Dropdown/Dropdown.desktop";
import { DropdownMobile } from "@components/inputs/Dropdown/Dropdown.mobile";
import { RequestStates } from "enums/RequestStates";
import { Loading } from "@components/layouts/Loading/Loading";

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
  const { state, agents, handleFilterAgents } = useContext(OrganizationContext);
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
    </ColaboratorsTabContainer>
  );
};
