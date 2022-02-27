import styled from "@emotion/styled";
import { colors } from "../constants/colors";
import { Profile } from "./Profile";
import BrandSVG from "../../public/svgs/brand.svg";

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

export const Header = () => {
  const mockUserData = {
    fullName: "Luiz Zlochevsky",
    profilePhoto: "/pngs/user-avatar.png",
  };

  return (
    <HeaderContainer>
      <HeaderItem>
        <BrandSVG />
      </HeaderItem>
      <HeaderItem>
        <Profile {...mockUserData} />
      </HeaderItem>
    </HeaderContainer>
  );
};
