// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Dependencies
import Buefy from 'buefy';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';
//Layouts
import RootLayout from 'Layouts/root/root.vue';
//Container
import buildDependencyContainer from '@/app.container';
//Scss files
import 'Styles/main.scss';
import 'buefy/dist/buefy.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
//Internal dependencies
import store from 'Store'

export default function (Vue, {
  router,
  head,
  isClient,
  appOptions
}) {
  // Load dependency injection
  buildDependencyContainer();
  // Create defaut component
  Vue.component('Layout', RootLayout);

  // Load dependency only for the client
  if (isClient) {
    // Add dependencies inside de vue instance
    Vue.use(Buefy)
    Vue.use(Vuex);
    Vue.use(Vuelidate);
    Vue.use(VueRouter);
    // Define globale use for ts
    appOptions.$v = Vuelidate;
  }
  appOptions.store = new Vuex.Store(store)
}