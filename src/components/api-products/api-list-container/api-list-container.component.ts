// Add dependencies
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
//Components
import ApiCard from "Components/api-products/api-card/api-card.vue";
//Models
import { Api } from "Models/api/api.model";
import DATA from "Pages/api-products/mock.json";
import { Provider } from "@/models/api/provider.model";

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
  apiProducts: Api[] = DATA;
  apiProductsComponent: Api[] = [];

  mounted(): void {
    this.apiProductsComponent = this.apiProducts;
  }

  @Prop() filterProvider: Provider[];

  @Watch("currentFilter")
  changeFilter(newFilter: Provider[]): void {
    let hasProvider = false;

    this.apiProductsComponent = this.apiProducts.filter((e) => {
      if (newFilter.length) {
        for (let i = 0; i < newFilter.length; i++) {
          hasProvider = newFilter[i].name.includes(e.provider);
          if (hasProvider) {
            break;
          }
        }
      } else {
        return true;
      }
      return hasProvider;
    });
  }
}
