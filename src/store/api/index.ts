import { Module, Action } from "vuex-module-decorators";
import StoreBase from "../store-base";
import { StoreEnum } from "Models/enum/store.enum";
import { Api } from "Models/api/api.model";
import ApiService from "Services/api/api.service";

@Module({ namespaced: true })
export default class ApiStore extends StoreBase {
  // Services
  private apiService = new ApiService();

  private apiMessageError =
    "An error occured when trying to fetch APIs. Please try again or contact Luxhub support (TDB).";

  /**
   * States
   * @Api[] apis: the list of APIs
   */
  private apis: Api[];

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
