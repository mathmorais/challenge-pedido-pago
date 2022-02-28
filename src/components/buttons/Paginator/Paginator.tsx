import styled from "@emotion/styled";
import { useState } from "react";
import { css } from "@emotion/react";
import { colors } from "@utils/constants/colors";
import { Button } from "@components/buttons/Button/Button";
import { Select } from "@components/inputs/Select/Select";
import { Paragraphy } from "@components/layouts/Typography/Typography";
import { ChevronLeftIcon, ChevronRightIcon } from "@utils/constants/icons";

const PaginatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const PaginatorInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${Paragraphy} {
    font-weight: 400;
    margin-right: 23.5px;
  }

  div {
    margin-top: 1px;
  }
`;

const PaginatorSelectWrapper = styled.div`
  width: 76px;
  height: 36px;

  div {
    padding: 0;
  }
`;

const PaginatorButtonDisabled = css`
  border: 1.4px solid ${colors.neutral.neutral2};
  svg path {
    fill: ${colors.neutral.neutral2};
  }
`;

const PaginatorButton = styled(Button)<{
  disabled?: boolean;
  direction: "left" | "right";
}>`
  height: 100%;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.4px solid ${colors.neutral.neutral4};
  border-radius: ${(props) =>
    props.direction === "left" ? "8px 0 0 8px" : "0 8px 8px 0"};

  svg path {
    fill: ${colors.neutral.neutral5};
  }

  ${(props) => props.disabled && PaginatorButtonDisabled};
`;

const PaginatorActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;

  ${Paragraphy} {
    color: ${colors.neutral.neutral5};
  }
`;

export const Paginator: React.FC<{
  itemsLength: number;
  limit: number;
}> = ({ itemsLength, limit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentOffset, setCurrentOffset] = useState();
  const step = 5;
  const maxSteps = 2;
  const totalPages = Math.ceil(itemsLength / step);

  const handleGenerateStepItems = () => {
    let stepItems = {};
    let prevStep = step;

    for (let index = 0; index < maxSteps; index++) {
      stepItems = { ...stepItems, [prevStep]: String(prevStep) };
      prevStep += step;
    }

    return stepItems;
  };

  return (
    <PaginatorWrapper>
      <PaginatorInfo>
        <Paragraphy>
          Mostrando {limit} de {itemsLength} registros
        </Paragraphy>
        <PaginatorSelectWrapper>
          <Select
            value={String(step)}
            height="36px"
            noBackground
            items={handleGenerateStepItems()}
          />
        </PaginatorSelectWrapper>
      </PaginatorInfo>
      <PaginatorActions>
        <PaginatorButton direction="left">
          <ChevronLeftIcon />
        </PaginatorButton>
        <Paragraphy>
          {currentPage} de {totalPages}
        </Paragraphy>
        <PaginatorButton direction="right">
          <ChevronRightIcon />
        </PaginatorButton>
      </PaginatorActions>
    </PaginatorWrapper>
  );
};
