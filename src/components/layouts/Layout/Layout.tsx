import { DropdownMobile } from "@components/inputs/Dropdown/Dropdown.mobile";
import styled from "@emotion/styled";
import { DropdownContextProvider } from "contexts/DropdownContext";
import { PlataformContextProvider } from "contexts/PlataformContext";
import Head from "next/head";
import { colors } from "../../../utils/constants/colors";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.neutral.background};
`;

const MainContentWrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: auto;
`;

const Main = styled.main`
  width: 100%;
  height: fit-content;
  display: flex;
`;

const Content = styled.section`
  width: 100%;
  height: 100%;
  max-width: 956px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 50px 6px;

  @media only screen and (max-width: 960px) {
    padding-top: 40px;
    padding-bottom: 24px;
  }
`;

type LayoutProps = {
  pageTitle?: string;
};

export const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <PlataformContextProvider>
      <Container>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Header />
        <MainContentWrapper>
          <Sidebar />
          <Main>
            <Content>{children}</Content>
          </Main>
        </MainContentWrapper>
      </Container>
    </PlataformContextProvider>
  );
};
