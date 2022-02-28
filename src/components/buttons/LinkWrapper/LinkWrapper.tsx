import Link, { LinkProps } from "next/link";
import styled from "@emotion/styled";
import { colors } from "@utils/constants/colors";
import { typography } from "@utils/constants/typography";

const LinkWrapperContainer = styled.a`
  font-size: ${typography.span.size};
  line-height: ${typography.span.lineHeight};
  color: ${colors.neutral.neutral5};
  text-decoration: none;
`;

export const LinkWrapper: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link {...props} passHref>
      <LinkWrapperContainer>{children}</LinkWrapperContainer>
    </Link>
  );
};
