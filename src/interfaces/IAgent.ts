import { DocumentTypes } from "enums/DocumentTypes";

type Document = {
  type: DocumentTypes;
  number: string;
};

type Phone = {
  ddd: string;
  ddi: string;
  number: string;
};

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
  status: "active" | "inactive";
}
