import { NewPasswordValidation } from "Validations/new-password.validation";
import { Component, PropSync } from "vue-property-decorator";
import Vue from "vue";
import { ResetPassword } from "Models/user/reset-password";
import { Validations } from "vuelidate-property-decorators";

@Component
export default class NewPasswordForm extends Vue {
  @PropSync("resetPassword") resetPasswordSync!: ResetPassword;

  @Validations() validation = NewPasswordValidation;
}
