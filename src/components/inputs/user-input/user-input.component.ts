import Vue from "vue";
import { Component, PropSync, Prop } from "vue-property-decorator";
import { Validation } from "vuelidate/vuelidate";

@Component
export default class UserInput extends Vue {
  @Prop() validatorField!: Validation;
  @Prop() type!: string;
  @PropSync("model") modelSync!: string;

  /**
   * Set eventually errors on the field
   */
  onBlur(): void {
    if (this.validatorField) {
      this.validatorField.$touch();
    }
  }
}
