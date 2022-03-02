import styled from "@emotion/styled";
import { colors } from "@utils/constants/colors";
import { shadows } from "@utils/constants/shadows";

const SidebarContainer = styled.aside`
  position: sticky;
  top: 0;
  width: 256px;
  height: 100%;
  background: ${colors.neutral.white};
  box-shadow: ${shadows.level1};

  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

export const Sidebar = () => {
  return <SidebarContainer></SidebarContainer>;
};
