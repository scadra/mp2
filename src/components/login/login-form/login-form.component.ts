// Models
import { UserLogin } from "Models/user/user-login";
// Validations
import { ValidationLoginModel } from "@/validations/login.validation";
// Add dependencies
import Vue from "vue";
import { Component, ModelSync } from "vue-property-decorator";
import { Validations } from "vuelidate-property-decorators";
//Components
import UserInput from "Components/inputs/user-input/user-input.vue";

/**
 * Controller for Login-form
 * @Component
 */
@Component({
  components: {
    UserInput,
  },
})
export default class LoginForm extends Vue {
  @ModelSync("user") syncUser!: UserLogin;

  // Validation for the form
  @Validations() validations = ValidationLoginModel;
}
