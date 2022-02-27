import styled from "@emotion/styled";
import Link from "next/link";
import { colors } from "../constants/colors";
import { Avatar } from "./Avatar";
import { Paragraphy, Span } from "./Typography";

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

  p {
    font-weight: 400;
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
        <Paragraphy>{fullName}</Paragraphy>
        <Link href="#">meus dados</Link>
      </ProfileInfo>
    </ProfileContainer>
  );
};
