import styled from "@emotion/styled";
import { useContext } from "react";
import { colors } from "@utils/constants/colors";
import { Button } from "@components/buttons/Button/Button";
import { PaginatorContext } from "contexts/PaginatorContext";
import { RefreshIcon } from "@utils/constants/icons";
import { Paragraphy } from "@components/layouts/Typography/Typography";
import { PaginatorProps } from "./Paginator";
import { ButtonActionMobile } from "../Button/variations/ButtonAction.mobile";

const PaginatiorMobileContainer = styled(Button)`
  width: 100%;
  margin-top: 24px;
`;

export type PaginatorMobileProps = {};

export const PaginatorMobile: React.FC<
  PaginatorProps & PaginatorMobileProps
> = ({ totalItems }) => {
  const { limit, setLimit } = useContext(PaginatorContext);

  const stepLoading = 5;

  const handleLoadMore = () => {
    if (limit < totalItems) {
      setLimit((prevLimit) => prevLimit + stepLoading);
    }
  };

  if (limit < totalItems) {
    return (
      <PaginatiorMobileContainer>
        <ButtonActionMobile icon={<RefreshIcon />} onClick={handleLoadMore}>
          <Paragraphy>Carregar mais</Paragraphy>
        </ButtonActionMobile>
      </PaginatiorMobileContainer>
    );
  } else {
    return <></>;
  }
};
