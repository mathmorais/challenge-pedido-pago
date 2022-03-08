import styled from "@emotion/styled";
import { ReactNode, useContext } from "react";

import { colors } from "../../../utils/constants/colors";
import { Small } from "../Typography/Typography";
import { PaginatorContext } from "contexts/PaginatorContext";
import { TableListProps } from "./TableList";
import { AgentStatus } from "@interfaces/IAgent";
import { typography } from "@utils/constants/typography";
import { ITableColumn } from "@interfaces/ITableColumn";

type TableRowStyles = {
  inactive?: boolean;
  cellSpacing?: number;
};

type TableSizingStyle = Pick<ITableColumn, "width" | "minWidth">;

export type TableCellStyles = {
  bold?: boolean;
  align?: "left";
} & TableSizingStyle;

export type TableListBodyStyle = {
  scrollable?: boolean;
};

type TableListColumnsStyle = {
  cellSpacing?: number;
} & TableSizingStyle;

const Table = styled.table`
  display: flex;
  flex-direction: column;

  th,
  td {
    text-align: start;
  }

  tr {
    padding: 16px;
  }
`;

const TableHead = styled.thead`
  width: 100%;

  border: 1px solid ${colors.neutral.neutral2};
  border-radius: 8px 8px 0px 0px;

  tr {
    display: flex;
    width: inherit;
  }
`;

const TableHeader = styled.th<TableListColumnsStyle>`
  font-size: ${typography.small.size};
  padding-left: ${(props) => props.cellSpacing}px;
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  ${Small} {
    font-weight: 600;
  }
`;

const TableBody = styled.tbody<TableListBodyStyle>`
  height: ${(props) => (props.scrollable ? "340px" : "100%")};
  overflow-y: ${(props) => (props.scrollable ? "scroll" : "hidden")};
`;

const TableRow = styled.tr<TableRowStyles>`
  height: 68px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 1px solid transparent;
  border-bottom: 1px solid ${colors.neutral.neutral1};
  color: ${(props) => props.inactive && colors.neutral.neutral3};
`;

export const TableCell = styled.td<TableCellStyles>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: ${(props) => props.width}px;
  margin-left: ${(props) => (props.align === "left" ? "auto" : "none")};
  padding-right: 5px;

  ${Small} {
    font-weight: ${(props) => props.bold && "600"};
  }
`;

export const TableListDesktop: React.FC<TableListProps & TableRowStyles> = ({
  columns = [],
  rows = [],
  ...props
}) => {
  const { offset = 0, limit = rows.length } = useContext(PaginatorContext);

  const handleSerializeHeaders = () => {
    return columns.map((column, index) => (
      <TableHeader
        width={column.width}
        minWidth={column.minWidth}
        key={index}
        {...props}
      >
        {column.headerName}
      </TableHeader>
    ));
  };

  const handleSerializeRows = () => {
    return rows.map((row, index) => {
      if (index >= offset) {
        const cells: Array<ReactNode> = [];

        if (index >= offset + limit) return;

        columns.forEach((column, index) => {
          let cell = null;

          const handleSwapCells = (): JSX.Element => {
            const swappedCell =
              props.cellSwap && props.cellSwap(column, row, index);

            return (
              <TableCell
                width={column.width}
                key={index}
                {...swappedCell?.options}
              >
                {swappedCell ? (
                  swappedCell?.component
                ) : (
                  <Small>{row[column.field]}</Small>
                )}
              </TableCell>
            );
          };

          cell = handleSwapCells();

          cells.push(cell);
        });
        return (
          <TableRow
            {...props}
            inactive={row.status === AgentStatus.Inactive}
            key={props.rowIdField ? row[props.rowIdField] : index}
          >
            {[...cells]}
            <TableCell
              {...props.additionalCells?.options}
              key={index}
              {...props}
            >
              {props.additionalCells?.component}
            </TableCell>
          </TableRow>
        );
      }
    });
  };

  return (
    <Table>
      <TableHead>
        <tr>{handleSerializeHeaders()}</tr>
      </TableHead>
      <TableBody scrollable={props.scrollable ?? true}>
        {rows.length > 0 ? (
          handleSerializeRows()
        ) : (
          <TableRow>
            <Small as="td">Nenhum dado encontrado</Small>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
