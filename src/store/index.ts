import Vue from 'vue';
import Vuex from 'vuex';

import Api from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    media: [],
  },
  mutations: {
    setMedia(state, payload) {
      state.media = payload;
    },
  },
  actions: {
    async fetchMedia({ commit }, payload) {
      const { params } = payload;
      const media = await Api.Media.get(params);
      commit('setMedia', media);
    },
  },
  modules: {
  },
});
