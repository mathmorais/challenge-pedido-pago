enum RowVariations {
  contribuitor,
  role,
}

export interface ITableRow {
  id: number;
  [key: string]: any;
  variation?: RowVariations;
}
