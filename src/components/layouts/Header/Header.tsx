import { PlataformContext } from "contexts/PlataformContext";
import { useContext } from "react";
import { HeaderDesktop } from "./Header.desktop";
import { HeaderMobile } from "./Header.mobile";

export type HeaderProps = {
  name: string;
  avatarUrl?: string;
};

export const Header: React.FC = () => {
  const { isMobile } = useContext(PlataformContext);

  const mockUserData = {
    name: "Matheus Morais",
    avatarUrl: "/pngs/user-avatar.png",
  };

  if (isMobile) {
    return <HeaderMobile {...mockUserData} />;
  } else {
    return <HeaderDesktop {...mockUserData} />;
  }
};
