import { getCoverList } from '@/api/httpClient';
const state = {
  covers: [],
};

const actions = {
  async vuex_getCover({ commit }) {
    if (state.covers.length > 0) {
      return;
    }
    try {
      const coverList = await getCoverList();
      if (coverList.success) {
        commit('SET_COVER_LIST', coverList.data);
      }
    } catch (error) {}
  },
};

const mutations = {
  SET_COVER_LIST(state, payload) {
    state.covers = payload;
  },
};

const getters = {
  vuex_getCovers(state) {
    return state.covers;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
