import router from "@/router/index.js";
const state = () => ({
  user: {
    authentication: "",
    password: "",
    first_name: "",
    last_name: "",
  },
  isAthenticate: false,
  accessToken: "",
  isLoad: true,
});

const actions = {
   removeAuth({ dispatch ,commit}, Auth) {
    commit("SET_AUTH", false);
  },
  async login({ dispatch, commit }, info) {
    commit("SET_ISLOAD", false);
    await axios
      .post(`${info.api}`, info.form)
      .then((res) => {
        let resultData = res.data.data;
        localStorage.setItem("accessToken", "Bearer " + resultData.token);
        localStorage.setItem("isAuthenticate", true);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + resultData.token;
        commit("SET_USER", resultData);
        commit("SET_AUTH", true);
        router.push("/");
        this._vm.$toast("تمت عملية تسجيل الدخول بنجاح");
        commit("SET_ISLOAD", true);
      })
      .catch((err) => {
        console.log(err);
        this._vm.$toast.error(" رقم الموبايل أو كلمة المرور غير صحيحة");
        commit("SET_ISLOAD", true);
      });
  },
  async userData({ dispatch, commit }, info) {
    await axios
      .get(`${info.api}`, info)
      .then((res) => {
        let resultData = res.data.data;
        commit("SET_USER", resultData);
      })
      .catch((err) => {
        commit("SET_ISLOAD", true);
      });
  },
  async Register({ dispatch, commit }, info) {
    commit("SET_ISLOAD", false);
    await axios
      .post(`${info.api}`, info.form)
      .then((res) => {
        let resultData = res.data.data;
        console.log(resultData);
        
        router.push("/confirm");
        this._vm.$toast.success("تمت عمليةأنشاء الحساب  بنجاح");
        commit("SET_ISLOAD", true);
      })
      .catch((err) => {

        this._vm.$toast.error(" رقم الموبايل أو كلمة المرور غير صحيحة");

        commit("SET_ISLOAD", true);
      });
  },
  async ConfirmCode({ dispatch, commit }, info) {
    commit("SET_ISLOAD", false);
    await axios
      .post(`${info.api}`, info.form)
      .then((res) => {
        if (info.api == "code/check") {
          router.push("/");
          commit("SET_AUTH", true);
          this._vm.$toast("تمت عملية تفعيل الحساب  بنجاح");
        } else {
          this._vm.$toast.success("تمت أعادة أرسال الكود بنجاح");
        }
        commit("SET_ISLOAD", true);
      })
      .catch((err) => {
        console.log(err);
        if (info.api == "code/check") {
          this._vm.$toast.error("يرجى التاكد من ان الرمز صحيح");
        } else {
          this._vm.$toast.error("حصل خطأأثناء عملية ارسال  الكود حاول مجددا");
        }

        commit("SET_ISLOAD", true);
      });
  },
  async logout({ dispatch, commit }, api) {
    await axios
      .delete(`${api}`)
      .then((res) => {
        commit("SET_USER", {});
        commit("SET_AUTH", false);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("isAuthenticate");


        router.push("login");
        this._vm.$toast.success("تمت عملية تسجيل الخروج بنجاح");
      })
      .catch((err) => {
        //this._vm.$toast.error(" فشلت عملية تسجيل الخروج");
        localStorage.setItem("accessToken", "");
        localStorage.setItem("isAuthenticate", false);
        commit("SET_USER", {});
        router.push("login");
      });
  },

  initUser({ commit }, value) {
    commit("SET_INIT_USER", value);
  },
};

const getters = {
  getUser: (state) => {
    return state.user;
  },
  getIsLoad: (state) => {
    return state.isLoad;
  },
  getIsAuth: (state) => {
    return state.isAthenticate;
  },
};

const mutations = {
  SET_INIT_USER(state, payload) {
    state.user = payload;
  },
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_ISLOAD(state, payload) {
    state.isLoad = payload;
  },
  SET_AUTH(state,payload){
    state.isAthenticate = payload
  }

};

export default {
  state,
  getters,
  mutations,
  actions,
};
