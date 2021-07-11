// Add dependencies
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { useWindowScroll } from "@vueuse/core";

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

  get isScrolling(): boolean {
    const { y } = useWindowScroll();
    return y.value > 30;
  }
}
