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
    Notification
  },
})
export default class Login extends Vue {

  @authenticationStore.Action
  login!: (user: UserLogin) => void;

  @authenticationStore.Getter
  returnIsLoading!: () => boolean;

  @authenticationStore.Getter
  returnErrorMessage!: () => String | null;

  user: UserLogin = {
    username: "",
    password: ""
  };

  // Validation for the form
  @Validations() validations = ValidationLoginModel;

  // Hook
  beforeMount() {}

  async signIn() {
    await this.login(this.user);
  }
}
