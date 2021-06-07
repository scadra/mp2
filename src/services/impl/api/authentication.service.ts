// Interfaces
import IAuthenticationService from "Interfaces/api/authentication.interface";
//Models
import { UserLogin } from "Models/user/user-login";
// Dependencies
import { injectable } from "inversify-props";
import axios from "axios";

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
    const response = await axios.post(`${this.path}/login`, user);
    return response.data
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
   * @String email of the user which want to reset the password
   * @return Promise function with type void
   */
  async resetPassword(email: String): Promise<void> {
    return await axios.post(`/api/reset-password`, email);
  }
}
