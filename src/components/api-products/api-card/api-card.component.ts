// Add dependencies
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ApiCardModel } from "Models/api/api-card.model";
import { EnvironementsEnum } from "Models/enum/environment.enum";

/**
 * Controller of api-card
 * @Component
 */
@Component({
  filters: {
    parseDate(value: string) {
      if (
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}\+\d{2}:\d{2}$/.test(value)
      ) {
        return (
          value.substr(8, 2) +
          "/" +
          value.substr(5, 2) +
          "/" +
          value.substr(2, 2)
        );
      }
    },
  },
})
export default class ApiCard extends Vue {
  @Prop() api: ApiCardModel;
  public environments = EnvironementsEnum;

  public getEnvironments(): string[] {
    this.api.environments = this.api.environments.replace(" ", "");
    return this.api.environments.split(",");
  }
}
