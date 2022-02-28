import styled from "@emotion/styled";
import { colors } from "../../../utils/constants/colors";
import { LinkWrapper } from "../../buttons/LinkWrapper/LinkWrapper";
import { Avatar } from "../Avatar/Avatar";
import { Span } from "../Typography/Typography";

export const ProfilePhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${colors.primary.default};
  color: ${colors.neutral.black};
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  span:first-of-type {
    font-weight: 600;
  }
`;

const ProfileContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

type ProfileProps = {
  profilePhoto: string;
  fullName: string;
};

export const Profile: React.FC<ProfileProps> = ({ fullName, profilePhoto }) => {
  return (
    <ProfileContainer>
      <Avatar alt={fullName} src={profilePhoto} />
      <ProfileInfo>
        <Span>{fullName}</Span>
        <LinkWrapper href="#">meus dados</LinkWrapper>
      </ProfileInfo>
    </ProfileContainer>
  );
};
