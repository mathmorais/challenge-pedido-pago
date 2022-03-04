import styled from "@emotion/styled";
import React, { ReactNode, useContext, useState } from "react";

import { PaginatorContext } from "contexts/PaginatorContext";
import { TableListCardMobile } from "../TableListCard/TableListCard.mobile";
import { DropdownContext } from "contexts/DropdownContext";
import { Status } from "../Status/Status";
import { Small } from "../Typography/Typography";
import { TableListProps } from "./TableList";

const TableListMobileContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const TableListMobile: React.FC<TableListProps> = ({
  columns = [],
  rows = [],
  mobile,
  ...props
}) => {
  const { limit = rows.length } = useContext(PaginatorContext);
  const { setItems } = useContext(DropdownContext);
  const [selectedCard, setSelectedCard] = useState<number>();

  const handleSerializeRows = () => {
    return rows.map((row, index) => {
      if (index >= limit) return;

      const data: { field: string; value: string; component?: ReactNode }[] =
        [];

      columns.forEach((column) => {
        const rowValue = row[column.field];
        let component = undefined;

        if (column.field === "status") component = <Status status={rowValue} />;

        data.push({ field: column.headerName, value: rowValue, component });
      });

      return (
        <TableListCardMobile
          key={row[props.rowIdField ?? "id"] ?? index}
          header={data[0]}
          content={data.slice(1)}
          expanded={selectedCard === index}
          onClick={() =>
            selectedCard === index
              ? setSelectedCard(undefined)
              : setSelectedCard(index)
          }
          onActionClick={() => setItems(mobile?.drodpdownItems)}
        />
      );
    });
  };

  return (
    <TableListMobileContainer>
      {rows.length > 0 ? (
        handleSerializeRows()
      ) : (
        <Small>Nenhum dado encontrado</Small>
      )}
    </TableListMobileContainer>
  );
};
