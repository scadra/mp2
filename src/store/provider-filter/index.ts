import { Module, Action, Mutation } from "vuex-module-decorators";
import StoreBase from "../store-base";
import { Provider } from "Models/api/provider.model";

@Module({ namespaced: true })
export default class ProvidersFilterStore extends StoreBase {
  /**
   * States
   * @Provider[] providers: the list of APIs Providers
   */
  private currentFilter: Provider[] = [];

  get returnProviderFilter(): Provider[] {
    return this.currentFilter;
  }

  //Mutations
  @Mutation
  setProviderFilter(filter: Provider[]): void {
    this.currentFilter = filter;
  }

  @Action
  async setCurrentFilter(filter: Provider[]): Promise<void> {
    this.context.commit("setProviderFilter", filter);
  }
}
