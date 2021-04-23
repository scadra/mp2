// Models
import {Step} from "Models/wizard/step.model";
import { ApiCreation } from 'Models/api/api-creation';
import { ValidationApiModel } from 'Validations/api-creation.validation';
// Components
import WizardStep from "Components/wizard/wizard-step/wizard-step.vue";
import WizardFooter from "Components/wizard/wizard-footer/wizard-footer.vue";
import ApiInformationWizard from "Components/wizard/api-information-wizard/api-information-wizard.vue";
import ApiDocumentationWizard from "Components/wizard/api-documentation-wizard/api-documentation-wizard.vue";
// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";
import { Validations } from 'vuelidate-property-decorators';

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

  @Validations() validations = ValidationApiModel;

  beforeMount() {
    console.log(this.$v)
    this.initSteps();
  }

  initSteps(): void {
    this.steps = [
      {
        icon: "fas fa-info",
        title: "API informations",
        validation: () => {
          return this.$v.api.swagger.$invalid || this.$v.api.productName.$invalid || this.$v.api.organization.$invalid;
        }
      } as Step,
      {
        icon: "fas fa-book",
        title: "API documentation",
        validation: () => {
          return this.$v.api.documentation.$invalid || this.$v.api.overview.$invalid;
        }
      } as Step
    ];
  }
}
