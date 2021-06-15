import { ResetPassword } from 'Models/user/reset-password';
import IAuthenticationService from 'Interfaces/api/authentication.interface';
import { UserLogin } from 'Models/user/user-login';
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { Inject } from 'inversify-props';
import StoreBase from '../store-base';
import { StoreEnum } from 'Models/enum/store.enum';

/**
 * Define the authentication module
 * @Module
 */
@Module({ namespaced: true })
export default class AuthenticationStore extends StoreBase {

  @Inject()
  private authenticationService!: IAuthenticationService;
  private resetMessageError: String = 'You requested a password reset but an error occurred. Please try again or contact Luxhub support (TDB).';

  /**
   * States
   * @StepResponse step: The actual step
   * @string | @null errorMsg: The error message to display
   */
  private isAuth: boolean = false;

  //getters
  get returnIsAuth() {
    return this.isAuth;
  }

  @Mutation
  setIsAuth(response: boolean) {
    this.isAuth = response;
  }

  @Action
  async login(user: UserLogin): Promise<void> {
    console.log(user)
    debugger;
    this.context.commit(StoreEnum.SETISLOADING, true);
    try {
      console.log(user)
      console.log(this.authenticationService)
        await this.authenticationService.login(user);
        
        this.context.commit(StoreEnum.SETERRORMESSAGE, null);
        this.context.commit('setIsAuth', true);
    } catch(error) {
        console.log(error)
        this.context.commit(StoreEnum.SETERRORMESSAGE, "Username and password do not match or you do not have an account yet.");
    } finally {
        this.context.commit(StoreEnum.SETISLOADING, false);
    }
  }

  @Action
  async resetPassword(email: String, recaptchaResponse: String): Promise<void> {
    this.context.commit(StoreEnum.SETISLOADING, true);
    try {
      await this.authenticationService.resetPassword(email, recaptchaResponse);
      this.context.commit(StoreEnum.SETERRORMESSAGE, null);
    } catch(error) {
      this.context.commit(StoreEnum.SETERRORMESSAGE, this.resetMessageError);
    } finally {
      this.context.commit(StoreEnum.SETISLOADING, false);
    }
  }

  @Action
  async changePassword(resetPassword: ResetPassword): Promise<void> {
    this.context.commit(StoreEnum.SETISLOADING, true)
    try {
      await this.authenticationService.changePassword(resetPassword);
      this.context.commit(StoreEnum.SETERRORMESSAGE, null);
    } catch(error) {
      this.context.commit(StoreEnum.SETERRORMESSAGE, this.resetMessageError);
    } finally {
      this.context.commit(StoreEnum.SETISLOADING, false);
    }
  }

  @Action
  async reinitMessage() {
    this.context.commit(StoreEnum.SETERRORMESSAGE, null);
  }
}
