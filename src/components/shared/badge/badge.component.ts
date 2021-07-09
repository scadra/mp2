import Vue from "vue";
import { Component } from "vue-property-decorator";

/**
 * Controller of badge
 * @Component
 */
@Component
export default class Badge extends Vue {
  display = true;

  removeBadge(): void {
    this.display = false;
    this.$emit("update:badge", false);
  }
}
