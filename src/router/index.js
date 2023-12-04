import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import auth from "./auth-route";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    beforeEnter: async (to, from, next) => {
      next();
    },
    component: HomeView,
  },
  {
    path: '/call-us',
    name: 'call-us',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CallUs.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/PrivacyPolicy.vue')
  },
  {
    path: '/estate/:id',
    name: 'estate',
    beforeEnter: async (to, from, next) => {
      const Photoswipe = (await import('vue-pswipe')).Photoswipe;
      const moment = await import('moment');
      const metaInfo = (await import('vue-meta')).metaInfo;

      Vue.prototype.$moment = moment;
      Vue.component('Photoswipe', Photoswipe);
      Vue.component('metaInfo', metaInfo);
      next();
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Estate.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Auth/login.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      loginRequired: true,
      reload: true,
    },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/profile.vue')
  },
  {
    path: '/who-us',
    name: 'who-us',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/whoUS.vue')
  },
  {
    path: '/confirm',
    name: 'confirm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Auth/confirmCode.vue')
  },
  {
    path: '/rp',
    name: 'rp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Auth/resetPassword.vue')
  },
  {
    path: '/ac',
    name: 'ac',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Auth/confirmUserNumber.vue')
  },
  {
    path: '/create-real-estate-request',
    name: 'create-real-estate-request',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/CreateRealEstateRequest.vue')
  },
  {
    path: '/estates',
    name: 'estates',
    beforeEnter: async (to, from, next) => {
      const Photoswipe = (await import('vue-pswipe')).Photoswipe;
      const moment = await import('moment');
      const mapGetters = (await import("vuex")).mapGetters;

      Vue.prototype.$moment = moment;
      Vue.component('Photoswipe', Photoswipe);
      Vue.component('mapGetters', mapGetters);
      next();
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Estates.vue')
  },
  {
    path: '/artical/:id',
    name: 'artical',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Artical.vue')
  },
  {
    path: '/articals/',
    name: 'articals',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Articals.vue')
  },
  {
    path: '/offices',
    name: 'offices',
    beforeEnter: async (to, from, next) => {
      const Photoswipe = await import('vue-pswipe');
      Vue.use(Photoswipe);

      next();
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/offices.vue')
  }, {
    path: '/officesResult',
    name: 'officesResult',
    beforeEnter: async (to, from, next) => {
      const Photoswipe = await import('vue-pswipe');
      Vue.use(Photoswipe);

      next();
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/officesResult.vue')
  },

  {
    path: '/office/:id',
    name: 'office',
    beforeEnter: async (to, from, next) => {
      const Photoswipe = await import('vue-pswipe');
      Vue.use(Photoswipe);

      next();
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/office.vue')
  },
  {
    path: '/sale',
    name: 'sale',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Sale.vue')
  },
  {
    path: '/rent',
    name: 'rent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Rent.vue')
  },
  {
    path: '*',
    name: '*',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  }
]
import store from '../store/index'
import i18n from "@/i18n";
// import Photoswipe from "vue-pswipe";

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  store,
  scrollBehavior() {
    if (window.location.href.split(window.location.origin)[1] != '/officesResult') {
      document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
    store.dispatch('changeLink', window.location.href.split(window.location.origin)[1]);
  }
})
router.beforeEach(auth);
export default router
