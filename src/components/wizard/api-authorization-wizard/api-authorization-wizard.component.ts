import { Checker } from 'Utils/checker';
// Models
import { ApiCreation } from "Models/api/api-creation";
// Dependencies
import { Component, PropSync, Ref } from "vue-property-decorator";
import Vue from "vue";
import { Validations } from "vuelidate-property-decorators";
// Validation
import { ValidationApiModel } from "Validations/api-creation.validation";

/**
 * api auth of the step wizard
 * @Component
 */
@Component
export default class ApiAuthorizationWizard extends Vue {
  @PropSync("api") syncApi!: ApiCreation;
  @Validations() validations = ValidationApiModel;

  authorizationModels: String[] = [
    "Client credentials",
    "Authorization code",
    "Basic",
  ];

  // Hooks
  beforeMount() {
    this.syncApi.authorizationModel = this.authorizationModels[0];
  }

  /**
   * Set PKCE
   * @boolean : value
   */
  setRequirePKCE(value: boolean) {
    this.syncApi.requirePkce = value;
    this.$forceUpdate();
  }
}
