import { FilterStoreModel } from "Models/filters/filter-store.model";
// Add dependencies
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
//Components
//Models
import { Api } from "Models/api/api.model";
import FilterDropdown from "Components/shared/filter-dropdown/filter-dropdown.vue";
import { Provider } from "@/models/api/provider.model";
import { FilterDropdownModel } from "@/models/filters/filter-dropdown.model";
import { NodeGraphQl } from "Models/graphql/node-graph-ql.model";
import { RouteUtil } from "Utils/router-util";

const ApiStore = namespace("ApiStore");

/**
 * Controller of api-list-container
 * @Component
 */
@Component({
  components: { FilterDropdown },
})
export default class ApiFilterProvider extends Vue {
  providerFilter: FilterDropdownModel[];
  filterStore = new FilterStoreModel("providers");

  @ApiStore.Action
  updateFilters!: (filter: FilterStoreModel<Api>) => void;

  @ApiStore.Action
  search!: () => Promise<void>;

  beforeMount(): void {
    this.initFilterStore();
    this.initLambda();
    this.initFilters();
  }

  initLambda(): void {
    this.filterStore.lambda = (api: Api, toSearch: string[]) => {
      return toSearch.includes(api.provider.toUpperCase());
    };
  }

  initFilters(): void {
    this.providerFilter = this.$static.providers.edges.map(
      (provider: NodeGraphQl<Provider>) => {
        return new FilterDropdownModel(
          provider.node.name,
          provider.node.providerId.toUpperCase()
        );
      }
    );
  }

  initFilterStore(): void {
    const routeQuery = RouteUtil.getParamsByKey(
      this.$route,
      this.filterStore.key
    );
    if (routeQuery.length > 0) {
      this.filterStore.filters = routeQuery;
    }
  }

  applychanges(): void {
    RouteUtil.setParams(
      this.$route,
      this.filterStore.key,
      this.filterStore.filters
    );
    this.updateFilters(this.filterStore);
    this.search();
  }
}
