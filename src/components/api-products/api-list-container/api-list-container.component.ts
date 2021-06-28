// Add dependencies
import Vue from "vue";
import { Component } from "vue-property-decorator";
//Components
import ApiCard from "Components/api-products/api-card/api-card.vue";
//Models
import { Api } from "Models/api/api.model";
import DATA from "Pages/api-products/mock.json";

/**
 * Controller of api-list-container
 * @Component
 */
@Component({
  components: {
    ApiCard,
  },
})
export default class ApiListContainer extends Vue {
  apiProducts: Api[] = DATA;
}
