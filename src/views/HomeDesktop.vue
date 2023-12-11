<template>
    <div class="d-block">
      <v-row no-gutters>
        <v-col cols="12" md="6" style="
              background-image: url('images/home2.png');
              background-size: cover;
            ">
          <div class="mt-15 mx-4 justify-end">
            <v-row>
              <v-col cols="12" style=" padding-top: 100px"
                :style="$i18n.locale == 'ar' ? 'padding-right: 150px;' : 'padding-left: 150px;'">
                <p class="d-text-secandary h6 d-block">
                  {{ $t("BestWayToSearchForEstate") }}
                </p>
                <p class="d-text-dark h3 d-block">
                  {{ $t("YouCanSearchForHouse") }}
                </p>
              </v-col>
            </v-row>
          </div>
          <SocialMedia></SocialMedia>
          <homeFilter style="padding-top: 400px;"></homeFilter>
        </v-col>
        <v-col cols="12" md="6" class="mt-10 d-border-radius" style="
              background-image: url('images/home.webp');
              height: 500px;
              background-size: cover;
              height: 599px;
            ">
        </v-col>
      </v-row>
      <v-col cols="12 " style="overflow: visible">
        <!--  <RentalOffices></RentalOffices>-->
      </v-col>
      <v-col cols="12">
        <OurServices style="overflow: visible; margin-top: 50px;"></OurServices>
      </v-col>
      <v-col cols="12">
        <ReachWhatever></ReachWhatever>
      </v-col>
      <v-col cols="12" id="articals">
        <Articals></Articals>
      </v-col>
      <footerComponent></footerComponent>

    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  import i18n from "@/i18n";
  
  export default {
    name: "HomeView",
    data() {
      return {
        form: {
          location_id: '',
          estate_type_id: '',
          estate_offer_type_id: 1,
          price_domain_id: '',
          is_simple: true,
        },
      }
    },
    computed: {
  
    },
    methods: {
      ...mapActions(["initForm"]),
    },
    mounted() {
      document.title = i18n.t("homepage");
      this.initForm(this.form)
      this.$store.dispatch('getArticals', {
        api: "article/userGetAll"
      })
    },
  };
  </script>
  <style scoped>
  </style>
  