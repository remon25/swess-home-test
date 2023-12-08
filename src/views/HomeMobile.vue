<template>
  <v-container class="mobile-container">
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
        <p style="margin-top: 5px; margin-bottom: 5px">
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
  height: calc(100vh - 170px);
  height: calc(100svh - 170px);
  padding: 0px;
}
.button_container {
  position: relative;
  width: 90%;
  background-color: hsl(204.55deg 89.19% 56.47%);
  text-align: center;
  justify-content: center;
  padding: 10px;
  margin: auto;
  border-radius: 5px;
  transform: translateY(-35px);
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
  height: calc(100% - 110px);
  margin: -21px 0 0 0;
}
.mobile_image {
  height: 100%;
  background-size: cover;
}
</style>
