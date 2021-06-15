import { VuexModule, Mutation, Action } from "vuex-module-decorators";

export default class StoreBase extends VuexModule {

  protected isLoading: boolean = false;
  protected errorMessage: String | null = null;

  //getters
  get returnIsLoading() {
    return this.isLoading;
  }

  get returnErrorMessage() {
    return this.errorMessage;
  }

  //Mutations
  @Mutation
  setIsLoading(response: boolean) {
    this.isLoading = response;
  }

  @Mutation
  setErrorMessage(response: String | null) {
    this.errorMessage = response;
  }

}
