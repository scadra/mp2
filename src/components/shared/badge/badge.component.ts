import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

/**
 * Controller of badge
 * @Component
 */
@Component
export default class Badge extends Vue {
  removeSelectedTag(): void {
    console.log("remove");
  }
}
