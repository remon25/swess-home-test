<template>
  <div v-if="!isSmallViewport"><homeDesktop /></div>
  <div v-else><homeMobile style="margin-top:-110px" /></div>
</template>



<script>
import HomeDesktop from "./HomeDesktop.vue";
import HomeMobile from "./HomeMobile.vue";
export default {
  name: "HomeView",
  components: {
    HomeDesktop,
    HomeMobile,
  },
  data() {
    return {
      viewportSize: "",
    };
  },
  computed: {
    isSmallViewport() {
      return this.viewportSize === "small";
    },
    isMediumViewport() {
      return this.viewportSize === "medium";
    },
  },
  mounted() {
    this.updateViewportSize();
    window.addEventListener("resize", this.updateViewportSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateViewportSize);
  },
  methods: {
    updateViewportSize() {
      const mediaQuery = window.matchMedia("(max-width: 800px)");
      this.viewportSize = mediaQuery.matches ? "small" : "medium";
    },
  },
};
</script>