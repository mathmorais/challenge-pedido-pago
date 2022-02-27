import styled from "@emotion/styled";
import { ReactNode, useEffect, useState } from "react";
import { colors } from "../constants/colors";
import { ITab } from "../interfaces/ITab";
import { Span } from "./Typography";

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabSelector = styled.div`
  display: inline-flex;
  width: 100%;
  border-bottom: 2px solid ${colors.neutral.neutral1};
`;

const TabItem = styled.button<{ selected?: boolean }>`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 16px 30px;
  width: 192px;
  border: none;
  background: none;
  ${Span} {
    font-weight: 600;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    height: 2px;
    width: 100%;
    transform: translateY(2px);
    background: ${colors.primary.default};
    display: ${(props) => !props.selected && "none"};
  }
`;

export const Tabs: React.FC<{ tabs: ITab[] }> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState<ITab>();

  useEffect(() => {
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
