import { ResetPassword } from "Models/user/reset-password";
import { UserLogin } from "Models/user/user-login";
//Default interface authentication
export default interface IAuthenticationService {
  login(user: UserLogin): Promise<void>;
  logout(): Promise<void>;
  secure(user: UserLogin): Promise<void>;
  resetPassword(email: string, recaptchaResponse: string): Promise<void>;
  changePassword(resetPassword: ResetPassword): Promise<void>;
}
