// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";
// Components
import MpCard from "Components/cards/card/card.vue";

/**
 * The home page
 * @class
 */
@Component({
  metaInfo: {
    title: "home",
  },
  components: {
    MpCard,
  },
})
export default class HomeBody extends Vue {}
