import { ButtonActionMobile } from "@components/buttons/Button/variations/ButtonAction.mobile";
import { Dropdown } from "@components/inputs/Dropdown/Dropdown";
import styled from "@emotion/styled";
import { colors } from "@utils/constants/colors";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  FilePlusIcon,
} from "@utils/constants/icons";
import { DropdownContext } from "contexts/DropdownContext";
import { memo, useContext, useState } from "react";
import { Small } from "../Typography/Typography";

const TableMobileCard = styled.li<{ expanded?: boolean }>`
  position: relative;
  border: 2px solid
    ${(props) =>
      props.expanded ? colors.primary.disabled : colors.neutral.neutral1};
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin: 4px 0;
  cursor: pointer;
  gap: 24px;
`;

const TableMobileReturnWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const TableMobileCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: ${colors.neutral.neutral5};
`;

const TableMobileCardContent = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 16px;
`;

const TableMobileCardData = styled(TableMobileCardHeader)`
  display: flex;
  flex-direction: column;
  padding-right: 26px;
  flex-shrink: 0;
  gap: 2px;
`;

export const TableListCardMobile: React.FC<{
  header: { field: string; value: string };
  content: { field: string; value: string }[];
  onActionClick?: () => void;
}> = ({ header, content, onActionClick }) => {
  const [expanded, setExpanded] = useState(false);
  const [shouldExpand, setShouldExpand] = useState(true);

  const handleSerializeContent = () => {
    return content.map(({ field, value }, index) => (
      <TableMobileCardData key={index}>
        <Small>
          <strong>{field}</strong>
        </Small>
        <Small>{value}</Small>
      </TableMobileCardData>
    ));
  };

  return (
    <TableMobileCard
      role={"button"}
      aria-pressed={expanded}
      tabIndex={0}
      expanded={expanded}
      onClick={() => shouldExpand && setExpanded(!expanded)}
    >
      <TableMobileReturnWrapper>
        {expanded ? <ChevronDownIcon /> : <ChevronUpIcon />}
      </TableMobileReturnWrapper>
      <TableMobileCardHeader>
        <Small>
          <strong>{header.field}</strong>
        </Small>
        <Small>{header.value}</Small>
      </TableMobileCardHeader>
      {expanded && (
        <>
          <TableMobileCardContent aria-label="Abrir ações">
            {handleSerializeContent()}
          </TableMobileCardContent>
          <ButtonActionMobile
            onMouseDown={() => {
              setShouldExpand(false);
              onActionClick && onActionClick();
            }}
            onBlur={() => setShouldExpand(true)}
            icon={<FilePlusIcon />}
          >
            Ações
          </ButtonActionMobile>
        </>
      )}
    </TableMobileCard>
  );
};
