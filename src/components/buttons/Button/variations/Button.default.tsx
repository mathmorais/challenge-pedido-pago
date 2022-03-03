import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Paragraphy } from "@components/layouts/Typography/Typography";
import { colors } from "@utils/constants/colors";
import { Button, ButtonAttributes } from "../Button";

const ButtonActionContainer = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 14px 20px;
  border-radius: 8px;
  border: 2px solid ${colors.neutral.neutral2};
`;

type ButtonDefaultProps = {
  icon: ReactNode;
} & ButtonAttributes;

export const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  children,
  icon,
  ...props
}) => {
  const Icon = icon;

  return (
    <ButtonActionContainer {...props}>
      <Paragraphy>{children}</Paragraphy>
      {Icon && Icon}
    </ButtonActionContainer>
  );
};
