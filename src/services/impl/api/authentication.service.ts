// Interfaces
import IAuthenticationService from "Interfaces/api/authentication.interface";
//Models
import { UserLogin } from "Models/user/user-login";
// Dependencies
import { injectable } from "inversify-props";
import axios from "axios";
import { ResetPassword } from "Models/user/reset-password";

axios.defaults.withCredentials = true;

@injectable()
export default class AuthenticationService implements IAuthenticationService {
  private path = "api";

  /**
   * login
   * @UserLogin user information: username + password
   * @return Promise function with type void
   */
  async login(user: UserLogin): Promise<void> {
    const options = this.initHeaderWithCaptcha(user.recaptcha);
    try {
      await axios.post(`${this.path}/login`, user, options);
    } catch (error) {
      console.log("Error: " + error + " - " + typeof error);
      throw Error(error);
    }
  }

  async logout(): Promise<void> {
    // TODO logout on SSO
    return new Promise<void>((resolve) => resolve());
  }

  /**
   * secure post
   * @UserLogin user information: username + password
   * @return Promise function with type void
   */
  async secure(user: UserLogin): Promise<void> {
    return await axios.post(`${this.path}/not-secure`, user);
  }

  /**
   * resetPassword
   * @string email of the user who wants to reset the password
   * @string response from reCaptcha
   * @return Promise function with type void
   */
  async resetPassword(email: string, recaptchaResponse: string): Promise<void> {
    const options = this.initHeaderWithCaptcha(recaptchaResponse);
    try {
      return axios.post(
        `${this.path}/reset-password`,
        { email: email },
        options
      );
    } catch (error) {
      console.log("Error: " + error + " - " + typeof error);
      throw Error(error);
    }
  }

  /**
   * changePassword
   * @ResetPassword resetPassword with the different informations needed
   * @return Promise function with type void
   */
  async changePassword(resetPassword: ResetPassword): Promise<void> {
    delete resetPassword.repeatPassword;
    return await axios.post(
      `${window.location.protocol + "//" + window.location.host}/${this.path}/update-forgotten-password`,
      resetPassword
    );
  }

  /**
   * initHeaderWithCaptcha
   * @ResetPassstringword recaptcha
   * @return Promise function with type void
   */
  private initHeaderWithCaptcha(recaptcha: string) {
    return recaptcha != null
      ? {
          headers: { captchaCode: recaptcha },
        }
      : {};
  }
}
