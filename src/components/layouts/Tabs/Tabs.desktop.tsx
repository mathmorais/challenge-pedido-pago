import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useLayoutEffect, useState } from "react";
import { ITab } from "@interfaces/ITab";
import { colors } from "@utils/constants/colors";
import { Span } from "@components/layouts/Typography/Typography";
import { TabsProps } from "./Tabs";
import { animations } from "@utils/constants/animations";

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
    ${animations.FadeIn}
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

export const TabsDesktop: React.FC<TabsProps> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState<ITab>();

  useLayoutEffect(() => {
    setCurrentTab(tabs[0]);
  }, []);

  return (
    <TabWrapper>
      <TabSelector>
        {tabs?.map((tab, index) => (
          <TabItem
            selected={currentTab?.title === tab.title}
            onClick={() => setCurrentTab(tab)}
            key={index}
          >
            <Span>{tab.title}</Span>
          </TabItem>
        ))}
      </TabSelector>
      {currentTab?.component}
    </TabWrapper>
  );
};
