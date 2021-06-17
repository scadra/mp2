// Models
import { ApiCreation } from "Models/api/api-creation";
// Dependencies
import { Component, PropSync } from "vue-property-decorator";
import Vue from "vue";
import { Validations } from "vuelidate-property-decorators";
// Validation
import { ValidationApiModel } from "Validations/api-creation.validation";
//Components
import CheckBox from 'Components/inputs/checkbox/checkbox.vue';

/**
 * api auth of the step wizard
 * @Component
 */
@Component({
  components: {
    CheckBox
  }
})
export default class ApiAuthorizationWizard extends Vue {
  @PropSync("api") syncApi!: ApiCreation;
  @Validations() validations = ValidationApiModel;

  authorizationModels: string[] = [
    "Client credentials",
    "Authorization code",
    "Basic",
  ];

  // Hooks
  beforeMount(): void {
    this.syncApi.authorizationModel = this.authorizationModels[0];
  }

}
