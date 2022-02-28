import styled from "@emotion/styled";
import { typography } from "@utils/constants/typography";

export const Small = styled.small`
  font-size: ${typography.small.size};
  font-weight: ${typography.small.weight};
  line-height: ${typography.small.lineHeight};
`;

export const Span = styled.span`
  font-size: ${typography.span.size};
  font-weight: ${typography.span.weight};
`;

export const Paragraphy = styled.p`
  font-size: ${typography.paragraphy.size};
  font-weight: ${typography.paragraphy.weight};
`;

export const Subtitle = styled.p`
  font-size: ${typography.subTitle.size};
  font-weight: ${typography.subTitle.weight};
`;

export const Title = styled.h2`
  font-size: ${typography.title.size};
  font-weight: ${typography.title.weight};
`;

export const ExtraTitle = styled.h1`
  font-size: ${typography.extraTitle.size};
  font-weight: ${typography.extraTitle.weight};
`;
