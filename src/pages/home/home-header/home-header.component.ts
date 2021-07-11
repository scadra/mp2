// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";
import MpButton from "Components/buttons/button/button.vue";
import MpButtons from "@/components/buttons/buttons/buttons.vue";
/**
 * The home page
 * @class
 */
@Component({
  metaInfo: {
    title: "home",
  },
  components: {
    MpButton,
    MpButtons,
  },
})
export default class HomeHeader extends Vue {}
