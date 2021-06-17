// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";
import ResetForm from "Components/reset/reset-password-form/reset-password-form.vue";
import { Validations } from "vuelidate-property-decorators";
import { ResetPasswordValidation } from "Validations/reset-password.validation";
import { namespace } from "vuex-class";
import VueRecaptcha from "vue-recaptcha";

const AuthenticationStore = namespace("AuthenticationStore");

@Component({
  metaInfo: {
    title: "Reset password" 
  },
  components: {
    ResetForm,
    VueRecaptcha,
  },
})
export default class ResetPassword extends Vue {
  email = "";
  keyRecaptcha: string = process.env.GRIDSOME_RECAPTCHA;
  recaptchaChecked = false;
  recaptchaResponse: string;

  @Validations() validation = ResetPasswordValidation;

  @AuthenticationStore.Action
  resetPassword!: (email: string, recaptchaResponse: string) => Promise<void>;

  @AuthenticationStore.Action
  reinitMessage!: () => void;

  @AuthenticationStore.Getter
  returnIsLoading!: () => boolean;

  beforeMount(): void {
    this.reinitMessage();
  }

  async reset(): Promise<void> {
    await this.resetPassword(this.email, this.recaptchaResponse);
    this.$router.push("/login?resetSent=true");
  }

  onCaptchaExpired(): void {
    this.recaptchaChecked = false;
  }

  onVerify(response: string): void {
    if (response) {
      this.recaptchaChecked = true;
      this.recaptchaResponse = response;
    }
  }
}
