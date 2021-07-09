import { SortDropdownModel } from "Models/filters/sort-dropdown.model";
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
  protected filters: FilterStoreModel<T>[] = [];
  protected sortOption: SortDropdownModel = null;

  get returnFilters(): FilterStoreModel<T>[] {
    return this.filters;
  }

  get returnData(): T[] {
    const result = this.filters.length > 0 ? this.filteredData : this.data;
    return this.sortOption != null
      ? ArrayUtil.sortData(
          result,
          this.sortOption.key,
          this.sortOption.direction
        )
      : result;
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
  setFilters(filters: FilterStoreModel<T>[]): void {
    this.filters = filters;
  }

  @Mutation
  setSortOption(sortOption: SortDropdownModel): void {
    this.sortOption = sortOption;
  }

  @Action
  updateFilters(newFilter: FilterStoreModel<T>): void {
    const index = this.filters.findIndex(
      (filter) => filter.key === newFilter.key
    );
    if (index > -1) {
      if (newFilter.filters.length === 0) {
        this.filters.splice(index, 1);
      } else {
        this.filters[index].filters = ArrayUtil.mergeArrayWithoutDuplicate(
          this.filters[index].filters,
          newFilter.filters
        );
      }
    } else {
      this.filters.push(newFilter);
    }
    this.context.commit(StoreEnum.SETFILTERS, this.filters);
  }

  @Action
  addData(data: T[]): void {
    this.context.commit(StoreEnum.SETDATA, data);
  }

  @Action
  addSortOption(sortOption: SortDropdownModel): void {
    this.context.commit(StoreEnum.SETSORTOPTION, sortOption);
  }

  @Action
  search(): void {
    let result = this.data;
    this.filters.forEach((toFind) => {
      result = result.filter((data) => {
        return toFind.lambda(data, toFind.filters);
      });
    });

    this.context.commit(StoreEnum.SETFILTEREDDATA, result);
  }
}
