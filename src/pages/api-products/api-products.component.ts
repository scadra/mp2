// Dependencies
import { Component, Inject } from "vue-property-decorator";
import Vue from "vue";
//Models
import { Api } from "Models/api/api.model";
//import DATA from "./mock.json";
//Components
import ApiCard from "Components/api-products/api-card/api-card.vue";
import { namespace } from "vuex-class";
//import IApiService from "@/services/interfaces/api/api.interface";
//import ApiService from "@/services/impl/api/api.service";
//import ApiStore from "@/store/api";

const ApiStore = namespace("ApiStore");

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
  @ApiStore.Action
  getApiCards!: () => void;

  //apiProducts: Api[] = DATA;
  //@Inject()
  //private apiService!: IApiService;

  // Hook
  beforeMount(): void {
    //this.reinitMessage();
  }
}
