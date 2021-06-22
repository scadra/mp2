// Dependencies
import { Component, Inject } from "vue-property-decorator";
import Vue from "vue";
//Models
import { ApiCardModel } from "Models/api/api-card.model";
//Components
import ApiCard from "Components/api-products/api-card/api-card.vue";

/**
 * The api-products page
 * @class
 */
@Component({
  metaInfo: {
    title: "api-products",
  },
  components: {
    ApiCard,
  },
})
export default class ApiProducts extends Vue {
  @Inject()
  //private apiProductsService!: IApiProductsService;
  apiProducts: ApiCardModel[] = [
    new ApiCardModel(
      "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3414",
      "https://via.placeholder.com/150",
      "Awesome API",
      "<h1>Our Awesome API!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
      "1.0.0",
      "PRODUCTION",
      "2021-06-21T15:30:13.400+00:00",
      "Provider",
      "Digital Identity"
    ),
    new ApiCardModel(
      "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3415",
      "https://via.placeholder.com/150",
      "Awesome API",
      "<h1>Our Awesome API!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
      "1.0.0",
      "SANDBOX,PRODUCTION",
      "2021-06-21T15:30:13.400+00:00",
      "Provider",
      "Digital Identity"
    ),
    new ApiCardModel(
      "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3416",
      "https://via.placeholder.com/150",
      "Awesome API",
      "<h1>Our Awesome API!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
      "1.0.0",
      "PRODUCTION",
      "2021-06-21T15:30:13.400+00:00",
      "Provider",
      "Digital Identity, Tag"
    ),
    new ApiCardModel(
      "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3417",
      "https://via.placeholder.com/150",
      "Awesome API",
      "<h1>Our Awesome API!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
      "1.0.0",
      "SANDBOX,PRODUCTION",
      "2021-06-21T15:30:13.400+00:00",
      "Provider",
      "Digital Identity, Tag"
    ),
    new ApiCardModel(
      "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3418",
      "https://via.placeholder.com/150",
      "Awesome API",
      "<h1>Our Awesome API!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
      "1.0.0",
      "SANDBOX,PRODUCTION",
      "2021-06-21T15:30:13.400+00:00",
      "Provider",
      "Digital Identity"
    ),
    new ApiCardModel(
      "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3419",
      "https://via.placeholder.com/150",
      "Awesome API",
      "<h1>Our Awesome API!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
      "1.0.0",
      "SANDBOX",
      "2021-06-21T15:30:13.400+00:00",
      "Provider",
      "Digital Identity, Tag"
    ),
    new ApiCardModel(
      "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3420",
      "https://via.placeholder.com/150",
      "Awesome API",
      "<h1>Our Awesome API!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
      "1.0.0",
      "SANDBOX,PRODUCTION",
      "2021-06-21T15:30:13.400+00:00",
      "Provider",
      "Digital Identity"
    ),
    new ApiCardModel(
      "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3421",
      "https://via.placeholder.com/150",
      "Awesome API",
      "<h1>Our Awesome API!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
      "1.0.0",
      "SANDBOX",
      "2021-06-21T15:30:13.400+00:00",
      "Provider",
      "Digital Identity"
    ),
  ];
}
