// Add dependencies
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import {UserLogin} from "Models/user/user-login";


const authenticationStore = namespace("AuthenticationStore");

/**
 * Controller of navbar
 * @Component
 */
@Component
export default class Navbar extends Vue{

    @authenticationStore.Getter
    returnIsAuth!: () => boolean

    @authenticationStore.Action
    logout!: () => void;

    signOut() {
        this.logout();
    }
}
