import { namespace } from 'vuex-class';
// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";

//Components
import LoginForm from "Components/login/login-form/login-form.vue";

//Models
import { UserLogin } from 'Models/user/user-login';
import { Validations } from 'vuelidate-property-decorators';
import { ValidationLoginModel } from 'Validations/login.validation';
import Notification from 'Components/shared/notification/notification.vue';
import VueRecaptcha from 'vue-recaptcha';

const authenticationStore = namespace("AuthenticationStore");

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
    VueRecaptcha
  },
})
export default class Login extends Vue {

  @authenticationStore.Action
  login!: (user: UserLogin) => void;

  @authenticationStore.Getter
  returnIsLoading!: () => boolean;

  @authenticationStore.Getter
  returnErrorMessage!: () => String | null;

  @authenticationStore.Getter
  returnIsAuth!: () => boolean

  @authenticationStore.Getter
    returnResetPasswordSent!: () => boolean | false;

  errorClick: number = 0;

  recaptchaValid: String = null;

  user: UserLogin = {
    username: "",
    password: "",
    recaptcha: null,
  };

  keyRecaptcha: String = process.env.GRIDSOME_RECAPTCHA

  // Validation for the form
  @Validations() validations = ValidationLoginModel;

  // Hook
  beforeMount() {}

  async signIn() {
    this.user.recaptcha = this.recaptchaValid
    await this.login(this.user);
    if(this.returnIsAuth) {
      this.$router.push('/')
    }
    this.errorClick ++;
  }

  onCaptchaVerify(response: string) {
    this.recaptchaValid = response;
  }

  onCaptchaExpired() {
    this.recaptchaValid = null;
  }

  disableButton() {
    return this.$v.$invalid || this.errorClick >= 3 && this.recaptchaValid == null
  }
}
