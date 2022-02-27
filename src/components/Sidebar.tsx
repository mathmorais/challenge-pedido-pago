import styled from "@emotion/styled";
import { colors } from "../constants/colors";
import { shadows } from "../constants/shadows";

const SidebarContainer = styled.aside`
  position: sticky;
  top: 0;
  width: 256px;
  height: 100%;
  background: ${colors.neutral.white};
  box-shadow: ${shadows.level1};
`;

export const Sidebar = () => {
  return <SidebarContainer></SidebarContainer>;
};
