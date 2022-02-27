import { IDropdownItem } from "../../interfaces/IDropdownItem";
import { TableList } from "../TableList";
import { ITableColumn } from "../../interfaces/ITableColumn";
import { useContext, useEffect } from "react";
import { OrganizationContext } from "../../context/OrganizationContext";
import { TabPage } from "../TabPage";
import EyeSVG from "../../../public/svgs/eye.svg";
import TrashSVG from "../../../public/svgs/trash.svg";
import DuplicateSVG from "../../../public/svgs/duplicate.svg";
import EditSVG from "../../../public/svgs/edit.svg";
import { useRouter } from "next/router";

export const RolesTab: React.FC = () => {
  const router = useRouter();
  const { roles, handleGetRoles } = useContext(OrganizationContext);
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

  const items: IDropdownItem[] = [
    {
      enabled: true,
      label: "Ver colaborador",
      icon: <EyeSVG />,
      action: () => router.push("/colaborator/1"),
    },
    {
      label: "Editar",
      icon: <EditSVG />,
      action: () => null,
    },
    {
      label: "Duplicar",
      icon: <DuplicateSVG />,
      action: () => null,
    },
    {
      label: "Excluir",
      icon: <TrashSVG />,
      action: () => null,
    },
  ];

  useEffect(() => {
    handleGetRoles();
  }, []);

  return (
    <TabPage title="Listagem de cargos">
      <TableList dropdownItems={items} rows={roles} columns={columns} />
    </TabPage>
  );
};
