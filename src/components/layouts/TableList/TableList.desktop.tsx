import styled from "@emotion/styled";
import { ReactNode, useContext } from "react";

import { colors } from "../../../utils/constants/colors";
import { Small } from "../Typography/Typography";
import { PaginatorContext } from "contexts/PaginatorContext";
import { TableListProps } from "./TableList";
import { AgentStatus } from "@interfaces/IAgent";

type TableRowStyles = {
  inactive?: boolean;
  cellSpacing?: number;
};

type TableCellStyles = {
  width?: string | number;
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
  width: 100%;

  border: 1px solid ${colors.neutral.neutral2};
  border-radius: 8px 8px 0px 0px;

  tr {
    display: flex;
    width: inherit;
  }
`;

type TableListColumnsStyle = {
  cellSpacing?: number;
  width?: string | number;
};

const TableHeader = styled.th<TableListColumnsStyle>`
  padding-right: ${(props) => props.cellSpacing}px;
  width: ${(props) => props.width};
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
  align-items: center;
  min-width: ${(props) => props.width}px;
  margin-left: ${(props) => props.alignRight && "auto"};
  gap: 8px;

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
      <TableHeader width={column.width} key={index} {...props}>
        <Small>{column.headerName}</Small>
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
            const swappedCellContent =
              props.cellSwap && props.cellSwap(column, row, index);

            return (
              <TableCell width={column.width} key={index} {...props}>
                {swappedCellContent ? (
                  swappedCellContent
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
            <TableCell key={index} {...props}>
              {props.additionalCell}
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
      <tbody>{handleSerializeRows()}</tbody>
    </Table>
  );
};
