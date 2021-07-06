export interface FilterStoreModel<T> {
  callable: (data: T[], filter: string[]) => T[];
  filters: string[];
  key: string;
}
