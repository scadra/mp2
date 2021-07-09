export class FilterStoreModel<T> {
  filters: string[];
  key: string;
  lambda: (model: T, toSearch: string[]) => boolean;

  constructor(key: string) {
    this.key = key;
    this.filters = [];
  }
}
