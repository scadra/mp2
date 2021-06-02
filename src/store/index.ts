// Dependencies
import Vue from 'vue';
import Vuex from 'vuex';
// Modules
import CamundaStore from 'Store/camunda';
import AuthenticationStore from 'Store/authentication';

Vue.use(Vuex);

/**
 * Define the store with the different modules
 * @const
 */
const store = {
  modules: {
    CamundaStore,
    AuthenticationStore
  }
};

export default store

