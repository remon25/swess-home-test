<template>
  <v-app class="height-100per">
    <!-- WHATSAPP ICON -->
    <!-- <a href="https://wa.me/+963967850485" class="float" target="_blank">
      <img src="/icons/icons8-whatsapp.svg" class="my-float" />
    </a> -->
    <v-main class="height-100per">
      <loading-app-popup></loading-app-popup>
      <Navbar></Navbar>
      <router-view :style="routerViewStyle" />
      <footerComponent></footerComponent>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",

  data() {
    return {
      routerViewStyle: {},
    };
  },
  created() {
    // Set initial style based on window width
    this.setRouterViewStyle();

    // Listen for window resize events to update the style
    window.addEventListener("resize", this.setRouterViewStyle);
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener("resize", this.setRouterViewStyle);
  },
  methods: {
    setRouterViewStyle() {
      // Set the style based on the window width
      this.routerViewStyle = {
        marginTop: window.innerWidth <= 800 ? "20px" : "110px",
      };
    },
  },
};

document.addEventListener("contextmenu", (event) => event.preventDefault());
</script>
<style>
@font-face {
  font-family: "Almarai";
  src: local("Almarai"),
    url("assets/Almarai/Almarai-Regular.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "Effra";
  src: local("Effra"),
url("assets/Effra/Effra\ Medium.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "Droid";
  src: local("Effra"),
url("assets/Droid\ Kufi/Droid.ttf") format("truetype");
  font-display: swap;
}

* {
  font-family: "Almarai", Helvetica, Arial;
}

html{
  scroll-behavior: smooth;
}
body{
  overscroll-behavior: none !important;
}
.height-100per {
  height: 100%;
}
#search-medium span{
  font-family: "Droid","Effra" !important;



}
.v-input  .v-label{
  height: 22px !important;
}
</style>