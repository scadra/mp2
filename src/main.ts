// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Dependencies
import Buefy from 'buefy';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';
import 'reflect-metadata';
//Layouts
import RootLayout from 'Layouts/root/root.vue';
import Logo from 'Layouts/logo/logo.vue';
//Container
import {buildDependencyContainer} from '@/app.container';
//Scss files
import 'Styles/main.scss';
import 'buefy/dist/buefy.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
//Internal dependencies
import store from 'Store/index'

export default function (Vue: any, {
  router,
  head,
  isClient,
  appOptions
}: any) {
    // Create defaut component
  Vue.component('Layout', RootLayout);
  Vue.component('Logo', Logo);

  // Load dependency only for the client
  if (isClient) {
    // Add dependencies inside de vue instance
    Vue.use(Buefy)
    Vue.use(Vuex);
    Vue.use(VueRouter);
  }
  // Define globale use for ts
  Vue.use(Vuelidate);
  appOptions.$v = Vuelidate;
  appOptions.store = new Vuex.Store(store)
  appOptions.router = router
}