import styled from "@emotion/styled";
import { colors } from "@utils/constants/colors";
import { Button } from "@components/buttons/Button/Button";
import { Title } from "@components/layouts/Typography/Typography";
import { useRouter } from "next/router";
import { Table } from "@components/layouts/Table/Table";
import { ArrowLeftIcon } from "@utils/constants/icons";

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

const TablePageBackHistory = styled(Button)`
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
            <ArrowLeftIcon />
          </TablePageBackHistory>
        )}
        <Title>{title}</Title>
      </TablePageTemplateTop>
      <Table>{children}</Table>
    </TablePageTemplateWrapper>
  );
};
