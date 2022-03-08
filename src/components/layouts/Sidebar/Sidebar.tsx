import styled from "@emotion/styled";
import { colors } from "@utils/constants/colors";
import { mediaQueries } from "@utils/constants/mediaQueries";
import { shadows } from "@utils/constants/shadows";

const SidebarContainer = styled.aside`
  position: sticky;
  top: 0;
  width: 256px;
  height: 100%;
  background: ${colors.neutral.white};
  box-shadow: ${shadows.level1};

  ${mediaQueries.mediaQuery[0]} {
    display: none;
  }
`;

export const Sidebar = () => {
  return <SidebarContainer></SidebarContainer>;
};
