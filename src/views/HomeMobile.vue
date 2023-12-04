<template>
  <v-container>
    <LoadingAppPopup></LoadingAppPopup>
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
import homeFilterMobileVue from '@/components/forms/homeFilterMobile.vue';
export default {
  name: "HomeMobile",
};
</script>

<style scoped>
.button_container {
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
</style>
