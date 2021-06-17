import Vue from "vue";
import { Component, PropSync } from "vue-property-decorator";
import { Validations } from "vuelidate-property-decorators";
import { ResetPasswordValidation } from "Validations/reset-password.validation";

@Component
export default class ResetForm extends Vue {
  @PropSync("email") emailSync!: string;

  @Validations() validation = ResetPasswordValidation;
}
