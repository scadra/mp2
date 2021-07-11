// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";
import HomeHeader from "Pages/home/home-header/home-header.vue";
import HomeBody from "Pages/home/home-body/home-body.vue";

/**
 * The home page
 * @class
 */
@Component({
  metaInfo: {
    title: "home",
  },
  components: {
    HomeHeader,
    HomeBody,
  },
})
export default class Home extends Vue {}
