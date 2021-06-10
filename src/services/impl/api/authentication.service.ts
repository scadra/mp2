// Interfaces
import IAuthenticationService from "Interfaces/api/authentication.interface";
//Models
import { UserLogin } from "Models/user/user-login";
// Dependencies
import { injectable } from "inversify-props";
import axios, {AxiosResponse} from "axios";

axios.defaults.withCredentials = true

@injectable()
export default class AuthenticationService implements IAuthenticationService {

  private path: string = "api";

  /**
   * login
   * @UserLogin user information: username + password
   * @return Promise function with type void
   */
  async login(user: UserLogin): Promise<void> {
    let resp:AxiosResponse = null;

    let captchaHeader = user.recaptcha != null ? {
      headers: {captchaCode: user.recaptcha}
    } : {};

    await axios.post(`${this.path}/login`, user, captchaHeader)
      .then(response => resp = response)
      .catch(error => console.log("Error: " + error + " - " + (typeof error)));

    if (resp != null) {
      return resp.data
    }

    return new Promise<void>((resolve, reject) => reject())
  }

  async logout(): Promise<void> {
    // TODO logout on SSO
    return new Promise<void>((resolve, reject) => resolve())
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
   * @String email of the user who wants to reset the password
   * @String response from reCaptcha
   * @return Promise function with type void
   */
  async resetPassword(email: String, recaptchaResponse: String): Promise<void> {
    let resp: AxiosResponse = null;
    const options = {
      headers: {'captchaCode': recaptchaResponse}
    };

    await axios.post(`/${this.path}/reset-password`, {"email": email}, options)
    .then(response => resp = response)
    .catch(error => console.log("Error: " + error + " - " + (typeof error)));

    if (resp != null) {
      return resp.data
    }

    return new Promise<void>((resolve, reject) => reject())
  }
}
