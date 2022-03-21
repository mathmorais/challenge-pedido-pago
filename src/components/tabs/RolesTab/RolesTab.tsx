import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { OrganizationContext } from "@contexts/OrganizationContext";
import { ITableColumn } from "@interfaces/ITableColumn";
import {
  DuplicateIcon,
  EditIcon,
  EyeIcon,
  TrashIcon,
} from "@utils/constants/icons";
import { IDropdownItem } from "@interfaces/IDropdownItem";
import { TableList } from "@components/layouts/TableList/TableList";
import { PaginatorContextProvider } from "contexts/PaginatorContext";
import { Paginator } from "@components/buttons/Paginator/Paginator";
import { DropdownMobile } from "@components/inputs/Dropdown/Dropdown.mobile";
import { DropdownDesktop } from "@components/inputs/Dropdown/Dropdown.desktop";
import { RequestStates } from "enums/RequestStates";
import { Loading } from "@components/layouts/Loading/Loading";
import { OrganizationTabTemplate } from "@components/templates/OrganizationTabTemplate/OrganizationTabTemplate";

export const RolesTab: React.FC = () => {
  const router = useRouter();
  const { state, roles, handleGetData } = useContext(OrganizationContext);

  const columns: ITableColumn[] = [
    {
      field: "name",
      headerName: "Cargo",
      width: "200px",
    },
    {
      field: "departament",
      headerName: "Departamento",
      width: "200px",
    },
    {
      field: "agents_quantity",
      headerName: "Colaboradores",
      width: "200px",
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
    handleGetData("roles");
  }, []);

  return (
    <OrganizationTabTemplate
      type="roles"
      input={{
        label: "Pesquisar por",
        placeholder: "Pesquise por cargos",
      }}
      title="Listagem de cargos"
    >
      {state === RequestStates.loading ? (
        <Loading />
      ) : (
        <PaginatorContextProvider>
          <TableList
            rows={roles}
            columns={columns}
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
          <Paginator
            labelCount={false}
            limitSelector={false}
            totalItems={roles?.length}
          />
          <DropdownMobile />
        </PaginatorContextProvider>
      )}
    </OrganizationTabTemplate>
  );
};
