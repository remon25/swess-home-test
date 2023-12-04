import axios from "axios";

const state = () => ({
    Articals: [],
});

const actions = {
    async getArticals({ commit }, info) {
        commit('SET_LOADING',true)
        await axios
            .get(`${ info.api }`)
            .then(res => {
                commit('SET_ARTICAL', res.data.data)
                commit('SET_LOADING',false)
            })
            .catch(err => {
                this._vm.$toast.error("فشلت العملية");
            })

    },
}

const getters = {
    getArticals: state => {
        return state.Articals
    },
}

const mutations = {
    SET_ARTICAL(state, payload) {
        state.Articals = payload
    },
}


export default {
    state,
    getters,
    mutations,
    actions
}