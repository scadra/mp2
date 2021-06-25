import { Module, Action, Mutation } from "vuex-module-decorators";
import { Inject } from "inversify-props";
import StoreBase from "../store-base";
import IApiService from "@/services/interfaces/api/api.interface";
import { StoreEnum } from "@/models/enum/store.enum";
import { Api } from "@/models/api/api.model";

@Module({ namespaced: true })
export default class ApiStore extends StoreBase {
  @Inject()
  private apiService!: IApiService;
  private apiMessageError =
    "An error occured when trying to fetch APIs. Please try again or contact Luxhub support (TDB).";

  /**
   * States
   * @[Api] apis: the list of APIs
   */
  private apis: [Api];

  // getters
  get returnApis(): [Api] {
    return this.apis;
  }

  @Mutation
  setApiProducts(apis: [Api]): void {
    this.apis = apis;
  }

  @Action
  async getApiCards(): Promise<void> {
    this.context.commit(StoreEnum.SETISLOADING, true);
    try {
      await this.apiService.getApiCards();
      this.context.commit(StoreEnum.SETERRORMESSAGE, null);
    } catch (error) {
      this.context.commit(StoreEnum.SETERRORMESSAGE, this.apiMessageError);
    } finally {
      this.context.commit(StoreEnum.SETISLOADING, false);
    }
  }
}
