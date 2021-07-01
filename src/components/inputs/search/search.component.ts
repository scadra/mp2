//Dipendency
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Api } from "@/models/api/api.model";

const ApiStore = namespace("ApiStore");

@Component
export default class Search extends Vue {
  @Prop() filterList!: string[];
  @Prop() placeholder!: string;

  @ApiStore.Getter
  returnData!: Api[];

  @ApiStore.Getter
  getFilterDataByKey!: (key: string) => string[];

  @ApiStore.Action
  sort!: () => void;

  @ApiStore.Action
  updateFilterData!: (filter: { filters: string[]; key: string }) => void;

  @ApiStore.Action
  addFilter!: (filter: {
    callable: (data: Api[], filter: string[]) => Api[];
    filters: string[];
    key: string;
  }) => void;

  tags: string[] = [];
  searchInput = "";

  created(): void {
    this.addFilter({
      callable: function (data: Api[], filters: string[]) {
        return data.filter((e) => {
          const regexObj = new RegExp(filters.join("|"), "igm");

          if (filters.length) {
            if (regexObj.test(e.name) || regexObj.test(e.description)) {
              return true;
            }
            return false;
          }
          return true;
        });
      },
      filters: this.tags,
      key: "search",
    });
  }

  mounted(): void {
    if ("search" in this.$route.query) {
      if (typeof this.$route.query.search == "string") {
        this.tags = [this.$route.query.search];
      } else {
        this.tags = this.$route.query.search;
      }
      this.updateSearch();
    } else if (this.getFilterDataByKey("search").length) {
      this.tags = this.getFilterDataByKey("search");
    }
  }

  searchData(): void {
    if (!this.tags.includes(this.searchInput)) {
      this.tags.push(this.searchInput);
    }

    this.updateSearch();
  }

  deleteTag(tag: string): void {
    this.tags = this.tags.filter((elem) => elem != tag);
    this.updateSearch();
  }

  updateSearch(): void {
    this.updateFilterData({
      filters: this.tags,
      key: "search",
    });

    this.$router
      .push({ path: this.$route.path, query: { search: this.tags } })
      .catch(() => {
        return;
      });
    this.sort();
  }
}
