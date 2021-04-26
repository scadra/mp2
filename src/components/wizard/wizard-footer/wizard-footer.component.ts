//Dependencies
import { Component, PropSync, Prop } from "vue-property-decorator";
import Vue from "vue";
//Models
import { Step } from "Models/wizard/step.model";

/**
 * The wizard footer, display the different action possible in the wizard
 * @Component
 */
@Component
export default class WizardFooter extends Vue {
  @Prop() steps: Step[];
  @PropSync("currentStep") syncCurrentStep!: number;
  @Prop() validation!: Function;

  /**
   * Go to next step by incrementing the @syncCurrentStep
   * @void
   */
  next(): void {
    this.syncCurrentStep++;
  }

  /**
   * Go to next step by decrementing the @syncCurrentStep
   * @void
   */
  back(): void {
    this.syncCurrentStep--;
  }

  /**
   * Confirm event to parent
   * @void
   */
  confirm(): void {
    this.$emit("confirm");
  }

  /**
   * check if step is valid
   * @boolean
   */
  isValid(): boolean {
    return this.steps[this.syncCurrentStep].validation();
  }
}
