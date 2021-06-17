import Vue from "vue";
import { Component, PropSync } from "vue-property-decorator";

@Component
export default class CheckBox extends Vue {
  @PropSync("model") modelSync!: boolean;

  /**
   * Set model of checkbox
   * @boolean : value
   */
  setCheckbox(value: boolean): void {
    this.modelSync = value;
    this.$forceUpdate();
  }
}
