import axios from "axios";

const state = () => ({
    priceDomains: [],
});

const actions = {
    async fetchPriceDomains({ commit }, api_info) {
        await axios
            .get("priceDomains")
            .then(res => {
                let resultData = res.data.data;
                let result = resultData.map(x => {
                    return {
                        text:
                        (x.min == 0 && x.max == 999999999999999999 ? localStorage.getItem("lang") =='en'? 'Undefined' : 'غير محدد'
                        : x.min == 0 && x.max == 1000000 ? localStorage.getItem("lang") =='en'? 'Less than 1,000,000' : 'أقل من 1,000,000' 
                        : x.min == 1000000 && x.max == 50000000 ? localStorage.getItem("lang") =='en'? 'Between 1,000,000 and 50,000,000' : 'بين 1,000,000 و 50,000,000' 
                        : x.min == 50000000 && x.max == 100000000 ? localStorage.getItem("lang") =='en'? 'Between 50,000,000 and 100,000,000' : 'بين 50,000,000 و 100,000,000' 
                        : x.min == 100000000 && x.max == 999999999999999999 ? localStorage.getItem("lang") =='en'? 'More than 100,000,000' : 'أكثر من 100,000,000' : 'غير محدد'),


                        // (x.max == 999999999999999999 ? localStorage.getItem("lang") =='en'? 'unlimited' :  'غير محدد' 
                        // : x.max.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))
                        // +' - ' +(x.min == 0 ? localStorage.getItem("lang") =='en'? 'unlimited' 
                        // :  'غير محدد': x.min.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
                        value: x.id
                    }
                })
                commit('SET_PRICE_DOMAIN', result)
            })
            .catch(err => {})
    },
}

const getters = {
    getPriceDomains: state => {
        return state.priceDomains
    },
}

const mutations = {
    SET_PRICE_DOMAIN(state, payload) {
        state.priceDomains = payload
    },
}


export default {
    state,
    getters,
    mutations,
    actions
}