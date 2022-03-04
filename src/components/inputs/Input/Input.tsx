import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { forwardRef, InputHTMLAttributes } from "react";
import { colors } from "../../../utils/constants/colors";
import { typography } from "../../../utils/constants/typography";
import { Span } from "../../layouts/Typography/Typography";

type InputStyleProps = {
  readOnly?: boolean;
};

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  position: relative;
`;

const DisabledInput = css`
  pointer-events: none;
`;

const InputField = styled.input<InputStyleProps>`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 16px 20px;
  border: none;
  background: none;
  z-index: 3;
  outline: none;
  color: ${colors.neutral.black};
  font-size: ${typography.paragraphy.size};
  font-weight: 500;
  inset: 2px 0 0 0;

  ${(props) => props.readOnly && DisabledInput}

  &:focus + fieldset {
    border-color: ${colors.neutral.neutral5};
  }

  ::placeholder {
    color: ${colors.neutral.neutral5};
    opacity: 1;
  }
`;

const SelectFieldset = styled.fieldset`
  position: absolute;
  inset: -5px 0 0 0;
  border: 2px solid ${colors.neutral.neutral2};
  border-radius: 8px;
  background: ${colors.neutral.white};
  padding: 0 12px;
  overflow: hidden;

  ${Span} {
    padding: 0 4px;
    font-weight: 500;
    color: ${colors.neutral.neutral3};
  }
`;

type InputProps = {
  label: string;
  icon?: JSX.Element;
} & InputHTMLAttributes<HTMLInputElement> &
  InputStyleProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, readOnly, icon, ...props }, ref) => {
    return (
      <InputWrapper>
        {icon && icon}
        <InputField
          aria-disabled={readOnly}
          readOnly={readOnly}
          ref={ref}
          {...props}
        />
        <SelectFieldset>
          <legend>
            <Span>{label}</Span>
          </legend>
        </SelectFieldset>
      </InputWrapper>
    );
  }
);

Input.displayName = "Input";
