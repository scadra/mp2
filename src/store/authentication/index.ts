import { ResetPassword } from "Models/user/reset-password";
import { UserLogin } from "Models/user/user-login";
import { Module, Mutation, Action } from "vuex-module-decorators";
import StoreBase from "../store-base";
import { StoreEnum } from "Models/enum/store.enum";
import AuthenticationService from "Services/api/authentication.service";

/**
 * Define the authentication module
 * @Module
 */
@Module({ namespaced: true })
export default class AuthenticationStore extends StoreBase {
  // Services
  private authenticationService = new AuthenticationService();

  private resetMessageError =
    "You requested a password reset but an error occurred. Please try again or contact Luxhub support (TDB).";

  /**
   * States
   * @StepResponse step: The actual step
   * @string | @null errorMsg: The error message to display
   */
  private isAuth = false;

  //getters
  get returnIsAuth(): boolean {
    return this.isAuth;
  }

  @Mutation
  setIsAuth(response: boolean): void {
    this.isAuth = response;
  }

  @Action
  async login(user: UserLogin): Promise<void> {
    this.context.commit(StoreEnum.SETISLOADING, true);
    try {
      await this.authenticationService.login(user);

      this.context.commit(StoreEnum.SETERRORMESSAGE, null);
      this.context.commit("setIsAuth", true);
    } catch (error) {
      this.context.commit(
        StoreEnum.SETERRORMESSAGE,
        "Username and password do not match or you do not have an account yet."
      );
    } finally {
      this.context.commit(StoreEnum.SETISLOADING, false);
    }
  }

  @Action
  async resetPassword(email: string, recaptchaResponse: string): Promise<void> {
    this.context.commit(StoreEnum.SETISLOADING, true);
    try {
      await this.authenticationService.resetPassword(email, recaptchaResponse);
      this.context.commit(StoreEnum.SETERRORMESSAGE, null);
    } catch (error) {
      this.context.commit(StoreEnum.SETERRORMESSAGE, this.resetMessageError);
    } finally {
      this.context.commit(StoreEnum.SETISLOADING, false);
    }
  }

  @Action
  async changePassword(resetPassword: ResetPassword): Promise<void> {
    this.context.commit(StoreEnum.SETISLOADING, true);
    try {
      await this.authenticationService.changePassword(resetPassword);
      this.context.commit(StoreEnum.SETERRORMESSAGE, null);
    } catch (error) {
      this.context.commit(StoreEnum.SETERRORMESSAGE, this.resetMessageError);
    } finally {
      this.context.commit(StoreEnum.SETISLOADING, false);
    }
  }

  @Action
  reinitMessage(): void {
    this.context.commit(StoreEnum.SETERRORMESSAGE, null);
  }
}
