// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";

//Components
import ApiListContainer from "Components/api-products/api-list-container/api-list-container.vue";
import ApiFilter from "Components/api-products/api-filter/api-filter.vue";
import Search from "Components/inputs/search/search.vue";
import Sort from "Components/api-products/sort-api/sort-input.vue";

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
    Search,
    Sort,
  },
})
export default class ApiProducts extends Vue {
  filterList: string[];

  created(): void {
    this.filterList = this.$static.providers.edges.map((el: any) => {
      return el.node.name;
    });
  }
}
