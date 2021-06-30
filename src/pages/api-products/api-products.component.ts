// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";

//Components
import ApiListContainer from "Components/api-products/api-list-container/api-list-container.vue";
import ApiFilter from "Components/api-products/api-filter/api-filter.vue";

//Models
import { Provider } from "@/models/api/provider.model";
import DATA from "Pages/api-products/api-filter-mock.json";

/**
 * The api-products page
 * @class
 */
@Component({
  metaInfo: {
    title: "api-products",
  },
  components: {
    ApiListContainer,
    ApiFilter,
  },
})
export default class ApiProducts extends Vue {
  apiProviders: Provider[] = DATA;
  filterProvider: Provider[] = [];

  filterApis(filter: Provider[]): void {
    this.filterProvider = filter;
  }
}
