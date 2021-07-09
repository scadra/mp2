import { Provider } from "Models/api/provider.model";
import { NodeGraphQl } from "Models/graphql/node-graph-ql.model";
// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";

//Components
import ApiListContainer from "Components/api-products/api-list-container/api-list-container.vue";
import ApiFilterProvider from "Components/api-products/api-filters/api-filter-provider/api-filter-provider.vue";
import ApiFilterHeader from "Components/api-products/api-filters/api-filter-header/api-filter-header.vue";

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
    ApiFilterProvider,
    ApiFilterHeader,
  },
})
export default class ApiProducts extends Vue {
  filterList: string[];

  created(): void {
    this.filterList = this.$static.providers.edges.map(
      (el: NodeGraphQl<Provider>) => {
        return el.node.name;
      }
    );
  }
}
