// Models
import { ApiCreation } from "Models/api/api-creation";
// Dependencies
import { Component, PropSync, Ref } from "vue-property-decorator";
import Vue from "vue";
import { Validations } from "vuelidate-property-decorators";
// Validation
import { ValidationApiModel } from "Validations/api-creation.validation";
//Utils
import { MessageDisplay } from "Utils/message-display";

/**
 * api informations of the step wizard
 * @Component
 */
@Component
export default class ApiInformationWizard extends Vue {
  @PropSync("api") syncApi!: ApiCreation;
  @Validations() validations = ValidationApiModel;

  /**
   * return the file name using the util @MessageDisplay
   * @string : fileName
   */
  getFileName(file: File): string {
    return MessageDisplay.getFileName(file);
  }
}
