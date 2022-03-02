import { IDropdownItem } from "@interfaces/IDropdownItem";
import { ITableColumn } from "@interfaces/ITableColumn";
import { PlataformContext } from "contexts/PlataformContext";
import { useContext } from "react";
import { TableListDesktop } from "./TableList.desktop";
import { TableListMobile } from "./TableList.mobile";

export type TableListProps = {
  columns: ITableColumn[];
  rows: any[];
  rowIdField?: string;
  cellSwap?: (
    column: ITableColumn,
    row: any[],
    index: number
  ) => JSX.Element | undefined;
  additionalCell?: JSX.Element | JSX.Element[];
  dropdown?: {
    items: IDropdownItem[];
  };
};

export const TableList: React.FC<TableListProps> = (props) => {
  const { isMobile } = useContext(PlataformContext);

  if (isMobile) {
    return <TableListMobile {...props} />;
  } else {
    return <TableListDesktop {...props} />;
  }
};
