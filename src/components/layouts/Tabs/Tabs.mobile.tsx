import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useContext, useEffect, useState } from "react";

import { ITab } from "@interfaces/ITab";
import { colors } from "@utils/constants/colors";
import { Span } from "@components/layouts/Typography/Typography";
import { TabsProps } from "./Tabs";
import { Dropdown } from "@components/inputs/Dropdown/Dropdown";
import { IDropdownItem } from "@interfaces/IDropdownItem";
import { ButtonDefault } from "@components/buttons/Button/variations/Button.default";
import { MoreIcon } from "@utils/constants/icons";
import { DropdownContext } from "@contexts/DropdownContext";

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabSelector = styled.div`
  display: inline-flex;
  width: 100%;
  border-bottom: 2px solid ${colors.neutral.neutral1};
`;

const TabItemSelected = css`
  color: ${colors.neutral.black};

  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    height: 2px;
    width: 100%;
    transform: translateY(2px);
    background: ${colors.primary.default};
  }
`;

const TabItem = styled.button<{ selected?: boolean }>`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 16px 30px;
  width: 192px;
  border: none;
  background: none;
  color: ${colors.neutral.neutral3};
  ${Span} {
    font-weight: 600;
  }
  ${(props) => props.selected && TabItemSelected}
`;

export const TabsMobile: React.FC<TabsProps> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState<ITab>();
  const { setItems, setDropdownInfo, dropdownInfo } =
    useContext(DropdownContext);

  useEffect(() => {
    setCurrentTab(tabs[0]);
  }, []);

  const handleSerializeTabs = (): IDropdownItem[] => {
    return tabs.map((tab) => {
      return {
        label: tab.title,
        action: () => {
          setCurrentTab(tab);
          setItems(undefined);
        },
        enabled: true,
      };
    });
  };

  const modalInfo = {
    label: "Categorias",
  };

  const handleShowDropdown = () => {
    setDropdownInfo(modalInfo);
    setItems(handleSerializeTabs());
  };

  return (
    <TabWrapper>
      <ButtonDefault onClick={handleShowDropdown} icon={<MoreIcon />}>
        {currentTab?.title}
      </ButtonDefault>
      {currentTab?.component}
    </TabWrapper>
  );
};
