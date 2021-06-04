import { Token } from 'Models/keycloak/token.interface';
import IAuthenticationService from 'Interfaces/api/authentication.interface';
import { UserLogin } from 'Models/user/user-login';
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { Inject } from 'inversify-props';

/**
 * Define the authentication module
 * @Module
 */
@Module({ namespaced: true })
export default class AuthenticationStore extends VuexModule {

  @Inject()
  private authenticationService!: IAuthenticationService;

  /**
   * States
   * @StepResponse step: The actual step
   * @string | @null errorMsg: The error message to display
   */
  private isLoading: boolean = false;
  private errorMessage: String | null = null;
  private isAuth: boolean = false;

  //getters
  get returnIsLoading() {
    return this.isLoading;
  }

  get returnErrorMessage() {
    return this.errorMessage;
  }

  get returnIsAuth() {
    return this.isAuth;
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

  @Mutation
  setIsAuth(response: boolean) {
    this.isAuth = response;
  }


  @Action
  async login(user: UserLogin): Promise<void> {
    this.context.commit('setIsLoading', true);
    try {
        await this.authenticationService.login(user);
        this.context.commit('setErrorMessage', null);
        this.context.commit('setIsAuth', true);
    } catch(response) {
        this.context.commit('setErrorMessage', response.data.detail);
        this.context.commit('setIsAuth', false);
    } finally {
        this.context.commit('setIsLoading', false);
    }
  }
}