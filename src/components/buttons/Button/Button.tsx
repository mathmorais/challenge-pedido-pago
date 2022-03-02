import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
import { colors } from "../../../utils/constants/colors";

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;

  background: none;
  color: ${colors.neutral.black};
  border: none;

  &:disabled {
    cursor: not-allowed;
  }
`;

export type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonAttributes> = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};
