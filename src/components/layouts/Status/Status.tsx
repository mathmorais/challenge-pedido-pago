import styled from "@emotion/styled";
import { AgentStatus } from "@interfaces/IAgent";
import { colors } from "@utils/constants/colors";
import { Span } from "../Typography/Typography";

type StatusContainerStyles = {
  status: AgentStatus;
};

const StatusContainer = styled(Span)<{
  status: AgentStatus;
}>`
  min-width: 72px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 80px;
  background: ${(props) =>
    props.status === AgentStatus.Active
      ? colors.feedbackColors.success
      : colors.tertiary.disabled};
  font-weight: 500;
`;

export const Status: React.FC<StatusContainerStyles> = ({ status }) => {
  return (
    <StatusContainer status={status}>
      {status === AgentStatus.Active ? "Ativo" : "Inativo"}
    </StatusContainer>
  );
};
