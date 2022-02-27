import styled from "@emotion/styled";
import { colors } from "../constants/colors";
import { IAgent } from "../interfaces/IAgent";
import { UnitsFormatter } from "../utils/UnitsFormatter";
import { Avatar } from "./Avatar";
import { InformationCard } from "./InformationCard";
import { Select } from "./Select";
import { Paragraphy, Subtitle } from "./Typography";

const ColaboratorProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  ${Subtitle} {
    margin-bottom: 24px;
  }
`;

const ProfileSectionUser = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${Paragraphy} {
    font-weight: 400;
    color: ${colors.neutral.neutral5};
  }
`;

const ProfileSectionRow = styled.div`
  display: inline-flex;
  gap: 24px;
  margin-bottom: 24px;
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
  grid-template-columns: repeat(auto-fill, minmax(318px, 1fr));
  gap: 24px;
  grid-template-rows: 1fr 1fr;
`;

export const ColaboratorProfile: React.FC<{ colaborator: IAgent }> = ({
  colaborator,
}) => {
  const { formatBirthDate, formatCPF, formatPhoneNumber } =
    new UnitsFormatter();

  return (
    <ColaboratorProfileContainer>
      <ProfileSectionRow>
        <Avatar src={colaborator.image} size={80} />
        <ProfileSectionUser>
          <Subtitle>{colaborator.name}</Subtitle>
          <Paragraphy>{colaborator.email}</Paragraphy>
        </ProfileSectionUser>
      </ProfileSectionRow>
      <ProfileSection>
        <Subtitle>Informações pessoais</Subtitle>
        <ProfileSectionRow>
          <InformationCard
            headerName="CPF"
            content={formatCPF(colaborator.document.number)}
          />
          <InformationCard
            headerName="Telefone"
            content={formatPhoneNumber(colaborator.phone)}
          />
          <InformationCard
            headerName="Nascimento"
            content={formatBirthDate(colaborator.birth_date)}
          />
        </ProfileSectionRow>
      </ProfileSection>
      <ProfileSectionCard>
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
    </ColaboratorProfileContainer>
  );
};
