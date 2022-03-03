import styled from "@emotion/styled";
import React, {
  memo,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { PaginatorContext } from "contexts/PaginatorContext";
import { TableListCardMobile } from "../TableListCard/TableListCard.mobile";
import { DropdownContext } from "contexts/DropdownContext";
import { TableListProps } from "./TableList";
import { Status } from "../Status/Status";

const TableListMobileContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

const TableListMobileView: React.FC<TableListProps> = ({
  columns = [],
  rows = [],
  withDropdown,
  ...props
}) => {
  const { limit = rows.length } = useContext(PaginatorContext);
  const { setItems } = useContext(DropdownContext);
  const [selectedCard, setSelectedCard] = useState<number>();

  const handleSerializeRows = (rowSet: typeof rows) => {
    return rowSet.map((row, index) => {
      if (index <= limit) {
        const data: { field: string; value: string; component?: ReactNode }[] =
          [];

        columns.forEach((column) => {
          const rowValue = row[column.field];
          let component = undefined;

          if (column.field === "status")
            component = <Status status={rowValue} />;

          data.push({ field: column.headerName, value: rowValue, component });
        });

        return (
          <TableListCardMobile
            key={index}
            header={data[0]}
            content={data.slice(1)}
            expanded={selectedCard === index}
            onClick={() => setSelectedCard(index)}
            onActionClick={() => setItems(withDropdown?.items)}
          />
        );
      }
    });
  };

  return (
    <TableListMobileContainer>
      {handleSerializeRows(rows)}
    </TableListMobileContainer>
  );
};

export const TableListMobile = TableListMobileView;
