import styled from "@emotion/styled";
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
  padding: 50px 0;
`;

type LayoutProps = {
  pageTitle?: string;
};

export const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
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
  );
};
