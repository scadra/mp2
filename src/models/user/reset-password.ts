
export class ResetPassword {
    email: string;
    validation: string;
    password: string;
    repeatPassword: string;

    constructor(email: string, validation: string) {
        this.email = email;
        this.validation = validation;
        this.password = "";
        this.repeatPassword = ""
    }
}