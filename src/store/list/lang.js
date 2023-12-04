const state = () => ({
    lang: '',
});

const actions = {
     changeLang({ commit }, lang) {
                commit('SET_LANGUAGE', lang)
    },
}

const getters = {
    getLang: state => {
        return state.lang ==''?  localStorage.getItem("lang") == null ? 'ar' :localStorage.getItem("lang") : state.lang
    },
}

const mutations = {
    SET_LANGUAGE(state, payload) {
        state.lang = payload;
        localStorage.setItem("lang", payload)

    },
}


export default {
    state,
    getters,
    mutations,
    actions
}