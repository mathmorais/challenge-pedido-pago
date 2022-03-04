import { PlataformContext } from "contexts/PlataformContext";
import { useContext } from "react";
import { HeaderDesktop } from "./Header.desktop";
import { HeaderMobile } from "./Header.mobile";

export const Header: React.FC = () => {
  const { isMobile } = useContext(PlataformContext);

  const mockUserData = {
    name: "Luiz Zlochevsky",
    avatarUrl: "/pngs/user-avatar.png",
  };

  if (isMobile) {
    return <HeaderMobile {...mockUserData} />;
  } else {
    return <HeaderDesktop {...mockUserData} />;
  }
};
