import { ITab } from "@interfaces/ITab";
import { PlataformContext } from "contexts/PlataformContext";
import { useContext } from "react";
import { TabsDesktop } from "./Tabs.desktop";
import { TabsMobile } from "./Tabs.mobile";

export type TabsProps = {
  tabs: ITab[];
};

export const Tabs: React.FC<TabsProps> = (props) => {
  const { isMobile } = useContext(PlataformContext);

  return isMobile ? <TabsMobile {...props} /> : <TabsDesktop {...props} />;
};
