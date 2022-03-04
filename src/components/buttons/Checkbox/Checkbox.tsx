import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { memo, useEffect, useState } from "react";
import { colors } from "@utils/constants/colors";
import { CheckIcon } from "@utils/constants/icons";
import { fireEvent } from "@testing-library/react";

type CheckboxStyle = {
  checked: boolean;
};

const CheckedCheckBox = css`
  background: ${colors.primary.default};
  border-color: ${colors.primary.default};

  svg path {
    fill: ${colors.neutral.white};
  }
`;

const CheckboxContainer = styled.div<CheckboxStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.tertiary.default};
  border-radius: 6px;
  cursor: pointer;

  ${(props) => props.checked && CheckedCheckBox};
`;

type CheckboxReference = Array<string | number>;

type CheckboxField = string | number;

export type CheckboxValue = { field: CheckboxField; checked: boolean };

type CheckboxProps = {
  field: CheckboxField;
  checked?: boolean;
  onCheck?: (checkbox: CheckboxValue) => void;
};

const CheckboxView: React.FC<CheckboxProps> = ({
  field,
  onCheck,
  ...props
}) => {
  const [checked, setChecked] = useState<boolean>(props.checked ?? false);

  useEffect(() => {
    onCheck && onCheck({ field, checked });
  }, [checked]);

  return (
    <CheckboxContainer
      role="checkbox"
      data-testid="checkbox"
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
      checked={checked}
    >
      <CheckIcon />
    </CheckboxContainer>
  );
};

export const Checkbox = memo(CheckboxView);
