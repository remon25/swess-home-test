<template>
  <v-container class="mobile-container">
    <home-mobile-filter-popup
      :popupClass="popupClass"
    ></home-mobile-filter-popup>
    <v-row class="mobile_image_container">
      <v-col
        cols="12"
        class="mobile_image"
        style="
          background-image: url('images/home3.jpg');
          background-position: center;
        "
      >
      </v-col>
    </v-row>
    <v-row no-gutters class="button_container">
      <v-col cols="12" class="d-block mobile_title">
        <p style="margin-top: 5px; margin-bottom: 5px; color: rgb(0 4 9)">
          {{ $t("YouCanSearchForHouse") }}
        </p>
      </v-col>
      <homeFilterMobile @apply-class="updatePopupClass"></homeFilterMobile>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "HomeMobile",
  data() {
    return {
      popupClass: "",
    };
  },
  methods: {
    updatePopupClass(className) {
      this.popupClass = className;
    },
  },
};
</script>


<style scoped>
.main-class.poped_up {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100svh;
  background-color: #fff;
  z-index: 9999;
}
.mobile-container {
  height: calc(100vh - 170px);
  height: calc(100svh - 170px);
  padding: 0px;
}
.button_container {
  position: relative;
  width: 90%;
  text-align: center;
  justify-content: center;
  padding: 10px;
  margin: auto;
  border-radius: 10px;
  transform: translateY(-35px);
  /* background-color: hsl(204.55deg 89.19% 56.47%); */
  background-color: #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.27);
}

.mobile_title {
  color: #fff !important;
  font-size: 20px;
  font-weight: 700;
}

.mobile_subtitle {
  color: #fff !important;
  font-size: 12px;
}
.mobile_image_container {
  height: calc(100% - 114px);
  margin: -21px 0 0 0;
}
.mobile_image {
  height: 100%;
  background-size: cover;
}
</style>
