import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "@utils/constants/colors";

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingElement = styled.div`
  display: inline-flex;
  padding: 40px;
  gap: 5px;
`;

const WaveAnimation = keyframes`
  from {
    transform: 0
  } to {
    transform: translateY(50%) 
  }
`;

const LoadingBall = styled.div<{ delay?: number }>`
  width: 20px;
  height: 20px;
  border: 3px solid ${colors.neutral.neutral3};
  border-radius: 100%;
  transform: translateY(-100%);
  animation: ${WaveAnimation} 750ms ease-in-out ${(props) => props.delay ?? 0}ms
    infinite alternate;
`;

export const Loading = () => {
  return (
    <LoadingWrapper aria-label="Carregando" role="log">
      <LoadingElement>
        <LoadingBall />
        <LoadingBall delay={200} />
        <LoadingBall delay={400} />
      </LoadingElement>
    </LoadingWrapper>
  );
};
