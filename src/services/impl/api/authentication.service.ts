// Interfaces
import IAuthenticationService from "Interfaces/api/authentication.interface";
//Models
import { UserLogin } from "Models/user/user-login";
// Dependencies
import { injectable } from "inversify-props";
import axios from "axios";

@injectable()
export default class AuthenticationService implements IAuthenticationService {
  /**
   * login
   * @UserLogin user information: username + password
   * @return Promise function with type void
   */
  async login(user: UserLogin): Promise<void> {
    return await axios.post(`/api/login`, user);
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
