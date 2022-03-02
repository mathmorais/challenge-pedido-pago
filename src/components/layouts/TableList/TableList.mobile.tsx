import styled from "@emotion/styled";
import {
  memo,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { PaginatorContext } from "contexts/PaginatorContext";
import { TableListCardMobile } from "../TableListCard/TableListCard.mobile";
import { DropdownContext } from "contexts/DropdownContext";
import { TableListProps } from "./TableList";

const TableListMobileContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

const TableListMobileView: React.FC<TableListProps> = ({
  columns = [],
  rows = [],
  dropdown,
  ...props
}) => {
  const { limit = rows.length } = useContext(PaginatorContext);
  const { setItems } = useContext(DropdownContext);

  const handleSerializeRows = () => {
    return rows.map((row, index) => {
      if (index <= limit) {
        const data: { field: string; value: string }[] = [];

        columns.forEach((column) => {
          data.push({ field: column.headerName, value: row[column.field] });
        });

        return (
          <TableListCardMobile
            key={index}
            header={data[0]}
            content={data.slice(1)}
            onActionClick={() => setItems(dropdown?.items)}
          />
        );
      }
    });
  };

  return (
    <TableListMobileContainer>{handleSerializeRows()}</TableListMobileContainer>
  );
};

export const TableListMobile = memo(TableListMobileView);
