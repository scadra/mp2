// Models
import Step from "Models/wizard/step.model";
// Components
import Wizard from "Components/wizard/wizard.vue";
// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";

@Component({
  metaInfo: {
    title: "home",
  },
  components: {
      Wizard
  }
})
export default class Home extends Vue {
  steps!: Step[];

  beforeMount() {
    this.initSteps();
  }

  initSteps(): void {
    this.steps = [
      {
        icon: "fas fa-info-circle",
        title: "API informations",
      } as Step,
      {
        icon: "fas fa-book",
        title: "API documentation",
      } as Step,
    ];
  }
}
