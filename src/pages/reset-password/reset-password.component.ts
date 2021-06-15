// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";
import ResetForm from "Components/reset/reset-password-form/reset-password-form.vue";
import { Validations } from "vuelidate-property-decorators";
import { ResetPasswordValidation } from "Validations/reset-password.validation";
import { namespace } from "vuex-class";
import VueRecaptcha from "vue-recaptcha";

const authenticationStore = namespace("AuthenticationStore");

@Component({
  metaInfo: "Reset password",
  components: {
    ResetForm,
    VueRecaptcha,
  },
})
export default class ResetPassword extends Vue {
  email: String = "";
  keyRecaptcha: String = process.env.GRIDSOME_RECAPTCHA;
  recaptchaChecked: boolean = false;
  recaptchaResponse: String;

  @Validations() validation = ResetPasswordValidation;

  @authenticationStore.Action
  resetPassword!: (email: String, recaptchaResponse: String) => Promise<void>;

  @authenticationStore.Action
  reinitMessage!: () => void;

  @authenticationStore.Getter
  returnIsLoading!: () => boolean;

  beforeMount() {
    this.reinitMessage();
  }

  async reset() {
    await this.resetPassword(this.email, this.recaptchaResponse);
    this.$router.push("/login?resetSent=true");
  }

  onCaptchaExpired() {
    this.recaptchaChecked = false;
  }

  onVerify(response: String) {
    if (response) {
      this.recaptchaChecked = true;
      this.recaptchaResponse = response;
    }
  }
}
