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

export default function (Vue, {
  router,
  head,
  isClient
}) {
  // Load dependency injection
  buildDependencyContainer();
  // Create defaut component
  Vue.component('Root', RootLayout);

  // Load dependency only for the client
  if (isClient) {
    // Add dependencies inside de vue instance
    Vue.use(Buefy)
    Vue.use(Vuex);
    Vue.use(Vuelidate);
    Vue.use(VueRouter);
  }

}