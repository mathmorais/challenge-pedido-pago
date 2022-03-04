import styled from "@emotion/styled";
import { colors } from "@utils/constants/colors";
import { shadows } from "@utils/constants/shadows";

const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 24px;
  background: ${colors.neutral.white};
  box-shadow: ${shadows.level1};
  border-radius: 8px;

  @media only screen and (max-width: 960px) {
    padding: 50px 16px;
  }
`;

export const Table: React.FC = ({ children }) => {
  return <TableContainer>{children}</TableContainer>;
};
