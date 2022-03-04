import { IDropdownItem } from "@interfaces/IDropdownItem";
import { ITableColumn } from "@interfaces/ITableColumn";
import { PlataformContext } from "contexts/PlataformContext";
import { useContext } from "react";
import { TableCellStyles, TableListDesktop } from "./TableList.desktop";
import { TableListMobile } from "./TableList.mobile";

type CustomCell = {
  options?: TableCellStyles;
  component: JSX.Element;
};

export type TableListProps = {
  columns: ITableColumn[];
  rows: any[];
  rowIdField?: string;
  cellSwap?: (
    column: ITableColumn,
    row: any,
    index: number
  ) => JSX.Element | undefined;
  additionalCells?: CustomCell;
  mobile?: {
    drodpdownItems: IDropdownItem[];
  };
};

export const TableList: React.FC<
  { mobileVersion?: boolean } & TableListProps
> = ({ mobileVersion = true, ...props }) => {
  const { isMobile } = useContext(PlataformContext);

  if (isMobile && mobileVersion) {
    return <TableListMobile {...props} />;
  } else {
    return <TableListDesktop {...props} />;
  }
};
