import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";

@Component
export default class MPCardAdvanced extends Vue {
  //Props
  @Prop({
    default: "regular",
  })
  radius!: CardRadius;
}
