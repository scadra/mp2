// Add dependencies
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { namespace } from "vuex-class";

const AuthenticationStore = namespace("AuthenticationStore");

/**
 * Controller of navbar
 * @Component
 */
@Component
export default class Navbar extends Vue {
  @AuthenticationStore.Getter
  returnIsAuth!: () => boolean;

  @AuthenticationStore.Action
  logout!: () => void;

  signOut(): void {
    this.logout();
  }
}
