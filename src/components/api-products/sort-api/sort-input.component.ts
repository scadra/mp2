// Add dependencies
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Api } from "Models/api/api.model";

const ApiStore = namespace("ApiStore");
/**
 * Controller of api-card
 * @Component
 */
@Component
export default class Sort extends Vue {
  sorting = "ASC";
  @Prop({
    default: "",
  })
  label: string;

  @ApiStore.Getter
  getFilterDataByKey!: (key: string) => string[];

  @ApiStore.Action
  addFilter: (filter: {
    callable: (data: Api[], filter: string[]) => Api[];
    filters: string[];
    key: string;
  }) => void;

  @ApiStore.Action
  sort: () => void;

  @ApiStore.Action
  updateFilterData: (filter: { filters: string[]; key: string }) => void;

  created(): void {
    this.addFilter({
      callable: function (data: Api[], filter: string[]) {
        return data.sort((el1, el2) => {
          if (filter.includes("ASC")) {
            return el1.name.localeCompare(el2.name);
          }

          return el2.name.localeCompare(el1.name);
        });
      },
      filters: [this.sorting],
      key: "sorting",
    });
  }

  mounted(): void {
    if (this.getFilterDataByKey("sorting").length) {
      this.sorting = this.getFilterDataByKey("sorting")[0];
    }
  }

  sortApis(): void {
    this.updateFilterData({
      filters: [this.sorting],
      key: "sorting",
    });

    this.sort();
  }
}
