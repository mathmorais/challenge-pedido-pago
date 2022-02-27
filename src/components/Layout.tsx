import styled from "@emotion/styled";
import { colors } from "../constants/colors";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Title } from "./Typography";
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

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
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
