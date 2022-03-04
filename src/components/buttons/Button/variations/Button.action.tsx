import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Paragraphy } from "@components/layouts/Typography/Typography";
import { colors } from "@utils/constants/colors";
import { Button, ButtonAttributes } from "../Button";

const ButtonActionContainer = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  border: 2px solid ${colors.primary.disabled};
  gap: 8px;

  &:active {
    filter: opacity(0.7);
    background: ${colors.neutral.neutral1};
  }

  transition: background 0.1s ease-in;
`;

type ButtonActionMobileProps = {
  icon: ReactNode;
} & ButtonAttributes;

export const ButtonAction: React.FC<ButtonActionMobileProps> = ({
  icon,
  children,
  ...props
}) => {
  const Icon = icon;

  return (
    <ButtonActionContainer {...props}>
      {Icon}
      <Paragraphy>{children}</Paragraphy>
    </ButtonActionContainer>
  );
};
