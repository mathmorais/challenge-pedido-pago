import styled from "@emotion/styled";
import { memo, ReactNode } from "react";

import { colors } from "../../../utils/constants/colors";
import { ITableColumn } from "../../../interfaces/ITableColumn";
import { Small, Span } from "../Typography/Typography";

type TableRowStyles = {
  inactive?: boolean;
};

type TableCellStyles = {
  width?: number;
  bold?: boolean;
  alignRight?: boolean;
};

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
  border: 1px solid ${colors.neutral.neutral2};
  border-radius: 8px 8px 0px 0px;
  padding: 16px;
`;

const TableHeader = styled.th<{ width?: number }>`
  display: inline-block;
  width: ${(props) => props.width}px;

  ${Small} {
    font-weight: 600;
  }
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
  flex-direction: row;
  align-items: center;
  width: ${(props) => props.width};
  gap: 8px;
  margin-left: ${(props) => props.alignRight && "auto"};

  ${Small} {
    padding-right: 30.8px;
    font-weight: ${(props) => props.bold && "600"};
  }
`;

type TableListProps = {
  columns: ITableColumn[];
  rows: any[];
  rowIdField?: string;
  cellSwap?: (
    column: ITableColumn,
    row: any[],
    index: number
  ) => JSX.Element | undefined;
  additionalCell?: JSX.Element | JSX.Element[];
  limit?: number;
  offset?: number;
} & TableRowStyles;

const TableListView: React.FC<TableListProps> = ({
  columns = [],
  rows = [],
  limit = rows.length,
  offset = 0,
  ...props
}) => {
  const handleSerializeHeaders = () => {
    return columns.map((column, index) => (
      <TableHeader width={column.width} key={index}>
        <Small>{column.headerName}</Small>
      </TableHeader>
    ));
  };

  const handleSerializeRows = () => {
    return rows.map((row, index) => {
      if (index < limit) {
        const cells: Array<ReactNode> = [];
        columns.forEach((column, index) => {
          let cell = null;

          const handleSwapCells = (): JSX.Element => {
            const swappedCell =
              props.cellSwap && props.cellSwap(column, row, index);

            if (swappedCell) return swappedCell;

            return (
              <TableCell key={index} width={column.width}>
                <Small>{row[column.field]}</Small>
              </TableCell>
            );
          };

          cell = handleSwapCells();

          cells.push(cell);
        });
        return (
          <TableRow
            {...props}
            inactive={row.status === "inactive"}
            key={props.rowIdField ? row[props.rowIdField] : index}
          >
            {[...cells]}
            {props.additionalCell}
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
      <tbody>{handleSerializeRows()}</tbody>
    </Table>
  );
};

export const TableList = memo(TableListView);
