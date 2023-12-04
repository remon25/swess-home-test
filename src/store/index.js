import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from "./list/sidebar";
import form from './form'
import auth from './auth'
import ownershipTypes from './list/ownershipTypes'
import estateTypes from './list/estateTypes'
import contractTypes from './list/contractTypes'
import interiorStatuses from './list/interiorStatuses'
import estateOfferTypes from './list/estateOfferTypes'
import periodTypes from './list/periodTypes'
import locations from './list/locations'
import offices from './list/offices'
import areaUnits from './list/areaUnits'
import priceDomains from './list/priceDomain'
import Estates from './list/Estates'
import lang from './list/lang'
import Artical from './list/Artical'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    sidebar,
    form,
    lang,
    Estates,
    Artical,
    auth,
    ownershipTypes,
    estateTypes,
    interiorStatuses,
    estateOfferTypes,
    periodTypes,
    locations,
    contractTypes,
    offices,
    areaUnits,
    priceDomains,
  }
})
