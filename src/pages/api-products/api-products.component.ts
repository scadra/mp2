// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";
//Models
import { Api } from "Models/api/api.model";
import DATA from "./mock.json";
//Components
import ApiCard from "Components/api-products/api-card/api-card.vue";

/**
 * The api-products page
 * @class
 */
@Component({
  metaInfo: {
    title: "api-products",
  },
  components: {
    ApiCard,
  },
})
export default class ApiProducts extends Vue {
  //@Inject()
  //private apiProductsService!: IApiProductsService;

  apiProducts: Api[] = DATA;
}
