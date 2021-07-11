import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import MPBlock from "Components/block/block.vue";
import MPAvatar from "Components/avatars/avatar/avatar.component";

@Component({
  components: {
    MPBlock,
    MPAvatar,
  },
})
export default class MPCardAction extends Vue {
  //Props
  @Prop({
    required: true,
  })
  title!: string;
  @Prop() subtitle!: string;
  @Prop() avatar!: string;
  @Prop() badge!: string;
  @Prop() content!: string;
  @Prop({
    default: "regular",
  })
  radius!: CardRadius;

  hasDefaultSlot = this.$slots.default;
}
