// Add dependencies
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
//Components
//Models
import { Provider } from "Models/api/provider.model";
const ProviderFilterStore = namespace("ProvidersFilterStore");

/**
 * Controller of api-list-container
 * @Component
 */
@Component({
  components: {},
})
export default class ApiFilter extends Vue {
  @ProviderFilterStore.Action
  setCurrentFilter!: (filter: Provider[]) => void;

  @Prop() filterList: Provider[];
  @Prop() placeholder: string;
  @Prop() label: string;
  @Prop() icon: string;

  selectedFilter: Provider[] = [];
  filterListComponent: Provider[] = [];
  focus = false;

  mounted(): void {
    document.addEventListener("click", (e) => {
      if (
        e.target != this.$el.querySelector("#search") &&
        e.target != this.$el.querySelector(".filterList")
      ) {
        this.focus = false;
      }
    });

    this.filterListComponent = this.filterList;
  }

  removeSelectedTag(tag: Provider): void {
    this.filterListComponent.push(tag);
    this.selectedFilter = this.selectedFilter.filter((e) => e.id != tag.id);

    this.setCurrentFilter(this.selectedFilter);
  }

  searchKey(searchKey: string): void {
    this.filterListComponent = this.filterList.filter((e) =>
      e.name.toLowerCase().includes(searchKey.toLowerCase())
    );
  }

  clearFilters(): void {
    this.filterListComponent = this.filterList;
    this.selectedFilter = [];

    this.setCurrentFilter(this.selectedFilter);
  }

  addFilterTag(filter: Provider): void {
    this.filterListComponent = this.filterListComponent.filter(
      (e) => e.id != filter.id
    );
    this.selectedFilter.push(filter);

    this.setCurrentFilter(this.selectedFilter);
  }
}
