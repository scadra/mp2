import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";

@Component
export default class MPButtons extends Vue {
  @Prop({ default: false }) addons: boolean;
  @Prop({ default: false }) align: string;
}
