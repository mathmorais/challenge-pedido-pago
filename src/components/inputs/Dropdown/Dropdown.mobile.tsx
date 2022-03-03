import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { css } from "@emotion/react";
import { colors } from "@utils/constants/colors";
import { Span, Subtitle } from "@components/layouts/Typography/Typography";
import { shadows } from "@utils/constants/shadows";
import { Button } from "@components/buttons/Button/Button";
import { DropdownContext } from "contexts/DropdownContext";
import { CloseIcon } from "@utils/constants/icons";

const DropdownMobileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const DropdownBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${colors.neutral.black};
  filter: opacity(0.1);

  z-index: 1;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 17px;
  padding-bottom: 10px;
`;

const DropdownContent = styled.div`
  width: 90%;
  padding: 8px;
  border-radius: 8px 8px 0 0;
  box-shadow: ${shadows.level2};
  background: ${colors.neutral.white};
  z-index: 2;

  ${Subtitle} {
    font-weight: 600;
  }
`;

const DisabledDropdownItem = css`
  cursor: not-allowed;

  svg path {
    fill: ${colors.neutral.neutral2};
  }

  ${Span} {
    color: ${colors.neutral.neutral2};
  }
`;

const DropdownItem = styled(Button)<{ enabled: boolean }>`
  width: 100%;
  display: inline-flex;
  gap: 16px;
  padding: 17px;

  &:hover {
    background: ${colors.neutral.neutral1};
  }

  svg {
    z-index: 0;
  }

  svg path {
    fill: ${colors.neutral.neutral3};
  }

  ${Span} {
    font-weight: 500;
    color: ${colors.neutral.neutral5};
  }

  ${(props) => !props.enabled && DisabledDropdownItem};
`;

export const DropdownMobile: React.FC = () => {
  const { dropdownInfo, setDropdownInfo, items, setItems } =
    useContext(DropdownContext);

  useEffect(() => {
    return () => {
      setItems(undefined);
      setDropdownInfo(undefined);
    };
  }, []);

  const handleSerializeItems = () => {
    return items?.map((item, index) => (
      <DropdownItem
        enabled={item.enabled ?? false}
        key={index}
        onMouseDown={item.action}
      >
        {item.icon}
        <Span>{item.label}</Span>
      </DropdownItem>
    ));
  };

  const handleHideDropdown = () => {
    setItems(undefined);
    setDropdownInfo(undefined);
  };

  if (items && items.length > 0) {
    return (
      <DropdownMobileWrapper>
        <DropdownBackground onClick={handleHideDropdown} />
        <DropdownContent>
          {dropdownInfo?.label && (
            <DropdownHeader>
              <Subtitle>{dropdownInfo?.label}</Subtitle>
              <Button onClick={handleHideDropdown}>
                <CloseIcon />
              </Button>
            </DropdownHeader>
          )}

          {handleSerializeItems()}
        </DropdownContent>
      </DropdownMobileWrapper>
    );
  } else {
    return <></>;
  }
};
