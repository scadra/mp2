import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";

@Component
export default class MPCard extends Vue {
  //Props
  @Prop({
    default: "regular",
  })
  radius!: CardRadius;
  @Prop() color!: CardColor;
  @Prop({
    default: false,
  })
  elevated!: boolean;

  get cardRadius(): string {
    if (this.radius === "smooth") {
      return "s-card";
    } else if (this.radius === "rounded") {
      return "l-card";
    }
    return "r-card";
  }
}
