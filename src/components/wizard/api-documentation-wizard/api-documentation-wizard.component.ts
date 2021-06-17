// Models
import { ValidationApiModel } from "Validations/api-creation.validation";
import { ApiCreation } from "Models/api/api-creation";
//Utils
import { MessageDisplay } from "Utils/message-display";
// Dependencies
import Vue from "vue";
import { Validations } from "vuelidate-property-decorators";
import { Component, PropSync } from "vue-property-decorator";

/**
 * api documentations of the step wizard
 * @Component
 */
@Component
export default class ApiDocumentationWizard extends Vue {
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
