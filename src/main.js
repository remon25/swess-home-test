import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "./plugins/axios";
import components from "./components";
import i18n from "./i18n";
import Vuelidate from "vuelidate";
import toastnotification from "@/plugins/toastification";
import "vue-toastification/dist/index.css";
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib';
// import VueCountryCode from "vue-country-code";
// import Photoswipe from 'vue-pswipe'
import Meta from 'vue-meta';

Vue.use(Meta);

// import VueFbCustomerChat from 'vue-fb-customer-chat'

import "./assets/DesignSystem.css";
Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    formatDate(val) {
      var data = new Date(val);
      return (
        data.getUTCFullYear() +
        "/" +
        (data.getUTCMonth() + 1) +
        "/" +
        data.getDate()
      );
    },
  },
})

Vue.use(VueTelInputVuetify, {
  vuetify,
});
// Vue.use(VueCountryCode);
// Vue.use(Photoswipe);



// FB Messenger
// Vue.use(VueFbCustomerChat, {
//   page_id: 102258712527186,
//   theme_color: '#2170b4',
//   locale: 'en_US',
// })




new Vue({
  Vuelidate,
  router,
  axios,
  components,
  store,
  vuetify,
  toastnotification,
  i18n,
  render: (h) => h(App),
  
}).$mount("#app");




