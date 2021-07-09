// Add dependencies
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
//Components
import ApiCard from "Components/api-products/api-card/api-card.vue";
//Models
import { Api } from "Models/api/api.model";
import { CONVERTOR } from "Utils/convertor";

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
  returnData!: () => Api[];

  apiProductsComponent: Api[] = [];

  beforeMount(): void {
    this.addData(CONVERTOR.convertGraphQlToObject(this.$static.apis.edges));
  }
}
