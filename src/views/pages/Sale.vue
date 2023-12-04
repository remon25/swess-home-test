<template>
  <div class="d-block" style="margin-bottom:100px">
    <v-row no-gutters>
      <v-col cols="12" md="6" style="
          background-image: url('images/home2.png');
          background-size: cover;
        ">
        <div class="mt-15 mx-4 justify-end">
          <v-row>
            <v-col cols="12" style=" padding-top: 100px"
              :style="$i18n.locale == 'ar' ? 'padding-right: 150px;':'padding-left: 150px;'">
              <p class="d-text-secandary h6 d-block">
                {{ $t("sellBestWayToSearchForEstate") }}
              </p>
              <p class="d-text-dark h3 d-block">
                {{ $t("sellYouCanSearchForHouse") }}
              </p>
            </v-col>
          </v-row>
        </div>
        <SocialMedia></SocialMedia>
        <homeFilter tab="one" style="padding-top: 400px;"></homeFilter>
      </v-col>
      <v-col cols="12" md="6" class="mt-10 d-border-radius" style="
          background-image: url('images/home.webp');
          height: 500px;
          background-size: cover;
          height: 599px;
        ">
      </v-col>
    </v-row>

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
    document.title = i18n.t("sell_page");
    this.initForm(this.form)
    this.$store.dispatch('getArticals', {
      api: "article/userGetAll"
    })
  },
};
</script>
<style scoped>

</style>
