// Dependencies
import Vue from 'vue';
import Vuex from 'vuex';
// Modules
import CamundaStore from 'Store/camunda';

Vue.use(Vuex);

/**
 * Define the store with the different modules
 * @const
 */
const store = {
  modules: {
    CamundaStore
  }
};

export default store

