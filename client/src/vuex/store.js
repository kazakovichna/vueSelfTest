import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations/mutation'
import getters from './getters/getters'
import api_request from './action/api-requests'
import commonAction from './action/actions'

let actions = {...api_request, ...commonAction};

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations,
  actions,
  getters
});

export default store
