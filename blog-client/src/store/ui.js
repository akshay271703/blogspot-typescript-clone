const state = {
  http_pending: false,
};

const actions = {
  vuex_SET_httpPending({ commit }, val) {
    commit('SET_HTTP_PENDING', val);
  },
};

const mutations = {
  SET_HTTP_PENDING(state, val) {
    state.http_pending = val;
  },
};

const getters = {
  vuex_GET_httpPending(state) {
    return state.http_pending;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
