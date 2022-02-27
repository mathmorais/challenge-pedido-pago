import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
import { colors } from "../constants/colors";

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;

  background: none;
  color: ${colors.neutral.black};
  border: none;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ButtonHelper: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};
