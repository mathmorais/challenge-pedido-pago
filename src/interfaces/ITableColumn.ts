export interface ITableColumn {
  field: string;
  headerName: string;
  width?: string | number;
  minWidth?: ITableColumn["width"];
  spacing?: number;
}
