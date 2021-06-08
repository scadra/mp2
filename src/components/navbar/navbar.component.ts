// Add dependencies
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';


const authenticationStore = namespace("AuthenticationStore");

/**
 * Controller of navbar
 * @Component
 */
@Component
export default class Navbar extends Vue{

    @authenticationStore.Getter
    returnIsAuth!: () => boolean
}