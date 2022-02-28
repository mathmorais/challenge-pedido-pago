import { GroupPermissions } from "../enum/GroupPermissions";

interface IRoleGroupRules {
  role: "Financeiro";
  permissions: GroupPermissions[];
}

export interface IRole {
  name: string;
  department: string;
  grouprules: IRoleGroupRules[];
}
