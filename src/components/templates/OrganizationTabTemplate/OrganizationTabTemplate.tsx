import styled from "@emotion/styled";
import { Paragraphy } from "@components/layouts/Typography/Typography";
import { animations } from "@utils/constants/animations";
import { Input } from "@components/inputs/Input/Input";
import { useCallback, useContext, useEffect } from "react";
import { debounce } from "@utils/helpers/debounce";
import { OrganizationContext } from "@contexts/OrganizationContext";

const OrganizationTabContainer = styled.section`
  & > ${Paragraphy} {
    margin: 40px 0;
    font-weight: 600;
  }

  ${animations.FadeIn};
`;

const OrganizationTabSearch = styled.div`
  margin: 40px 0;
`;

export const OrganizationTabTemplate: React.FC<{
  type: "agents" | "roles";
  title: string;
  input: {
    placeholder: string;
    label: string;
  };
}> = ({ children, title, input, type }) => {
  const { handleFilterData } = useContext(OrganizationContext);

  const handleInputSearch = useCallback(
    debounce((value: string) => handleFilterData(type, value)),
    []
  );

  useEffect(() => {
    handleFilterData(type, "");
  }, []);

  return (
    <OrganizationTabContainer>
      <OrganizationTabSearch>
        <Input
          onChange={(event) => handleInputSearch(event.currentTarget.value)}
          label={input.label}
          placeholder={input.placeholder}
        />
      </OrganizationTabSearch>
      <Paragraphy>{title}</Paragraphy>
      {children}
    </OrganizationTabContainer>
  );
};
