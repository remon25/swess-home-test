<template>
  <v-app class="height-100per">
    <!-- WHATSAPP ICON -->
    <!-- <a href="https://wa.me/+963967850485" class="float" target="_blank">
      <img src="/icons/icons8-whatsapp.svg" class="my-float" />
    </a> -->
    <v-main class="height-100per">
      <loading-app-popup></loading-app-popup>
      <Navbar></Navbar>
      <router-view style="margin-top:20px" />
      <footerComponent></footerComponent>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",

  data: () => ({}),
};

document.addEventListener('contextmenu', event => event.preventDefault());

</script>
<style>
@font-face {
  font-family: "Almarai";
  src: local("Almarai"),
    url("assets/Almarai/Almarai-Regular.ttf") format("truetype");
  font-display: swap;
}

* {
  font-family: "Almarai", Helvetica, Arial;
}
.height-100per{
  height: 100%;
}

</style>