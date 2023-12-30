<template>
  <div v-if="!isSmallViewport"><estate-desktop /></div>
  <div v-else><estate-mobile /></div>
</template>



<script>
import EstateDesktop from "./EstateDesktop.vue";
import EstateMobile from "./EstateMobile.vue";

export default {
  name: "Estate",
  components: {
    EstateDesktop,
    EstateMobile,
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
      const mediaQuery = window.matchMedia("(max-width: 990px)");
      this.viewportSize = mediaQuery.matches ? "small" : "medium";
    },
  },
};
</script>