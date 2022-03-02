import { IAgent } from "./IAgent";

type OmmitedProps = "email" | "phone" | "document" | "birth_date";

export interface IAgents extends Omit<IAgent, OmmitedProps> {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
}
