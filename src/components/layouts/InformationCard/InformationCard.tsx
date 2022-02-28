import styled from "@emotion/styled";
import { colors } from "../../../utils/constants/colors";
import { Paragraphy, Small } from "../Typography/Typography";

const InformationCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 16px;
  border: 2px solid ${colors.neutral.neutral2};
  background: ${colors.tertiary.default};
  border-radius: 8px;
`;

const InformationIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 38px;
  background: ${colors.neutral.neutral2};
  margin-right: 8px;
  border-radius: 50%;
`;

const InformationCardContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.neutral.neutral5};

  p {
    font-weight: 600;
  }
`;

type InformationCardPros = {
  headerName: string;
  content: string;
  icon: JSX.Element;
};

export const InformationCard: React.FC<InformationCardPros> = ({
  headerName,
  content,
  icon,
}) => {
  return (
    <InformationCardContainer>
      <InformationIconWrapper>{icon}</InformationIconWrapper>
      <InformationCardContent>
        <Small>{headerName}</Small>
        <Paragraphy>{content}</Paragraphy>
      </InformationCardContent>
    </InformationCardContainer>
  );
};
