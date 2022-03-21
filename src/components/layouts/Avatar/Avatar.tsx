import styled from "@emotion/styled";
import Image, { ImageProps } from "next/image";
import { Small } from "../Typography/Typography";

type AvatarPropsStyles = {
  size?: number;
};

export const AvatarContainer = styled.div<AvatarPropsStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${(props) => props.size}px;
  min-height: ${(props) => props.size}px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  ${Small} {
    font-weight: 500;
  }
`;

type AvatarProps = {
  label?: string;
  src?: string;
} & Omit<ImageProps, "src"> &
  AvatarPropsStyles;

export const Avatar: React.FC<AvatarProps> = ({
  size = 32,
  src,
  label,
  ...props
}) => {
  return (
    <AvatarContainer size={size}>
      {!src ? (
        <Small>{label}</Small>
      ) : (
        <Image layout="fill" alt={props.alt} src={src} {...props} />
      )}
    </AvatarContainer>
  );
};
