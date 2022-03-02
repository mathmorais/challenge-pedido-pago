import styled from "@emotion/styled";
import { colors } from "@utils/constants/colors";
import { BrandIcon } from "@utils/constants/icons";
import { Avatar } from "../Avatar/Avatar";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 61px;
  align-items: center;
  border-bottom: 1px solid ${colors.neutral.neutral1};
  background: ${colors.neutral.white};
  overflow: hidden;
  padding: 0 16px;

  svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

type HeaderMobile = {
  avatarUrl: string;
};

export const HeaderMobile: React.FC<HeaderMobile> = ({ avatarUrl }) => {
  return (
    <HeaderContainer>
      <Avatar alt={"Avatar"} src={avatarUrl} />
      <BrandIcon alt={"Avatar"} />
    </HeaderContainer>
  );
};
