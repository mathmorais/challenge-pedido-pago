import styled from "@emotion/styled";
import Image, { ImageProps } from "next/image";

type AvatarProps = {
  size?: number;
};

export const AvatarContainer = styled.div<AvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${(props) => props.size}px;
  min-height: ${(props) => props.size}px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
`;

export const Avatar: React.FC<ImageProps & AvatarProps> = ({
  size = 32,
  ...props
}) => {
  return (
    <AvatarContainer size={size}>
      <Image layout="fill" alt={props.alt} {...props} />
    </AvatarContainer>
  );
};
