import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";

@Component
export default class MPBlock extends Vue {
  @Prop({
    required: true,
  })
  title: string;
  @Prop() subtitle: string;
  @Prop() infratitle: string;
  @Prop() center: boolean;
  @Prop() lighter: boolean;
  @Prop() narrow: boolean;
  @Prop() mResponsive: boolean;
  @Prop() tResponsive: boolean;
}
