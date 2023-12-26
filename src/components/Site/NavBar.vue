<!-- eslint-disable -->
<template>
  <div>
    <v-app-bar
      height="100"
      dense
      class="d-bg-light navbar fixed d-lg-block d-none"
    >
      <v-toolbar-items v-if="isAuth == 'true' || isAuthuser">
        <v-row align="center" justify="space-around">
          <v-menu bottom origin="center center" transition="scale-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-icon large v-bind="attrs" v-on="on">mdi-account-circle</v-icon>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in menu" :key="i">
                <v-list-item-title>
                  <router-link
                    class="d-text-dark"
                    style="text-decoration: none"
                    :to="item.link"
                    >{{ $t(`${item.title}`) }}</router-link
                  >
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><button @click="logout">
                    {{ $t("logout") }}
                  </button></v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
      </v-toolbar-items>

      <v-toolbar-items v-else>
        <v-row align="center" justify="space-around">
          <v-btn
            depressed
            class="d-bg-primary py-3 d-text-light d-none d-md-block elevation-0"
            style="height: 46px; border-radius: 4px; width: 159.33px"
            href="/login"
          >
            {{ $t("login") }}
            <img
              alt="login"
              src="/icons/login.svg"
              class="pr-2"
              width="25px"
              height="20px"
            />
          </v-btn>
        </v-row>
      </v-toolbar-items>

      <v-toolbar-items>
        <v-row class="my-5 mx-5">
          <v-icon>mdi-web</v-icon>
          <switchLang style="width: 100px" class="mt-5 d-none d-md-block" />
        </v-row>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items style="text-align: center">
        <div class="mt-10 mx-2" v-for="item in menuItems" :key="item.title">
          <a
            :href="item.path"
            :class="item.path == link ? 'subtitle1 nav-active ' : 'body2 '"
            class="d-none d-md-inline nav-link mx-2 pb-6"
            flat
            @click="recreate(item.path)"
          >
            {{ $t(`${item.title}`) }}
          </a>
          <div :class="item.path == link ? 'd-inline' : 'd-none '">
            <img
              class="d-md-block arrow mt-5 d-none"
              :class="lang == 'en' ? 'polygon-left' : 'polygon-right'"
              src="/images/activeSelect/Polygon.svg"
              alt="Polygon"
              width="14px"
              height="12px"
            />
            <span
              class="d-md-block line d-bg-primary d-none"
              style="height: 5px; min-width: 65px; width: 100%"
            />
          </div>
        </div>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <router-link to="/" style="cursor: pointer" class="bold h6 nav-link">
          Swess Home
        </router-link>
      </v-toolbar-title>
      <router-link to="/" style="cursor: pointer">
        <img
          class="img-logo"
          :src="appLogo"
          alt="Logo image"
          style="height: 50px; width: 47px"
        />
      </router-link>
    </v-app-bar>

    <v-app-bar
      height="100"
      class="d-bg-light navbar fixed d-md-block d-lg-none header-mobile"
    >
      <v-toolbar-items>
        <v-row class="toggler-container">
          <v-app-bar-nav-icon
            class="d-inline d-lg-none mx-5 my-10 toggler"
            @click.stop="sidebar = !sidebar"
            aria-label="menu button"
          >
          </v-app-bar-nav-icon>
        </v-row>
      </v-toolbar-items>
      <div class="d-flex flex-column-reverse align-center">
        <v-toolbar-title style="font-size: 14px; line-height: 1">
          <router-link
            to="/"
            style="cursor: pointer"
            class="logo-header bold h6 nav-link mt-10"
          >
            Swess Home
          </router-link>
        </v-toolbar-title>
        <router-link
          to="/"
          style="cursor: pointer; line-height: 1"
          aria-label="go to home page"
        >
          <img
            class="img-logo"
            :src="appLogo"
            alt="Logo image"
            style="height: 35px; width: 35px"
          />
        </router-link>
      </div>
      <div class="login-mobile">
        <v-list-item v-if="isAuth == 'true' || isAuthuser">
          <v-row align="center" justify="space-around">
            <v-menu bottom origin="center center" transition="scale-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-list-item v-bind="attrs" v-on="on" style="padding: 0">
                  <v-list-item-icon>
                    <v-icon>mdi-account-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>{{
                    $t("PersonalProfile")
                  }}</v-list-item-content>
                </v-list-item>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, i) in menu"
                  :key="i"
                  style="padding: 0"
                >
                  <v-list-item-title>
                    <router-link
                      class="d-text-dark"
                      style="text-decoration: none"
                      :to="item.link"
                      >{{ $t(`${item.title}`) }}</router-link
                    >
                  </v-list-item-title>
                </v-list-item>
                <v-list-item style="padding: 0">
                  <v-list-item-title
                    ><button @click="logout">
                      {{ $t("logout") }}
                    </button></v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
        </v-list-item>

        <v-list-item v-else style="padding: 0">
          <v-btn
            href="/login"
            depressed
            style="background-color: transparent; height: auto"
          >
            <img width="25px" src="/icons/login-account.svg" alt="login" />
          </v-btn>
        </v-list-item>
      </div>
    </v-app-bar>

    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

    <v-navigation-drawer
      v-if="sidebar"
      :right="lang == 'ar'"
      v-model="sidebar"
      app
      style="z-index: 11"
    >
      <v-list dense>
        <v-list-item>
          <router-link
            to="/"
            style="cursor: pointer"
            aria-label="go to home page"
          >
            <img
              class="img-logo"
              :src="appLogo"
              alt="Logo image"
              style="height: 50px; width: 47px"
            />
          </router-link>
          <router-link
            to="/"
            style="cursor: pointer"
            class="bold h6 nav-link mt-10 ml-10"
          >
            Swess Home
          </router-link>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item v-for="item in menuItems" :key="item.title">
          <!--Mobile-->
          <a
            :href="item.path"
            :class="item.path == link ? 'subtitle1' : 'body2 '"
            class="nav-link"
            @click="recreate(item.path)"
            style="display: flex"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>{{ $t(`${item.title}`) }}</v-list-item-content>
          </a>
        </v-list-item>
        <v-divider></v-divider>
        <!--Mobile-->
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-web</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <switchLang />
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="isAuth == 'true' || isAuthuser">
          <v-row align="center" justify="space-around">
            <v-menu bottom origin="center center" transition="scale-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-list-item v-bind="attrs" v-on="on">
                  <v-list-item-icon>
                    <v-icon>mdi-account-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>{{
                    $t("PersonalProfile")
                  }}</v-list-item-content>
                </v-list-item>
              </template>

              <v-list>
                <v-list-item v-for="(item, i) in menu" :key="i">
                  <v-list-item-title>
                    <router-link
                      class="d-text-dark"
                      style="text-decoration: none"
                      :to="item.link"
                      >{{ $t(`${item.title}`) }}</router-link
                    >
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    ><button @click="logout">
                      {{ $t("logout") }}
                    </button></v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
        </v-list-item>

        <v-list-item v-else>
          <v-btn href="/login" depressed class="d-bg-primary d-text-light">
            <img
              alt="login"
              src="/icons/login.svg"
              width="25px"
              height="20px"
            />
            {{ $t("login") }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    appLogo: "/images/log-50.png",
    drawer: false,
    sidebar: false,
    group: null,
    menu: [{ title: "PersonalProfile", link: "/profile" }],
    menuItems: [
      { title: "main", path: "/", icon: "mdi-home" },
      { title: "sale", path: "/sale", icon: "mdi-car-key" },
      { title: "rent", path: "/rent", icon: "mdi-contacts" },
      { title: "estate_office", path: "/offices", icon: "mdi-chair-rolling" },
      { title: "Newsarticals", path: "/articals", icon: "mdi-post" },
      { title: "callUs", path: "/call-us", icon: "mdi-post" },
    ],
  }),
  methods: {
    ...mapActions(["changeLink"]),
    recreate(path) {
      this.changeLink(path);
      this.$router.push(`${path}`);
    },
    logout() {
      // localStorage.removeItem('accessToken');
      //     localStorage.setItem('isAuthenticate',false);t
      this.$store.dispatch("logout", "logout");
    },
  },
  computed: {
    ...mapGetters(["getlink"]),
    link() {
      return this.getlink;
    },
    lang() {
      return this.$i18n.locale;
    },
    isAuthuser() {
      return this.$store.getters.getIsAuth;
    },
    isAuth() {
      return localStorage.getItem("isAuthenticate");
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  mounted() {
    this.changeLink(window.location.href.split(window.location.origin)[1]);
  },
};
</script>

<style>
@media (max-width: 650px) {
  .img-logo {
    padding-top: 4px;
  }
}

.polygon-right {
  margin-right: calc(50% - 10px);
}

.polygon-left {
  margin-left: calc(50% - 10px);
}

header.fixed {
  position: fixed !important;
  top: 0;
  z-index: 10;
}
header.header-mobile > div.v-toolbar__content {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 800px) {
  header.fixed {
    position: static !important;
    top: 0;
    z-index: 10;
    height: 70px !important;
  }
  header > div.v-toolbar__content {
    height: 70px !important;
  }

  button.toggler.my-10 {
    margin: 0 !important;
  }
  .toggler-container {
    margin: 0 !important;
    align-items: center;
  }
  a.logo-header.h6 {
    font-size: 12px !important;
    line-height: 1 !important;
  }
}
</style>
