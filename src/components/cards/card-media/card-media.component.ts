import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";

@Component
export default class MPCardMedia extends Vue {
  //Props
  @Prop({ required: true }) title!: string;
  @Prop() subtitle!: string;
  @Prop() image!: string;
  @Prop() placeholder!: string;
  @Prop() format!: string;
  @Prop() badge!: string;

  hasDefaultSlot = this.$slots.default;
}
