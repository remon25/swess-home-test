<template>
  <div>
    <div class="mobile-container">
      <home-mobile-filter-popup
        :popupClass="popupClass"
        @close-popup="updatePopupClass('')"
        :tab="selectedTab"
        @updateTab="updateTab"
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
        <homeFilterMobile
          @apply-class="updatePopupClass"
          @change-tab="updateTab"
        ></homeFilterMobile>
      </v-row>
    </div>
    <v-col cols="12">
      <OurServices style="overflow: visible; margin-top: 65px"></OurServices>
    </v-col>
    <v-col cols="12">
      <ReachWhatever></ReachWhatever>
    </v-col>
    <v-col cols="12" id="articals">
      <Articals></Articals>
    </v-col>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import i18n from "@/i18n";
export default {
  name: "HomeMobile",
  data() {
    return {
      popupClass: "",
      selectedTab: "one",
      form: {
        location_id: "",
        estate_type_id: "",
        estate_offer_type_id: 1,
        price_domain_id: "",
        is_simple: true,
      },
    };
  },
  methods: {
    ...mapActions(["initForm"]),
    updatePopupClass(className) {
      this.popupClass = className;
      if (className == "poped_up") {
        document.body.classList.add("poped_up");
      }
    },
    updateTab(newTab) {
      this.selectedTab = newTab; // Update the selected tab
    },
  },
  mounted() {
    document.title = i18n.t("homepage");
    this.initForm(this.form);
    this.$store.dispatch("getArticals", {
      api: "article/userGetAll",
    });
  },
};
</script>


<style scoped>
.main-class.poped_up {
  display: block;
  z-index: 9999;
}
.mobile-container {
  height: calc(100vh - 160px);
  height: calc(100svh - 160px);
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
