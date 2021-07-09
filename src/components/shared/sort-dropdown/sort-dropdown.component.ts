// Add dependencies
import Vue from "vue";
import { Component, Prop, PropSync } from "vue-property-decorator";
import { SortDropdownModel } from "Models/filters/sort-dropdown.model";

/**
 * Controller of filter
 * @Component
 */
@Component
export default class SortDropdown extends Vue {
  @Prop() sortOptions!: SortDropdownModel[];
  @PropSync("model") modelSync!: SortDropdownModel;

  apply(value: SortDropdownModel): void {
    this.modelSync = value;
    this.$emit("update:sort");
  }
}
