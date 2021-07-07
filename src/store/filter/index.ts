import { StoreEnum } from "Models/enum/store.enum";
import { Module, Action, Mutation } from "vuex-module-decorators";
import StoreBase from "../store-base";
import { FilterStoreModel } from "Models/filters/filter-store.model";
import { ArrayUtil } from "Utils/array-util";

@Module({ namespaced: true })
export default class FiltersStore<T> extends StoreBase {
  /**
   * States
   * @T[]: the list of Data Objects to Store
   */
  protected data: T[] = [];
  protected filteredData: T[] = [];
  protected filters: FilterStoreModel[] = [];

  get returnFilters(): FilterStoreModel[] {
    return this.filters;
  }

  get returnData(): T[] {
    return this.filters.length > 0 ? this.filteredData : this.data;
  }

  @Mutation
  setData(data: T[]): void {
    this.data = data;
  }

  @Mutation
  setFilteredData(filteredData: T[]): void {
    this.filteredData = filteredData;
  }

  @Mutation
  setFilters(filters: FilterStoreModel[]): void {
    this.filters = filters;
  }

  @Action
  addFilter(newFilter: FilterStoreModel): void {
    const index = this.filters.findIndex(
      (filter) => filter.key === newFilter.key
    );
    if (index > -1) {
      this.filters[index].filters = ArrayUtil.mergeArrayWithoutDuplicate(
        this.filters[index].filters,
        newFilter.filters
      );
    } else {
      this.filters.push(newFilter);
    }
    this.context.commit(StoreEnum.SETFILTERS, this.filters);
  }

  @Action
  removeFilter(newFilter: FilterStoreModel): void {
    const index = this.filters.findIndex(
      (filter) => filter.key === newFilter.key
    );
    if (index > -1) {
      if (this.filters[index].filters.length === 1) {
        this.filters.splice(index, 1);
      } else {
        this.filters[index].filters = ArrayUtil.substractArrays(
          this.filters[index].filters,
          newFilter.filters
        );
      }
    }
    this.context.commit(StoreEnum.SETFILTERS, this.filters);
  }

  @Action
  addData(data: T[]): void {
    this.context.commit(StoreEnum.SETDATA, data);
  }
}
