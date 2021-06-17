import { VuexModule, Mutation } from "vuex-module-decorators";

export default class StoreBase extends VuexModule {

  protected isLoading = false;
  protected errorMessage: string | null = null;

  //getters
  get returnIsLoading(): boolean {
    return this.isLoading;
  }

  get returnErrorMessage():  string | null {
    return this.errorMessage;
  }

  //Mutations
  @Mutation
  setIsLoading(response: boolean): void {
    this.isLoading = response;
  }

  @Mutation
  setErrorMessage(response: string | null): void {
    this.errorMessage = response;
  }

}
