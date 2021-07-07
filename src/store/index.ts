// Dependencies
import Vue from "vue";
import Vuex from "vuex";
// Modules
import CamundaStore from "Store/camunda";
import AuthenticationStore from "Store/authentication";
import ProviderStore from "Store/provider";
import ProvidersFilterStore from "Store/provider-filter";

Vue.use(Vuex);

/**
 * Define the store with the different modules
 * @const
 */
const store = {
  modules: {
    CamundaStore,
    AuthenticationStore,
    ProviderStore,
    ProvidersFilterStore,
  },
};

export default store;
