import { Component } from "vue-property-decorator";
import Vue from "vue";
import { namespace } from "vuex-class";
// Models
import { FilterStoreModel } from "Models/filters/filter-store.model";
import { Api } from "Models/api/api.model";
import { SortDropdownModel } from "Models/filters/sort-dropdown.model";
import { DirectionSortEnum } from "Models/enum/direction-sort.enum";
// Components
import Badge from "Components/shared/badge/badge.vue";
import FieldButton from "Components/inputs/field-button/field-button.vue";
import SortDropdown from "Components/shared/sort-dropdown/sort-dropdown.vue";
import { RouteUtil } from "Utils/router-util";

const ApiStore = namespace("ApiStore");

/**
 * Controller of api-list-container
 * @Component
 */
@Component({
  components: {
    FieldButton,
    Badge,
    SortDropdown,
  },
})
export default class ApiFilterHeader extends Vue {
  filterStore = new FilterStoreModel("global");
  sortOptions: SortDropdownModel[];
  sortSelected = new SortDropdownModel(
    "Api name ascending",
    "name",
    DirectionSortEnum.ASC
  );

  @ApiStore.Action
  updateFilters!: (filter: FilterStoreModel<Api>) => void;

  @ApiStore.Action
  search!: () => Promise<void>;

  @ApiStore.Action
  addSortOption!: (sortOption: SortDropdownModel) => void;

  beforeMount(): void {
    this.initSortOptions();
    this.initSort();
    this.addSortOption(this.sortSelected);
    this.initFilterStore();
    this.initLambda();
  }

  removeFilter(tag: string): void {
    const index = this.filterStore.filters.findIndex((model) => model === tag);
    if (index > -1) {
      this.filterStore.filters.splice(index, 1);
    }
    this.applychanges();
  }

  initSortOptions(): void {
    this.sortOptions = [
      this.sortSelected,
      new SortDropdownModel(
        "Api name descending",
        "name",
        DirectionSortEnum.DESC
      ),
    ];
  }

  initLambda(): void {
    this.filterStore.lambda = (api: Api, toSearch: string[]) => {
      return toSearch.some((search) => {
        return (
          api.version.toUpperCase().includes(search.toUpperCase()) ||
          api.provider.toUpperCase().includes(search.toUpperCase()) ||
          api.description.toUpperCase().includes(search.toUpperCase()) ||
          api.environments.toUpperCase().includes(search.toUpperCase()) ||
          api.name.toUpperCase().includes(search.toUpperCase())
        );
      });
    };
  }

  initFilterStore(): void {
    this.filterStore.filters = RouteUtil.getParamsByKey(
      this.$route,
      this.filterStore.key
    );
  }

  initSort(): void {
    const sortOption = RouteUtil.getParamsByKey(this.$route, "sort");
    if (sortOption.length > 1) {
      this.sortSelected = this.sortOptions.find(
        (sort) => sort.direction === sortOption[1] && sort.key === sortOption[0]
      );
    }
  }

  sort(): void {
    RouteUtil.setParams(this.$route, "sort", [
      this.sortSelected.key,
      this.sortSelected.direction,
    ]);
    this.addSortOption(this.sortSelected);
  }

  applychanges(toSearch?: string): void {
    if (toSearch) {
      this.filterStore.filters.push(toSearch);
    }
    RouteUtil.setParams(
      this.$route,
      this.filterStore.key,
      this.filterStore.filters
    );
    this.updateFilters(this.filterStore);
    this.search();
  }
}
