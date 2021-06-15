
export class ResetPassword {
    email: String;
    validation: String;
    password: String;
    repeatPassword: String;

    constructor(email: String, validation: String) {
        this.email = email;
        this.validation = validation;
        this.password = "";
        this.repeatPassword = ""
    }
}