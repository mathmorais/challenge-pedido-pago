import { ChangeEvent, useContext, useEffect } from "react";

import { useRouter } from "next/router";

import styled from "@emotion/styled";
import { Paragraphy } from "../../layouts/Typography/Typography";
import { OrganizationContext } from "../../../contexts/OrganizationContext";
import { ITableColumn } from "../../../interfaces/ITableColumn";
import {
  DuplicateIcon,
  EditIcon,
  EyeIcon,
  TrashIcon,
} from "../../../utils/constants/icons";
import { IDropdownItem } from "../../../interfaces/IDropdownItem";
import { Input } from "../../inputs/Input/Input";
import { TableCell, TableList } from "../../layouts/TableList/TableList";
import { Dropdown } from "../../inputs/Dropdown/Dropdown";

const RolesContainer = styled.div`
  ${Paragraphy}:first-of-type {
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
      width: 196,
    },
    {
      field: "departament",
      headerName: "Departamento",
      width: 224,
    },
    {
      field: "agents_quantity",
      headerName: "Colaboradores",
    },
  ];

  const dropdownItems: IDropdownItem[] = [
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
    handleFilterRoles("");
    handleGetRoles();
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    handleFilterRoles(event.currentTarget.value);
  };

  return (
    <RolesContainer>
      <RoleSearchSection>
        <Input
          onChange={handleSearch}
          label="Pesquisar por"
          placeholder="Pesquise por cargos"
        />
      </RoleSearchSection>
      <Paragraphy>Listagem de colaboradores</Paragraphy>
      <TableList
        additionalCell={
          <TableCell alignRight>
            <Dropdown items={dropdownItems} />
          </TableCell>
        }
        rows={roles}
        columns={columns}
      />
    </RolesContainer>
  );
};
