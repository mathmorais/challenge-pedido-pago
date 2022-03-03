export enum DocumentTypes {
  CPF = "CPF",
}

export type Document = {
  type: DocumentTypes;
  number: string;
};

export type Phone = {
  ddd: string;
  ddi: string;
  number: string;
};

export enum AgentStatus {
  Active = "active",
  Inactive = "inactive",
}

export interface IAgent {
  id: number;
  name: string;
  email: string;
  phone: Phone;
  document: Document;
  birth_date: Date;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: AgentStatus;
}
