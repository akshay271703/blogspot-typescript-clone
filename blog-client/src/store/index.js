import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import covers from './covers';
import ui from './ui';

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    covers,
    ui,
  },
});
