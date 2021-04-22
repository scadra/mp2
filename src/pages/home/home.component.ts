// Models
import Step from "Models/wizard/step.model";
import { ApiCreation } from 'Models/api/api-creation';
// Components
import WizardStep from "Components/wizard/wizard-step/wizard-step.vue";
import WizardFooter from "Components/wizard/wizard-footer/wizard-footer.vue";
import ApiInformationWizard from "Components/wizard/api-information-wizard/api-information-wizard.vue";
import ApiDocumentationWizard from "Components/wizard/api-documentation-wizard/api-documentation-wizard.vue";
// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";

@Component({
  metaInfo: {
    title: "home",
  },
  components: {
      WizardStep,
      WizardFooter,
      ApiInformationWizard,
      ApiDocumentationWizard
  }
})
export default class Home extends Vue {
  steps!: Step[];
  currentStep: number = 0;
  api = new ApiCreation();

  beforeMount() {
    this.initSteps();
  }

  initSteps(): void {
    this.steps = [
      {
        icon: "fas fa-info",
        title: "API informations",
      } as Step,
      {
        icon: "fas fa-book",
        title: "API documentation",
      } as Step
    ];
  }
}
