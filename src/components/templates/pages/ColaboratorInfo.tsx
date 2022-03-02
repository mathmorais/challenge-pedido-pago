import styled from "@emotion/styled";
import { colors } from "../../../utils/constants/colors";
import { IAgent } from "../../../interfaces/IAgent";
import { UnitsFormatter } from "../../../utils/helpers/UnitsFormatter";
import { Avatar } from "../../layouts/Avatar/Avatar";
import { InformationCard } from "../../layouts/InformationCard/InformationCard";
import { Select } from "../../inputs/Select/Select";
import { Paragraphy, Subtitle } from "../../layouts/Typography/Typography";
import {
  CalendarIcon,
  IdIcon,
  PhoneIcon,
} from "../../../utils/constants/icons";

const ColaboratorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  ${Subtitle} {
    margin-bottom: 24px;
  }
`;

const SectionColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${Paragraphy} {
    font-weight: 400;
    color: ${colors.neutral.neutral5};
  }
`;

const SectionRow = styled.div`
  display: inline-flex;
  gap: 24px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

const ProfileSectionCard = styled.div`
  padding: 24px;
  border: 2px solid ${colors.neutral.neutral1};
  border-radius: 8px;

  ${Subtitle} {
    margin-bottom: 24px;
  }
`;

const ProfileSelectionCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  gap: 24px;
  grid-template-rows: 1fr 1fr;
`;

export const ColaboratorInfo: React.FC<{ colaborator: IAgent }> = ({
  colaborator,
}) => {
  const { formatBirthDate, formatCPF, formatPhoneNumber } =
    new UnitsFormatter();

  return (
    <ColaboratorInfoContainer>
      <SectionRow>
        <Avatar src={colaborator.image} size={80} />
        <SectionColumn>
          <Subtitle>{colaborator.name}</Subtitle>
          <Paragraphy>{colaborator.email}</Paragraphy>
        </SectionColumn>
      </SectionRow>
      <Section>
        <Subtitle>Informações pessoais</Subtitle>
        <SectionRow>
          <InformationCard
            icon={<IdIcon />}
            headerName="CPF"
            content={formatCPF(colaborator.document.number)}
          />
          <InformationCard
            icon={<PhoneIcon />}
            headerName="Telefone"
            content={formatPhoneNumber(colaborator.phone)}
          />
          <InformationCard
            icon={<CalendarIcon />}
            headerName="Nascimento"
            content={formatBirthDate(colaborator.birth_date)}
          />
        </SectionRow>
      </Section>
      <ProfileSectionCard>
        <Subtitle>Dados organizacionais</Subtitle>
        <ProfileSelectionCardGrid>
          <Select
            value={colaborator.department}
            label="Departamento"
            items={{
              Comercial: "Comercial",
              Administrativo: "Administrativo",
            }}
          />
          <Select
            label="Cargo"
            value={colaborator.role}
            items={{
              Diretor: "Diretor",
            }}
          />
          <Select
            label="Unidade"
            value={colaborator.branch}
            items={{
              "Farmácia Pedido Pago": "Farmácia Pedido Pago",
            }}
          />
          <Select
            label="Status"
            value={colaborator.status}
            items={{
              active: "Ativo",
              inactive: "Inativo",
            }}
          />
        </ProfileSelectionCardGrid>
      </ProfileSectionCard>
    </ColaboratorInfoContainer>
  );
};
