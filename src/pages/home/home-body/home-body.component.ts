// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";
// Components
import MPCardMedia from "@/components/cards/card-media/card-media.vue";

/**
 * The home page
 * @class
 */
@Component({
  metaInfo: {
    title: "home",
  },
  components: {
    MPCardMedia,
  },
})
export default class HomeBody extends Vue {}
