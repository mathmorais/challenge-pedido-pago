import styled from "@emotion/styled";
import { useState } from "react";
import { ButtonHelper } from "./ButtonHelper";
import { colors } from "../constants/colors";
import { shadows } from "../constants/shadows";
import { Span } from "./Typography";
import { IDropdownItem } from "../interfaces/IDropdownItem";
import MoreSVG from "../../public/svgs/more.svg";

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownContent = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  width: 340px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: ${shadows.level2};
  background: ${colors.neutral.white};
  z-index: 2;
`;

const DropdownItem = styled(ButtonHelper)<{ enabled: boolean }>`
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
    fill: ${(props) =>
      props.enabled ? colors.neutral.neutral3 : colors.neutral.neutral2};
  }

  ${Span} {
    font-weight: 500;
    color: ${(props) =>
      props.enabled ? colors.neutral.neutral5 : colors.neutral.neutral2};
  }
`;

type DropdownProps = {
  items: IDropdownItem[];
};

export const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [active, setActive] = useState<boolean>(false);

  const handleSerializeItems = () => {
    return items.map((item, index) => (
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
    <DropdownWrapper onBlur={() => setActive(false)}>
      <ButtonHelper onClick={() => setActive(!active)}>
        <MoreSVG />
      </ButtonHelper>
      {active && <DropdownContent>{handleSerializeItems()}</DropdownContent>}
    </DropdownWrapper>
  );
};
