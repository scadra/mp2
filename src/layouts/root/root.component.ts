import Component from 'vue-class-component';
import Vue from 'vue';
import Navbar from 'Components/navbar/navbar.vue';

/**
 * root controller, use as layout of app
 * @class
 */
@Component({
    components :{
        Navbar
    }
})
export default class Root extends Vue {
}