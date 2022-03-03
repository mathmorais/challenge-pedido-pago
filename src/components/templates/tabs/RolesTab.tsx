import { ChangeEvent, useCallback, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import { Paragraphy } from "@components/layouts/Typography/Typography";
import { OrganizationContext } from "@contexts/OrganizationContext";
import { ITableColumn } from "@interfaces/ITableColumn";
import {
  DuplicateIcon,
  EditIcon,
  EyeIcon,
  TrashIcon,
} from "@utils/constants/icons";
import { IDropdownItem } from "@interfaces/IDropdownItem";
import { Input } from "@components/inputs/Input/Input";
import { TableList } from "@components/layouts/TableList/TableList";
import { Dropdown } from "@components/inputs/Dropdown/Dropdown";
import { PaginatorContextProvider } from "contexts/PaginatorContext";
import { Paginator } from "@components/buttons/Paginator/Paginator";
import { TableCell } from "@components/layouts/TableList/TableList.desktop";
import { debounce } from "@utils/helpers/debounce";
import { DropdownMobile } from "@components/inputs/Dropdown/Dropdown.mobile";

const RolesContainer = styled.div`
  & > ${Paragraphy} {
    margin: 40px 0;
    font-weight: 600;
  }
`;

const RoleSearchSection = styled.section`
  margin: 40px 0;
`;

export const RolesTab: React.FC = () => {
  const router = useRouter();
  const { roles, handleGetRoles, handleFilterRoles } =
    useContext(OrganizationContext);

  const columns: ITableColumn[] = [
    {
      field: "name",
      headerName: "Cargo",
      width: "100%",
    },
    {
      field: "departament",
      headerName: "Departamento",
      width: "100%",
    },
    {
      field: "agents_quantity",
      headerName: "Colaboradores",
      width: "100%",
      spacing: 200,
    },
  ];

  const items: IDropdownItem[] = [
    {
      enabled: true,
      label: "Ver cargo",
      icon: <EyeIcon />,
      action: () => router.push("/role/1"),
    },
    {
      label: "Editar",
      icon: <EditIcon />,
      action: () => null,
    },
    {
      label: "Duplicar",
      icon: <DuplicateIcon />,
      action: () => null,
    },
    {
      label: "Excluir",
      icon: <TrashIcon />,
      action: () => null,
    },
  ];

  useEffect(() => {
    handleGetRoles();
    handleFilterRoles("");
  }, []);

  const handleOnChange = useCallback(debounce(handleFilterRoles), []);

  return (
    <RolesContainer>
      <RoleSearchSection>
        <Input
          onChange={(event) => handleOnChange(event.currentTarget.value)}
          label="Pesquisar por"
          placeholder="Pesquise por cargos"
        />
      </RoleSearchSection>
      <Paragraphy>Listagem de cargos</Paragraphy>
      <PaginatorContextProvider>
        <TableList
          withDropdown={{
            items,
          }}
          additionalCell={
            <TableCell alignRight>
              <Dropdown />
            </TableCell>
          }
          rows={roles}
          columns={columns}
        />
        <Paginator
          labelCount={false}
          limitSelector={false}
          totalItems={roles.length}
        />
      </PaginatorContextProvider>
    </RolesContainer>
  );
};
