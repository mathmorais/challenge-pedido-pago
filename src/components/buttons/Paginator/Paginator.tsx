import { PlataformContext } from "contexts/PlataformContext";
import { useContext } from "react";
import { PaginatorDesktop, PaginatorDesktopProps } from "./Paginator.desktop";
import { PaginatorMobile, PaginatorMobileProps } from "./Paginator.mobile";

export type PaginatorProps = {
  totalItems: number;
  mobile?: PaginatorMobileProps;
} & PaginatorDesktopProps;

export const Paginator: React.FC<PaginatorProps> = (props) => {
  const { isMobile } = useContext(PlataformContext);

  return isMobile ? (
    <PaginatorMobile {...props} {...props.mobile} />
  ) : (
    <PaginatorDesktop {...props} />
  );
};
