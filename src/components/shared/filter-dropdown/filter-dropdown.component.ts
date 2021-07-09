// Add dependencies
import Vue from "vue";
import { Component, Prop, PropSync } from "vue-property-decorator";
// Components
import Badge from "Components/shared/badge/badge.vue";
// Models
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
export default class FilterDropdown<T> extends Vue {
  @Prop() label!: string;
  @Prop() listFilters!: FilterDropdownModel[];
  @Prop() placeholder: string;
  @Prop() icon: string;
  @Prop() isMultiple: boolean;
  @PropSync("model") modelSync!: T[];

  private searchTerm = "";

  /**
   * filteredData
   * @Component
   */
  filteredData(): FilterDropdownModel[] {
    return this.listFilters.filter(
      (filter) =>
        filter.text.toUpperCase().indexOf(this.searchTerm.toUpperCase()) >= 0
    );
  }

  /**
   * clearFilters
   * @Component
   */
  clearFilters(): void {
    this.modelSync.splice(0, this.modelSync.length);
    this.emitChanges();
  }

  removeFilter(tag: T): void {
    const index = this.modelSync.findIndex((model) => model === tag);
    if (index > -1) {
      this.modelSync.splice(index, 1);
    }
    this.emitChanges();
  }

  emitChanges(): void {
    this.$emit("update:model", this.modelSync);
  }
}
