import styled from "@emotion/styled";
import { colors } from "../constants/colors";
import { ButtonHelper } from "./ButtonHelper";
import { Table } from "./Table";
import { Title } from "./Typography";
import ArrowLeftSVG from "../../public/svgs/arrow-left.svg";
import { useRouter } from "next/router";

const TablePageTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TablePageTemplateTop = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 25px;
  gap: 16px;
`;

const TablePageBackHistory = styled(ButtonHelper)`
  justify-content: center;
  width: 36px;
  height: 36px;
  background: ${colors.tertiary.disabled};
  border-radius: 100%;
`;

export const TablePageTemplate: React.FC<{
  title: string;
  withBackButton?: boolean;
}> = ({ children, title, withBackButton }) => {
  const router = useRouter();

  return (
    <TablePageTemplateWrapper>
      <TablePageTemplateTop>
        {withBackButton && (
          <TablePageBackHistory aria-label="Voltar" onClick={router.back}>
            <ArrowLeftSVG />
          </TablePageBackHistory>
        )}
        <Title>{title}</Title>
      </TablePageTemplateTop>
      <Table>{children}</Table>
    </TablePageTemplateWrapper>
  );
};
