// Dependencies
import { Component } from "vue-property-decorator";
import Vue from "vue";
//Models
import { Api } from "Models/api/api.model";

//Components
import ApiListContainer from "Components/api-products/api-list-container/api-list-container.vue";

/**
 * The api-products page
 * @class
 */
@Component({
  metaInfo: {
    title: "api-products",
  },
  components: {
    ApiListContainer,
  },
})
export default class ApiProducts extends Vue {}
