import { UserLogin } from 'Models/user/user-login';
//Default interface authentication
export default interface IAuthenticationService {
    login(user: UserLogin):Promise<void>;
    secure(user: UserLogin):Promise<void>;
}