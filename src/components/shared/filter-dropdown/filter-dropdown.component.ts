import { ModelSync } from "vue-property-decorator";
// Add dependencies
import Vue from "vue";
import { Component, Prop, PropSync } from "vue-property-decorator";
// Components
import Badge from "Components/shared/filter-dropdown/filter-dropdown.vue";
import { FilterDropdownModel } from "Models/filters/filter-dropdown.model";
import { FilterStoreModel } from "@/models/filters/filter-store.model";

/**
 * Controller of filter
 * @Component
 */
@Component({
  components: {
    Badge,
  },
})
export default class FilterDropdown<T> extends Vue {
  @Prop() label!: string;
  @Prop() listFilters!: FilterDropdownModel[];
  @Prop() placeholder: string;
  @Prop() icon: string;
  @PropSync("model") modelSync: T;

  private focus = false;
  private searchTerm = "";

  filteredData() {
    return this.listFilters.filter(
      (filter) =>
        filter.text.toUpperCase().indexOf(this.searchTerm.toUpperCase()) >= 0
    );
  }
}
