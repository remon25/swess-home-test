import axios from "axios";

const state = () => ({
  offices: [],
});

const actions = {
  async fetchOffices({ commit }, api_info) {
    commit('SET_LOADING',true)

    await axios
      .get(`${api_info}`)
      .then((res) => {
        let resultData = res.data.data;
        let result = resultData.map((x) => {
          return {
            text: x.name,
            value: x.id,
          };
        });
        commit('SET_LOADING',false)
        commit("SET_OFFICES", result);
      })
      .catch((err) => {});
  },
  async searchOffices({ commit }, info) {
    commit('SET_LOADING',true)

    await axios
      .post(`${info.api}`, info.form)
      .then((res) => {
        let resultData = res.data.data;
        commit('SET_LOADING',false)
        commit("SET_OFFICES", resultData);
      })
      .catch((err) => {});
  },
  async searchOfficesByName({ commit }, info) {
    commit('SET_LOADING',true)

    await axios
      .get(`${info.api}`)
      .then((res) => {
        let resultData = res.data.data;
        commit('SET_LOADING',false)
        commit("SET_OFFICES", resultData);
      })
      .catch((err) => {});
  },
};

const getters = {
  getOffices: (state) => {
    return state.offices;
  },
};

const mutations = {
  SET_OFFICES(state, payload) {
    state.offices = payload;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
