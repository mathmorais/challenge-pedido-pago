import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../../../utils/constants/colors";
import { Button } from "../../buttons/Button/Button";
import { Span } from "../../layouts/Typography/Typography";
import { ChevronDownIcon, ChevronUpIcon } from "@utils/constants/icons";

type SelectWrapperStyles = {
  height?: string;
};

type SelectFieldsetStyles = {
  noBackground?: boolean;
};

const SelectWrapper = styled.div<SelectWrapperStyles>`
  display: flex;
  height: ${(props) => props.height || "56px"};
  position: relative;
  padding: 5px 0;
`;

const SelectBox = styled(Button)`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0 16px;
  z-index: 3;
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

const SelectFieldset = styled.fieldset<SelectFieldsetStyles>`
  position: absolute;
  inset: 0;
  border: 2px solid ${colors.neutral.neutral2};
  border-radius: 8px;
  background: ${(props) => !props.noBackground && colors.tertiary.default};
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

const SelectMenuItem = styled(Button)<{ selected: boolean }>`
  text-align: start;
  padding: 10px 16px;
  background: ${(props) => props.selected && colors.neutral.neutral2};

  &:hover {
    filter: opacity(0.8);
  }

  ${Span} {
    font-weight: 500;
    color: ${colors.neutral.neutral5};
  }
`;

type SelectProps = {
  value?: string;
  label?: string;
  items: { [key: string]: string };
} & SelectFieldsetStyles &
  SelectWrapperStyles;

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
      <SelectWrapper height={props.height}>
        <SelectBox
          onClick={() => {
            setActive(!active);
          }}
        >
          {active ? <ChevronDownIcon /> : <ChevronUpIcon />}
          <Span>{value && items[value]}</Span>
        </SelectBox>

        <SelectFieldset {...props}>
          {label && (
            <legend>
              <Span>{label}</Span>
            </legend>
          )}
        </SelectFieldset>
        {active && <SelectMenu>{handleSerializeMenuItems()}</SelectMenu>}
      </SelectWrapper>
    </div>
  );
};
