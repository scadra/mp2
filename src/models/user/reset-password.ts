
export class ResetPassword {
    email: string;
    validation: string;
    password: String;
    repeatPassword: String;

    constructor(email: string, validation: string) {
        this.email = email;
        this.validation = validation;
        this.password = "";
        this.repeatPassword = ""
    }
}