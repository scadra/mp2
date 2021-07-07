// Add dependencies
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
//Components
//Models
import { Provider } from "Models/api/provider.model";
const ProvidersFilterStore = namespace("ProvidersFilterStore");

/**
 * Controller of api-list-container
 * @Component
 */
@Component({
  components: {},
})
export default class ApiFilter extends Vue {
  @ProvidersFilterStore.Action
  setCurrentFilter!: (filter: Provider[]) => void;
  @ProvidersFilterStore.Getter
  returnProviderFilter!: Provider[];

  filterList: Provider[] = [];
  @Prop() placeholder: string;
  @Prop() label: string;
  @Prop() icon: string;

  selectedFilter: Provider[] = [];
  filterListComponent: Provider[] = [];
  focus = false;

  mounted(): void {
    this.filterList = this.$static.providers.edges.map((el: any) => {
      return el.node;
    });

    document.addEventListener("click", (e) => {
      if (
        e.target != this.$el.querySelector("#search") &&
        e.target != this.$el.querySelector(".filterList")
      ) {
        this.focus = false;
      }
    });

    if (this.returnProviderFilter.length) {
      this.filterListComponent = this.filterList.filter((el) => {
        return this.returnProviderFilter.indexOf(el);
      });
      return;
    }
    this.filterListComponent = this.filterList;
  }

  beforeUpdate(): void {
    if (this.returnProviderFilter.length) {
      this.selectedFilter = this.returnProviderFilter;
    }
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
