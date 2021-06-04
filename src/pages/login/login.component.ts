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
  login!: (user: UserLogin) => void

  @authenticationStore.Getter
  returnIsLoading!: () => boolean

  @authenticationStore.Getter
  returnErrorMessage!: () => String | null

  @authenticationStore.Getter
  returnIsAuth!: () => boolean

  errorClick: number = 0;

  checkRecaptcha: boolean = false;

  user: UserLogin = {
    username: "",
    password: ""
  };

  keyRecaptcha: String = process.env.GRIDSOME_RECAPTCHA

  // Validation for the form
  @Validations() validations = ValidationLoginModel;

  // Hook
  beforeMount() {
  }

  async signIn() {
    await this.login(this.user);
    if(this.returnIsAuth) {
      this.$router.push('/')
    }
    this.errorClick ++; 
  }

  onVerify(response: String) {
    if(response) {
      this.checkRecaptcha = true;
    }
  }

  disableButton() {
    return this.$v.$invalid || this.errorClick >= 3 && !this.checkRecaptcha
  }

}
