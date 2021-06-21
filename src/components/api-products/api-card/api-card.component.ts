// Add dependencies
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ApiCardModel } from "@/models/api/api-card.model";

/**
 * Controller of api-card
 * @Component
 */
@Component
export default class ApiCard extends Vue {
  @Prop() api: ApiCardModel;
}
