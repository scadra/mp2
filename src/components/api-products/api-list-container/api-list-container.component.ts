// Add dependencies
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
//Components
import ApiCard from "Components/api-products/api-card/api-card.vue";
//Models
import { Api } from "Models/api/api.model";

//ApiStore for veux sharing data
const ApiStore = namespace("ApiStore");
/**
 * Controller of api-list-container
 * @Component
 */
@Component({
  components: {
    ApiCard,
  },
})
export default class ApiListContainer extends Vue {
  //ApiStore Action
  @ApiStore.Action
  addData!: (data: Api[]) => void;
  @ApiStore.Action
  sort!: () => void;

  //ApiStore Getter
  @ApiStore.Getter
  returnData!: Api[];
  @ApiStore.Getter
  returnSortedData!: Api[];
  @ApiStore.Getter
  returnFilters!: {
    callable: (data: Api[], filter: string[]) => Api[];
    filters: string[];
    key: string;
  }[];

  apiProductsComponent: Api[] = [];

  mounted(): void {
    this.addData(
      this.$static.apis.edges.map((el: any) => {
        return el.node;
      })
    );

    if (this.returnFilters.length) {
      this.sort();
      this.apiProductsComponent = this.returnSortedData;
      return;
    }
    this.apiProductsComponent = this.returnData;
  }

  @Watch("returnSortedData")
  changeFilter(): void {
    this.apiProductsComponent = this.returnSortedData;
  }
}
