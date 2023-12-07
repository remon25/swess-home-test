<template>
  <v-container class="mobile-container">
    <v-row class="mobile_image_container">
      <v-col
        cols="12"
        class="mobile_image"
        style="background-image: url('images/home3.jpg')"
      >
      </v-col>
    </v-row>
    <v-row no-gutters class="button_container">
      <v-col cols="12" class="d-block mobile_title">
        <p style="margin-top: 5px; margin-bottom: 5px;">
          {{ $t("YouCanSearchForHouse") }}
        </p>
      </v-col>
      <homeFilterMobile></homeFilterMobile>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeMobile",
};
</script>

<style scoped>
.mobile-container {
  padding: 0px;
}
.button_container {
  position: relative;
  background-color: #0075a4;
  text-align: center;
  justify-content: center;
  padding: 10px;
}

.mobile_title {
  color: #f9f871 !important;
  font-size: 20px;
  font-weight: 700;
}

.mobile_subtitle {
  color: #fff !important;
  font-size: 12px;
}
.mobile_image_container {
  margin: -21px 0 0 0;
}
.mobile_image {
  height: 19rem;
  background-size: cover;
}
</style>
