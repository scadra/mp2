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
  private resetPasswordSent: boolean = false;

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

  get returnResetPasswordSent() {
    return this.resetPasswordSent;
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

  @Mutation
  setResetPasswordSent(isResetPasswordSent: boolean) {
    this.resetPasswordSent = isResetPasswordSent;
  }

  @Action
  async login(user: UserLogin): Promise<void> {
    this.context.commit('setIsLoading', true);
    try {
        await this.authenticationService.login(user);
        this.context.commit('setErrorMessage', null);
        this.context.commit('setIsAuth', true);
    } catch(error) {
        this.context.commit('setErrorMessage', "Username and password do not match or you do not have an account yet.");
        //this.context.commit('setIsAuth', true);
        //await this.authenticationService.secure(user);
    } finally {
        this.context.commit('setIsLoading', false);
    }
  }

  @Action
  async resetPassword(email: String, recaptchaResponse: String): Promise<void> {
    this.context.commit('setIsLoading', true);
    try {
      await this.authenticationService.resetPassword(email, recaptchaResponse);
      this.context.commit('setErrorMessage', null);
      this.context.commit('setResetPasswordSent', true);
    } catch(error) {
      this.context.commit('setErrorMessage', "You requested a password reset but an error occurred. Please try again or contact Luxhub support (TDB).");
    } finally {
      this.context.commit('setIsLoading', false);
    }
  }
}
