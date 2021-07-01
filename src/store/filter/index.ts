import { Module, Action, Mutation } from "vuex-module-decorators";
import StoreBase from "../store-base";

@Module({ namespaced: true })
export default class FiltersStore<T> extends StoreBase {
  /**
   * States
   * @T[]: the list of Data Objects to Store
   */
  protected data: T[] = [];
  protected dataSorted: T[] = [];
  protected filters: {
    callable: (data: T[], filter: string[]) => T[];
    filters: string[];
    key: string;
  }[] = [];

  get returnData(): T[] {
    return this.data;
  }

  get returnSortedData(): T[] {
    return this.dataSorted;
  }

  get returnFilters(): {
    callable: (data: T[], filter: string[]) => T[];
    filters: string[];
    key: string;
  }[] {
    return this.filters;
  }

  get getFilterDataByKey(): (key: string) => string[] {
    return (key: string) => {
      const filter = this.returnFilters.filter((e) => {
        return e.key == key;
      });

      return filter[0].filters;
    };
  }

  //Mutations
  @Mutation
  setSortedData(data: T[]): void {
    this.dataSorted = data;
  }

  @Mutation
  setData(data: T[]): void {
    this.data = data;
  }

  @Mutation
  pushFilter(filter: {
    callable: (data: T[], filter: string[]) => T[];
    filters: string[];
    key: string;
  }): void {
    if (!this.filters.filter((e) => e.key == filter.key).length) {
      this.filters.push(filter);
    }
  }

  @Mutation
  setFilterData(filter: { filters: string[]; key: string }): void {
    let index = 0;
    let found = false;
    for (let i = 0; i < this.filters.length; i++) {
      if (this.filters[i].key == filter.key) {
        found = true;
        break;
      }
      index++;
    }

    if (found) {
      this.filters[index].filters = filter.filters;
    }
  }

  //Actions
  @Action
  async sort(): Promise<void> {
    let sortedData = this.data;
    for (let i = 0; i < this.filters.length; i++) {
      sortedData = this.filters[i].callable(
        sortedData,
        this.filters[i].filters
      );
    }

    this.context.commit("setSortedData", sortedData);
  }

  @Action
  async addFilter(filter: {
    callable: (data: T[], filter: string[]) => T[];
    filters: string[];
    key: string;
  }): Promise<void> {
    this.context.commit("pushFilter", filter);
  }

  @Action
  async addData(data: T[]): Promise<void> {
    this.context.commit("setData", data);
  }

  @Action
  async updateFilterData(filter: {
    filters: string[];
    key: string;
  }): Promise<void> {
    this.context.commit("setFilterData", filter);
  }
}
