import styled from "@emotion/styled";

import { ReactNode } from "react";
import { colors } from "../constants/colors";
import { IDropdownItem } from "../interfaces/IDropdownItem";
import { ITableColumn } from "../interfaces/ITableColumn";
import { Dropdown } from "./Dropdown";
import { Small, Span } from "./Typography";

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

const TableRow = styled.tr<{
  inactive: boolean;
}>`
  height: 68px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 1px solid transparent;
  border-bottom: 1px solid ${colors.neutral.neutral1};
  color: ${(props) => props.inactive && colors.neutral.neutral3};

  td:last-of-type {
    margin-left: auto;
  }

  div:last-child {
    margin-left: auto;
  }
`;

export const TableCell = styled.td<{
  width?: number;
  bold?: boolean;
}>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: ${(props) => props.width};
  gap: 8px;

  ${Span} {
    padding-right: 30.8px;
    font-weight: ${(props) => props.bold && "600"};
  }
`;

type TableListProps = {
  columns: ITableColumn[];
  rows: any[];
  rowIdField?: string;
  cellSwitching?: (
    column: ITableColumn,
    row: any[],
    index: number
  ) => JSX.Element;
  dropdownItems: IDropdownItem[];
  rowsPerPage?: number;
};

export const TableList: React.FC<TableListProps> = ({
  columns,
  rows = [],
  cellSwitching,
  rowIdField,
  dropdownItems,
  rowsPerPage = 10,
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
      const cells: Array<ReactNode> = [];
      columns.forEach((column, index) => {
        let cell = null;

        // switch (column.field) {
        //   case "name":
        //     cell = (
        //       <TableCell key={index} bold width={column.width}>
        //         {row.image && <Avatar src={row.image} />}
        //         <Span>{row[column.field]}</Span>
        //       </TableCell>
        //     );
        //     break;
        //   case "status":
        //     cell = (
        //       <TableCell key={index} width={column.width}>
        //         <ContributorStatus inactive={row[column.field] === "inactive"}>
        //           {row[column.field] === "active" ? "Ativo" : "Inativo"}
        //         </ContributorStatus>
        //       </TableCell>
        //     );
        //     break;
        //   default:
        //     cell = (
        //       <TableCell key={index} width={column.width}>
        //         <Span>{row[column.field]}</Span>
        //       </TableCell>
        //     );
        // }
        const handleSwitchCells = (): JSX.Element => {
          if (cellSwitching) {
            return cellSwitching(column, row, index);
          } else {
            return (
              <TableCell key={index} width={column.width}>
                <Span>{row[column.field]}</Span>
              </TableCell>
            );
          }
        };

        cell = handleSwitchCells();

        cells.push(cell);
      });
      return (
        <TableRow
          inactive={row.status === "inactive"}
          key={rowIdField ? row[rowIdField] : index}
        >
          {[...cells]}
          <TableCell key={index}>
            <Dropdown items={dropdownItems} />
          </TableCell>
        </TableRow>
      );
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
