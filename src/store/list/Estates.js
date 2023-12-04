import axios from "axios";

const state = () => ({
    Estates: [],
    Status: String,
});

const actions = {
    async sendfilterEstate({ commit }, info) {
        commit('SET_LOADING', true)
        try {
            const res = await axios.post(`${info.api}?page=${info.page}`, info.form)
            commit('SET_ESTATES', res.data)
            commit('SET_STATUS', res.status)
        } catch (err) {
            // this._vm.$toast.error("فشلت العملية")
        }

        commit('SET_LOADING', false)
    },

    async saveEstate({ commit }, info) {
        if(!info.form.is_saved){
        await axios
            .post("estate/save?estate_id="+`${info.form.estate_id}`)
            .then(res => {
                this.$toast.success("تم حفظ العقار");
                location.reload()

            })}
            else{
            await axios
            .delete( "estate/unSave?estate_id="+`${info.form.estate_id}`)
            .then(res => {
                this.$toast.success("تم حذف العقار");
                location.reload()
            })}


    },
    async reportEstate({ commit }, info) {
        await axios
            .post(`${ info.api }`,info.form)
            .then(res => {
                this.$toast.success("تم أرسال الابلاغ بنجاح");

            })


    },
    async userSaveEstate({ commit }, info) {
        commit('SET_LOADING',true)
        await axios
            .get(`${ info.api }`)
            .then(res => {
                commit('SET_ESTATES', res.data.data)
                commit('SET_LOADING',false)
            })
            .catch(err => {
                this._vm.$toast.error("فشلت العملية");
            })

    },
    async SimilarEstates({ commit }, info) {
        commit('SET_LOADING',true)
        await axios
            .get(`${ info.api }`)
            .then(res => {
                commit('SET_ESTATES', res.data.data)
                commit('SET_LOADING',false)
            })
            .catch(err => {
                this._vm.$toast.error("فشلت العملية");
            })

    },
}

const getters = {
    getEstates: state => {
        return state.Estates
    },
    getStatus: state => {
        return state.Status
    },
}

const mutations = {
    SET_ESTATES(state, payload) {
        state.Estates = payload
    },
    SET_STATUS(state, payload) {
        state.Status = payload
    },
}



export default {
    state,
    getters,
    mutations,
    actions
}