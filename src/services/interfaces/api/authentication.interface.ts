import { UserLogin } from 'Models/user/user-login';
//Default interface authentication
export default interface IAuthenticationService {
    login(user: UserLogin):Promise<void>
    resetPassword(email: String): Promise<void>
}