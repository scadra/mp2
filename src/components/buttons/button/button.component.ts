import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";

@Component
export default class MPButton extends Vue {
  //Props
  @Prop() to!: string;
  @Prop() icon!: string;
  @Prop() iconCaret!: string;
  @Prop() placeload!: string;
  @Prop() color!: string;
  @Prop() size!: string;
  @Prop({
    default: false,
  })
  rounded!: boolean;
  @Prop({
    default: false,
  })
  bold!: boolean;
  @Prop({
    default: false,
  })
  fullwidth!: boolean;
  @Prop({
    default: false,
  })
  raised!: boolean;
  @Prop({
    default: false,
  })
  elevated!: boolean;
  @Prop({
    default: false,
  })
  outlined: boolean;
  @Prop({
    default: false,
  })
  loading: boolean;
  @Prop({
    default: false,
  })
  lower: boolean;
  @Prop({
    default: false,
  })
  disabled: boolean;

  get isIconIconify(): boolean {
    return this.icon && this.icon.indexOf(":") !== -1;
  }

  get isCaretIconify(): boolean {
    return this.iconCaret && this.iconCaret.indexOf(":") !== -1;
  }

  get classes(): Array<string> {
    return [
      "button",
      "v-button",
      this.disabled && "is-disabled",
      this.rounded && "is-rounded",
      this.bold && "is-bold",
      this.size && `is-${this.size}`,
      this.lower && "is-lower",
      this.fullwidth && "is-fullwidth",
      this.outlined && "is-outlined",
      this.raised && "is-raised",
      this.elevated && "is-elevated",
      this.loading && !this.placeload && "is-loading",
      this.color && `is-${this.color}`,
    ];
  }
}
