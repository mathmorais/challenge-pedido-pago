import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../constants/colors";
import { ButtonHelper } from "./ButtonHelper";
import { Span } from "./Typography";
import ChevronUpSVG from "../../public/svgs/chevron-up.svg";
import ChevronDownSVG from "../../public/svgs/chevron-down.svg";

const SelectWrapper = styled.div`
  display: flex;
  height: 56px;
  position: relative;
`;

const SelectBox = styled(ButtonHelper)`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 16px;
  z-index: 3;
  inset: 5px 0 0 0;
  cursor: pointer;

  svg {
    position: absolute;
    right: 16px;
  }

  ${Span} {
    color: ${colors.neutral.neutral5};
    font-weight: 500;
  }
`;

const SelectFieldSet = styled.fieldset`
  position: absolute;
  inset: -5px 0 0 0;
  border: 2px solid ${colors.neutral.neutral2};
  border-radius: 8px;
  background: ${colors.tertiary.default};
  padding: 0 10px;

  ${Span} {
    padding: 0 4px;
    font-weight: 500;
    color: ${colors.neutral.neutral3};
  }
`;

const SelectMenu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 0;
  transform: translateY(55px);
  background: ${colors.neutral.neutral1};
  border-radius: 8px;
  padding: 8px;
  z-index: 10;
  overflow: hidden;
`;

const SelectMenuItem = styled(ButtonHelper)<{ selected: boolean }>`
  height: 58px;
  text-align: start;
  padding: 0 16px;
  background: ${(props) => props.selected && colors.neutral.neutral2};

  &:hover {
    filter: opacity(0.8);
  }

  ${Span} {
    font-weight: 500;
    color: ${colors.neutral.neutral5};
  }
`;

// type MenuItem = {
//   label: string;
//   value: any;
// };

type SelectProps = {
  value?: string;
  label: string;
  items: { [key: string]: string };
};

export const Select: React.FC<SelectProps> = ({ label, items, ...props }) => {
  const [value, setValue] = useState<string | undefined>(props.value);
  const [active, setActive] = useState<boolean>(false);

  const handleSerializeMenuItems = () => {
    return Object.keys(items).map((item, index) => (
      <SelectMenuItem
        key={index}
        selected={item === value}
        onMouseDown={() => setValue(item)}
      >
        <Span>{items[item]}</Span>
      </SelectMenuItem>
    ));
  };

  return (
    <div onBlur={() => setActive(false)}>
      <SelectWrapper>
        <SelectBox
          onClick={() => {
            setActive(!active);
          }}
        >
          {active ? <ChevronDownSVG /> : <ChevronUpSVG />}
          <Span>{value && items[value]}</Span>
        </SelectBox>
        <SelectFieldSet>
          <legend>
            <Span>{label}</Span>
          </legend>
        </SelectFieldSet>
        {active && <SelectMenu>{handleSerializeMenuItems()}</SelectMenu>}
      </SelectWrapper>
    </div>
  );
};
