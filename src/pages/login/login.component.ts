import { namespace } from "vuex-class";
// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";

//Components
import LoginForm from "Components/login/login-form/login-form.vue";

//Models
import { UserLogin } from "Models/user/user-login";
import { Validations } from "vuelidate-property-decorators";
import { ValidationLoginModel } from "Validations/login.validation";
import Notification from "Components/shared/notification/notification.vue";
import VueRecaptcha from "vue-recaptcha";

const AuthenticationStore = namespace("AuthenticationStore");

/**
 * The home page
 * @class
 */
@Component({
  metaInfo: {
    title: "log-in",
  },
  components: {
    LoginForm,
    Notification,
    VueRecaptcha,
  },
})
export default class Login extends Vue {
  @AuthenticationStore.Action
  login!: (user: UserLogin) => Promise<void>;

  @AuthenticationStore.Action
  reinitMessage!: () => void;

  @AuthenticationStore.Getter
  returnIsLoading!: () => boolean;

  @AuthenticationStore.Getter
  returnErrorMessage!: () => string | null;

  @AuthenticationStore.Getter
  returnIsAuth!: () => boolean;

  errorClick = 0;

  recaptchaValid: string = null;

  user: UserLogin = {
    username: "",
    password: "",
    recaptcha: null,
  };

  keyRecaptcha: string = process.env.GRIDSOME_RECAPTCHA;

  // Validation for the form
  @Validations() validations = ValidationLoginModel;

  // Hook
  beforeMount(): void {
    this.reinitMessage();
  }

  async signIn(): Promise<void> {
    this.user.recaptcha = this.recaptchaValid;
    await this.login(this.user);
    if (this.returnIsAuth) {
      this.$router.push("/");
    }
    this.errorClick++;
  }

  onCaptchaVerify(response: string): void {
    this.recaptchaValid = response;
  }

  onCaptchaExpired(): void {
    this.recaptchaValid = null;
  }

  disableButton(): boolean {
    return (
      this.$v.$invalid || (this.errorClick >= 3 && this.recaptchaValid == null)
    );
  }

  redirectMessage(): string {
    let message = "";
    if (this.$route.query.resetSent) {
      message =
        "You requested a password reset. You should receive an email with instructions on how to reset your password.";
    } else if (this.$route.query.passwordUpdated) {
      message = "You password has been successfully updated";
    }
    return message;
  }
}
