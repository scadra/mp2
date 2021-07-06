// Add dependencies
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
// Components
import Badge from "Components/shared/filter-dropdown/filter-dropdown.vue";
import { FilterDropdownModel } from "Models/filters/filter-dropdown.model";

/**
 * Controller of filter
 * @Component
 */
@Component({
  components: {
    Badge,
  },
})
export default class FilterDropdown extends Vue {
  @Prop() label!: string;
  @Prop() listFilters!: FilterDropdownModel[];
  @Prop() placeholder: string;
  @Prop() icon: string;

  private focus = false;
}
