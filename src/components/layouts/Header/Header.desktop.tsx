import styled from "@emotion/styled";
import { colors } from "@utils/constants/colors";
import { Profile, ProfileProps } from "@components/layouts/Profile/Profile";
import { BrandIcon } from "@utils/constants/icons";
import { useEffect } from "react";

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 61px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.neutral.neutral1};
  background: ${colors.neutral.white};
  overflow: hidden;
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 32px;
  border-left: 1px solid ${colors.neutral.neutral1};
  border-right: 1px solid ${colors.neutral.neutral1};
`;

export const HeaderDesktop: React.FC<ProfileProps> = ({
  children,
  ...props
}) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <HeaderContainer>
      <HeaderItem>
        <BrandIcon />
      </HeaderItem>
      <HeaderItem>
        <Profile {...props} />
      </HeaderItem>
    </HeaderContainer>
  );
};
