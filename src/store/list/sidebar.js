/* eslint-disable */
const state = () => ({
  link: "",
});

const actions = {
   changeLink({ commit }, link_var) {
    commit('SET_LINK', link_var)
  },
};

const getters = {
  getlink: (state) => {
    return state.link;
  },
};

const mutations = {
  SET_LINK(state, payload) {
    state.link = payload;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
