import { RolePermissions } from "enums/GroupPermissions";
export interface IRoleGroupRule {
  role: "Financeiro";
  permissions: RolePermissions[];
}

export interface IRole {
  name: string;
  department: string;
  grouprules: IRoleGroupRule[];
}
