// Add dependencies
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Api } from "Models/api/api.model";
import { EnvironmentsEnum } from "Models/enum/environment.enum";
import { StringFormat } from "Utils/string-format";

/**
 * Controller of api-card
 * @Component
 */
@Component
export default class ApiCard extends Vue {
  @Prop() api: Api;
  public environments = EnvironmentsEnum;

  get formatEnvironments(): string[] {
    return StringFormat.getDataSplited(this.api.environments, ",");
  }

  get formatApis(): string[] {
    return StringFormat.getDataSplited(this.api.tags, ",");
  }
}
