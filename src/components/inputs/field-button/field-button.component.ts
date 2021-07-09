//Dependencies
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { PropSync } from "vue-property-decorator";

@Component
export default class FieldButton extends Vue {
  @Prop() placeholder!: string;
  @Prop() icon!: string;
  @PropSync("model") modelSync!: string;
  @Prop() buttonText!: string;

  toSearch = "";

  apply(): void {
    this.$emit("update:field", this.toSearch);
    if (this.modelSync) {
      this.modelSync = this.toSearch;
    }
    this.toSearch = "";
  }
}
