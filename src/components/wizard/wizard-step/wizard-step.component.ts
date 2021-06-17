//dependencies
import { Component, PropSync, Prop } from "vue-property-decorator";
import Vue from "vue";
// Models
import { Step } from "Models/wizard/step.model";

/**
 * Controller of wizard step, which display the current step number with the max step number
 * @Component
 */
@Component
export default class WizardStep extends Vue {
  @Prop() steps: Step[];
  @PropSync("currentStep") syncCurrentStep!: number;
}
