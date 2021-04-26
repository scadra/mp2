// Models
import { Step } from "Models/wizard/step.model";
import { ApiCreation } from "Models/api/api-creation";
import { CamundaRequest } from "Models/api/camunda-request";
import { ValidationApiModel } from "Validations/api-creation.validation";
// Components
import WizardStep from "Components/wizard/wizard-step/wizard-step.vue";
import WizardFooter from "Components/wizard/wizard-footer/wizard-footer.vue";
import ApiInformationWizard from "Components/wizard/api-information-wizard/api-information-wizard.vue";
import ApiDocumentationWizard from "Components/wizard/api-documentation-wizard/api-documentation-wizard.vue";
import ApiAuthorizationWizard from "Components/wizard/api-authorization-wizard/api-authorization-wizard.vue";
// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";
import { Validations } from "vuelidate-property-decorators";
import { namespace } from "vuex-class";

// Modules
const camundaStore = namespace("CamundaStore");

/**
 * The home page
 * @class
 */
@Component({
  metaInfo: {
    title: "home",
  },
  components: {
    WizardStep,
    WizardFooter,
    ApiInformationWizard,
    ApiDocumentationWizard,
    ApiAuthorizationWizard,
  },
})
export default class Home extends Vue {
  steps!: Step[];
  currentStep: number = 0;
  api = new ApiCreation();

  // Action of vuex to start process
  @camundaStore.Action
  start!: (request: CamundaRequest) => void;

  // Validation for the form
  @Validations() validations = ValidationApiModel;

  // Hook
  beforeMount() {
    this.initSteps();
  }

  /**
   * init the different steps
   * @void
   */
  initSteps(): void {
    this.steps = [
      {
        icon: "fas fa-info",
        title: "API informations",
        validation: () => {
          return (
            this.$v.api.swagger.$invalid ||
            this.$v.api.productName.$invalid ||
            this.$v.api.organization.$invalid ||
            this.$v.api.host.$invalid
          );
        },
      } as Step,
      {
        icon: "fas fa-lock",
        title: "API authorization",
        validation: () => {
          return (
            this.$v.api.authorizationModel.$invalid ||
            this.$v.api.authorizationTokenUrl.$invalid ||
            this.$v.api.authorizationUrl.$invalid
          );
        },
      } as Step,
      {
        icon: "fas fa-book",
        title: "API documentation",
        validation: () => {
          return (
            this.$v.api.documentation.$invalid || this.$v.api.overview.$invalid
          );
        },
      } as Step,
    ];
  }

  /**
   * confirm methode of the wizard
   * @void
   */
  confirm(): void {
    let request = {
      variables: this.api,
    } as CamundaRequest;
    this.start(request);
  }
}
