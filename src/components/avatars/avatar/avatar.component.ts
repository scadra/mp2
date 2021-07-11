import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";

@Component
export default class MPAvatar extends Vue {
  @Prop() picture: string;
  @Prop({
    default: "https://via.placeholder.com/50x50",
  })
  placeholder: string;
  @Prop() badge: string;
  @Prop({
    default: "?",
  })
  initials: string;
  @Prop() size: AvatarSize;
  @Prop() color: AvatarColor;
  @Prop() dotColor: AvatarDotColor;
  @Prop() tResponsive: boolean;
  @Prop() squared: boolean;
  @Prop() dot: boolean;
}
