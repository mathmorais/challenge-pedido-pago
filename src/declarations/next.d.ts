import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
type GetLayout = (page: ReactElement) => ReactNode;
declare module "next" {
  export type LayoutNextPage<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: GetLayout;
  };
}
