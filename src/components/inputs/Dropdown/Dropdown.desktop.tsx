import styled from "@emotion/styled";
import { useState } from "react";
import { css } from "@emotion/react";
import { colors } from "@utils/constants/colors";
import { Span } from "@components/layouts/Typography/Typography";
import { shadows } from "@utils/constants/shadows";
import { Button } from "@components/buttons/Button/Button";
import { DropdownProps } from "./Dropdown";
import { MoreIcon } from "@utils/constants/icons";

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownContent = styled.div`
  position: absolute;
  right: 0px;
  top: 30px;
  display: flex;
  flex-direction: column;

  width: 340px;
  transform: translate(150, 50, 0);
  padding: 8px;
  border-radius: 8px;
  box-shadow: ${shadows.level2};
  background: ${colors.neutral.white};
  z-index: 2;
`;

const DisabledDropdownItem = css`
  cursor: not-allowed;

  svg path {
    fill: ${colors.neutral.neutral2};
  }

  ${Span} {
    color: ${colors.neutral.neutral2};
  }
`;

const DropdownItem = styled(Button)<{ enabled: boolean }>`
  width: 100%;
  display: inline-flex;
  gap: 16px;
  padding: 17px;

  &:hover {
    background: ${colors.neutral.neutral1};
  }

  svg {
    z-index: 0;
  }

  svg path {
    fill: ${colors.neutral.neutral3};
  }

  ${Span} {
    font-weight: 500;
    color: ${colors.neutral.neutral5};
  }

  ${(props) => !props.enabled && DisabledDropdownItem};
`;

export const DropdownDesktop: React.FC<Omit<DropdownProps, "mobile">> = ({
  items,
}) => {
  const [active, setActive] = useState<boolean>(false);

  const handleSerializeItems = () => {
    return items?.map((item, index) => (
      <DropdownItem
        enabled={item.enabled ?? false}
        key={index}
        onMouseDown={item.action}
      >
        {item.icon}
        <Span>{item.label}</Span>
      </DropdownItem>
    ));
  };

  return (
    <DropdownWrapper>
      <Button
        onBlur={() => setActive(false)}
        onClick={() => setActive(!active)}
      >
        <MoreIcon />
      </Button>
      {active && <DropdownContent>{handleSerializeItems()}</DropdownContent>}
    </DropdownWrapper>
  );
};
