import styled from "@emotion/styled";
import { Paragraphy } from "./Typography";

export const TabPageContainer = styled.section`
  display: flex;
  flex-direction: column;

  ${Paragraphy} {
    margin: 40px 0;
    font-weight: 600;
  }
`;

export const TabPage: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <TabPageContainer>
      {title && <Paragraphy>{title}</Paragraphy>}
      {children}
    </TabPageContainer>
  );
};
