import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { memo, useState } from "react";
import { colors } from "@utils/constants/colors";
import { CheckIcon } from "@utils/constants/icons";

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

type CheckboxValues = string[];

type CheckboxFields = string | number | null;

type CheckboxProps = {
  reference: CheckboxValues;
  field: CheckboxFields;
};

const CheckboxView: React.FC<CheckboxProps> = ({ reference, field = null }) => {
  const [referenceCopy, setReferenceCopy] = useState<string[]>(reference);

  const handleCheckValue = (): boolean => {
    if (reference instanceof Array) {
      return referenceCopy.some((insetValue) => insetValue === field);
    }

    return false;
  };

  return (
    <CheckboxContainer
      onClick={() => {
        if (referenceCopy.includes(`${field}`)) {
          const newArray = reference.filter((item) => item !== field);
          setReferenceCopy(newArray);
        } else {
          setReferenceCopy((oldReferenceCopy) => [
            ...oldReferenceCopy,
            String(field),
          ]);
        }
      }}
      checked={handleCheckValue()}
    >
      <CheckIcon />
    </CheckboxContainer>
  );
};

export const Checkbox = memo(CheckboxView);
