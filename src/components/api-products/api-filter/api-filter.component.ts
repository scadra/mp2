import { FilterStoreModel } from "Models/filters/filter-store.model";
// Add dependencies
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
//Components
//Models
import { Api } from "Models/api/api.model";
import FilterDropdown from "Components/shared/filter-dropdown/filter-dropdown.vue";
import { Provider } from "@/models/api/provider.model";
import { FilterDropdownModel } from "@/models/filters/filter-dropdown.model";
import { NodeGraphQl } from "Models/graphql/node-graph-ql.model";

const ApiStore = namespace("ApiStore");

/**
 * Controller of api-list-container
 * @Component
 */
@Component({
  components: { FilterDropdown },
})
export default class ApiFilter extends Vue {
  providerFilter: FilterDropdownModel[];
  filters: FilterStoreModel[] = [];

  @ApiStore.Action
  addFilter!: (filter: FilterStoreModel) => void;

  @ApiStore.Action
  removeFilter!: (filter: FilterStoreModel) => void;

  beforeMount() {
    this.initFilters();
  }

  initFilters() {
    this.providerFilter = this.$static.providers.edges.map(
      (provider: NodeGraphQl<Provider>) => {
        return new FilterDropdownModel(provider.node.name);
      }
    );
  }

  /*@ApiStore.Getter
  getFilterDataByKey!: (key: string) => string[];

  @ApiStore.Action
  updateFilterData!: (filter: { filters: string[]; key: string }) => void;

  @ApiStore.Action
  sort!: () => void;

  @ApiStore.Action
  addFilter!: (filter: {
    callable: (data: Api[], filter: string[]) => Api[];
    filters: string[];
    key: string;
  }) => void;

  selectedFilter: string[] = [];
  filterListComponent: string[] = [];
  focus = false;
  filterData: string[] = [];

  created(): void {
    this.addFilter({
      callable: function (data: Api[], filters: string[]) {
        let hasTag = false;

        const apisByProvider = data.filter((e) => {
          if (filters.length) {
            for (let i = 0; i < filters.length; i++) {
              hasTag = filters[i].includes(e.provider);
              if (hasTag) {
                break;
              }
            }
          } else {
            return true;
          }
          return hasTag;
        });

        return apisByProvider;
      },
      filters: [],
      key: "tagFilter",
    });
  }

  mounted(): void {
    this.filterData = this.getFilterDataByKey("tagFilter");

    document.addEventListener("click", (e) => {
      if (
        e.target != this.$el.querySelector("#search") &&
        e.target != this.$el.querySelector(".filterList")
      ) {
        this.focus = false;
      }
    });
    if (this.filterData.length) {
      this.filterListComponent = this.filterList.filter((el) => {
        return this.filterData.indexOf(el);
      });
      return;
    }
    this.filterListComponent = this.filterList;
  }

  beforeUpdate(): void {
    this.filterData = this.getFilterDataByKey("tagFilter");
    if (this.filterData.length) {
      this.selectedFilter = this.filterData;
    }
  }

  removeSelectedTag(tag: string): void {
    this.filterListComponent.push(tag);
    this.selectedFilter = this.selectedFilter.filter((e) => e != tag);

    this.sortApis();
  }

  searchKey(searchKey: string): void {
    this.filterListComponent = this.filterList.filter((e) =>
      e.toLowerCase().includes(searchKey.toLowerCase())
    );
  }

  clearFilters(): void {
    this.filterListComponent = this.filterList;
    this.selectedFilter = [];

    this.sortApis();
  }

  addFilterTag(filter: string): void {
    this.filterListComponent = this.filterListComponent.filter(
      (e) => e != filter
    );
    this.selectedFilter.push(filter);

    this.sortApis();
  }

  sortApis(): void {
    this.updateFilterData({ filters: this.selectedFilter, key: "tagFilter" });
    this.sort();
  }*/
}
