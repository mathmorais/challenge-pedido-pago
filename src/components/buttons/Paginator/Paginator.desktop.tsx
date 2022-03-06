import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { colors } from "@utils/constants/colors";
import { Button } from "@components/buttons/Button/Button";
import { Select } from "@components/inputs/Select/Select";
import { Paragraphy } from "@components/layouts/Typography/Typography";
import { ChevronLeftIcon, ChevronRightIcon } from "@utils/constants/icons";
import { PaginatorContext } from "contexts/PaginatorContext";
import { PaginatorProps } from "./Paginator";

const PaginatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  height: 36px;
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

const PaginatorLimitSelectorWrapper = styled.div`
  width: 76px;
  height: 36px;

  div {
    padding: 0;
  }
`;

const PaginatorButtonDisabled = css`
  border-color: ${colors.neutral.neutral2};
  svg path {
    fill: ${colors.neutral.neutral2};
  }
`;

const PaginatorLabel = styled.div`
  width: min-content;
  white-space: nowrap;
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

export type PaginatorDesktopProps = {
  labelCount?: boolean;
  limitSelector?: boolean;
};

export const PaginatorDesktop: React.FC<PaginatorProps> = ({
  totalItems,
  labelCount = true,
  limitSelector = true,
}) => {
  const { limit, setOffset, setLimit } = useContext(PaginatorContext);
  const [currentPage, setCurrentPage] = useState(1);

  const step = 5;
  const totalPages = Math.ceil(totalItems / limit) || 1;

  const handleGenerateStepItems = () => {
    let stepItems = {};
    let prevStep = step;

    for (let index = 0; index <= totalItems; index++) {
      stepItems = { ...stepItems, [prevStep]: String(prevStep) };
      prevStep += step;
      index += step;
    }

    return stepItems;
  };

  const handlePaginatorButton = (action: "decrement" | "increment") => {
    if (currentPage <= 1 && action === "decrement") return;
    else if (currentPage >= totalPages && action === "increment") return;

    setCurrentPage((prevPage) =>
      action === "increment" ? prevPage + 1 : prevPage - 1
    );
    setOffset((prevOffset) =>
      action === "increment" ? prevOffset + limit : prevOffset - limit
    );
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [totalPages]);

  useEffect(() => {
    if (currentPage <= 1) {
      setOffset(0);
    }
  }, [currentPage]);

  const handleLimitSelector = (value: string | undefined) => {
    setLimit(Number(value) || limit);
  };

  return (
    <PaginatorWrapper>
      <PaginatorInfo>
        {labelCount && (
          <Paragraphy>
            Mostrando {limit > totalItems ? totalItems : limit} de {totalItems}{" "}
            registros
          </Paragraphy>
        )}

        {limitSelector && (
          <PaginatorLimitSelectorWrapper>
            <Select
              onChange={handleLimitSelector}
              value={String(step)}
              height="36px"
              noBackground
              items={handleGenerateStepItems()}
            />
          </PaginatorLimitSelectorWrapper>
        )}
      </PaginatorInfo>
      <PaginatorActions>
        <PaginatorButton
          disabled={currentPage <= 1}
          onClick={() => handlePaginatorButton("decrement")}
          direction="left"
        >
          <ChevronLeftIcon />
        </PaginatorButton>
        <PaginatorLabel>
          <Paragraphy>
            {currentPage} de {totalPages}
          </Paragraphy>
        </PaginatorLabel>

        <PaginatorButton
          disabled={currentPage >= totalPages}
          onClick={() => handlePaginatorButton("increment")}
          direction="right"
        >
          <ChevronRightIcon />
        </PaginatorButton>
      </PaginatorActions>
    </PaginatorWrapper>
  );
};
