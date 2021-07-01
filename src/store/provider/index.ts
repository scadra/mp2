import { Module, Action } from "vuex-module-decorators";
import { Inject } from "inversify-props";
import StoreBase from "../store-base";
import IProviderService from "Interfaces/api/provider.interface";
import { StoreEnum } from "Models/enum/store.enum";
import { Provider } from "Models/api/provider.model";

@Module({ namespaced: true })
export default class ProvidersStore extends StoreBase {
  @Inject()
  private providerService!: IProviderService;
  private providerMessageError =
    "An error occured when trying to fetch APIs Providers. Please try again or contact Luxhub support (TDB).";

  /**
   * States
   * @Provider[] providers: the list of APIs Providers
   */
  private providers: Provider[];

  @Action
  async getApiProvides(): Promise<void> {
    this.context.commit(StoreEnum.SETISLOADING, true);
    try {
      await this.providerService.getApiProviders();
      this.context.commit(StoreEnum.SETERRORMESSAGE, null);
    } catch (error) {
      this.context.commit(StoreEnum.SETERRORMESSAGE, this.providerMessageError);
    } finally {
      this.context.commit(StoreEnum.SETISLOADING, false);
    }
  }
}
