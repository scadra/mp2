// Add dependencies
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
//Components
import ApiCard from "Components/api-products/api-card/api-card.vue";
//Models
import { Api } from "Models/api/api.model";
import { Provider } from "Models/api/provider.model";

const ProvidersFilterStore = namespace("ProvidersFilterStore");
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
  @ProvidersFilterStore.Getter
  returnProviderFilter!: Provider[];

  apiProducts: Api[] = [];
  apiProductsComponent: Api[] = [];

  mounted(): void {
    this.apiProducts = this.$static.apis.edges.map((el: any) => {
      return el.node;
    });

    if (this.returnProviderFilter.length) {
      this.changeFilter(this.returnProviderFilter);
      return;
    }
    this.apiProductsComponent = this.apiProducts;
  }

  @Prop() filterProvider: Provider[];

  @Watch("returnProviderFilter")
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
