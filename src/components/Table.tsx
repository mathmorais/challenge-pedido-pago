import styled from "@emotion/styled";
import { ReactNode, useEffect, useState } from "react";
import { colors } from "../constants/colors";
import { shadows } from "../constants/shadows";

const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 24px;
  background: ${colors.neutral.white};
  box-shadow: ${shadows.level1};
  border-radius: 8px;
`;

export const Table: React.FC = ({ children }) => {
  return <TableContainer>{children}</TableContainer>;
};
