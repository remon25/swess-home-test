<template>
  <v-app class="height-100per">
    <!-- WHATSAPP ICON -->
    <!-- <a href="https://wa.me/+963967850485" class="float" target="_blank">
      <img src="/icons/icons8-whatsapp.svg" class="my-float" />
    </a> -->
    <v-main class="height-100per">
      <loading-app-popup v-if="showPopup"></loading-app-popup>
      <Navbar></Navbar>
      <router-view :style="routerViewStyle" />
      <footerComponent v-if="showFooter"></footerComponent>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",

  data() {
    return {
      showPopup: false,
      showFooter: true,
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
  watch: {
    // Watch for route changes
    $route(to, from) {
      // Update visibility based on the current route
      this.updateVisibility();
    },
  },
  methods: {
    
    updateVisibility() {
      const currentRoute = this.$route.name; // Adjust as needed based on your route configuration
      this.showPopup = currentRoute == "home";
      this.showFooter = currentRoute !== "estate-gallery";
    },
  },
  created() {
    // Set initial visibility based on the current route when the component is created
    this.updateVisibility();
  },
  computed: {
  routerViewStyle() {
    return {
      marginTop: window.innerWidth <= 800 ? "20px" : "110px",
    };
  },
},
};

document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener('touchmove', function (e) {
  e.preventDefault();
});

// Uses body because vanilla JavaScript events are called off of the element they are
// added to, so bubbling would not work if we used document instead.
document.body.addEventListener('touchstart', function (e) {
  if (e.currentTarget.scrollTop === 0) {
    e.currentTarget.scrollTop = 1;
  } else if (
    e.currentTarget.scrollHeight ===
    e.currentTarget.scrollTop + e.currentTarget.offsetHeight
  ) {
    e.currentTarget.scrollTop -= 1;
  }
});

// Prevents preventDefault from being called on document if it sees a scrollable div
document.body.addEventListener('touchmove', function (e) {
  e.stopPropagation();
});
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
  src: local("Effra"), url("assets/Effra/Effra\ Medium.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "Droid";
  src: local("Effra"), url("assets/Droid\ Kufi/Droid.ttf") format("truetype");
  font-display: swap;
}

* {
  font-family: "Almarai", Helvetica, Arial;
}

html,body {
  overscroll-behavior: none !important;
}
body, html {
      height: 100%;
      margin: 0;
    }
.height-100per {
  height: 100%;
}
#search-medium span {
  font-family: "Droid", "Effra" !important;
}
.v-input .v-label {
  height: 22px !important;
}
</style>