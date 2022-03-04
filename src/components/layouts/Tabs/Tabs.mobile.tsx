import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";

import { ITab } from "@interfaces/ITab";
import { TabsProps } from "./Tabs";
import { IDropdownItem } from "@interfaces/IDropdownItem";
import { ButtonDefault } from "@components/buttons/Button/variations/Button.default";
import { MoreIcon } from "@utils/constants/icons";
import { DropdownContext } from "@contexts/DropdownContext";

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabsMobile: React.FC<TabsProps> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState<ITab>();
  const { setItems, setDropdownInfo } = useContext(DropdownContext);

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

  const handleShowDropdown = () => {
    setDropdownInfo({ label: "Categorias" });
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
