<template>
  <v-container>
    <LoadingAppPopup></LoadingAppPopup>
    <v-row>
      <v-col
        cols="12"
        class="mobile_image"
        style="background-image: url('images/home3.jpg')"
      >
      </v-col>
    </v-row>
    <v-row no-gutters class="button_container">
      <v-col cols="12" class="d-block mobile_title">
        <p>
          {{ $t("YouCanSearchForHouse") }}
        </p>
      </v-col>
      <v-col cols="12">
        <p class="d-block mobile_subtitle">
          {{ $t("BestWayToSearchForEstate") }}
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
.button_container {
  position: relative;
  background-color: #0075a4;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
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
.mobile_image {
  height: 27rem;
  background-size: cover;
}
</style>
