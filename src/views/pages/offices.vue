<template>
  <div class="d-block d-bg-dark-gray">
    <v-row no-gutters>
      <v-col cols="12" md="6" style="
          background-image: url('images/home2.png');
          background-size: cover;
        ">
        <div class="mt-15 mx-4 justify-end">
          <v-row>
            <v-col cols="12" style="padding-top: 100px" :style="
              $i18n.locale == 'ar'
                ? 'padding-right: 150px;'
                : 'padding-left: 150px;'
            ">
              <p class="d-text-secandary h6 d-block">
                {{ $t("AgentSubtitle") }}
              </p>
              <p class="d-text-dark h3 d-block">
                {{ $t("Findarealestateoffice") }}
              </p>

            </v-col>
          </v-row>
        </div>
        <SocialMedia></SocialMedia>
        <officeFilter @OfficeFilter="goToResult" style="padding-top: 400px; padding-top: 400px;"></officeFilter>
      </v-col>
      <v-col cols="12" md="6" class="mt-10 d-border-radius" style="
          background-image: url('images/home.webp');
          height: 500px;
          background-size: cover;
          height: 599px;
        ">
      </v-col>
    </v-row>
    <v-container class="pt-10">
      <v-row>

        <v-col cols="12" md="6">
          <p class="body1">
            {{ $t("Office_1") }}
          </p>
          <p class="body1 py-4"> {{ $t("Office_2") }}
          </p>
          <p class="body1 py-4"> {{ $t("Office_3") }} <span class="d-text-primary">{{$t('Office_swesshome')}}</span>
          </p>
        </v-col>

        <v-col cols="12" md="6">
          <iframe frameBorder="0" src="https://www.google.com/maps/d/embed?mid=1YMGO8SLxWdTx46cuR3o3M3UOyQ3laqc&ehbc=2E312F"
            width="100%" height="400"></iframe>
        </v-col>
      </v-row>



      <p class="subtitle1 d-text-primary py-4">
        {{ $t("Office_4") }} </p>
      <ol>
        <li>
          <p class="body1"> {{ $t("Office_5") }}
          </p>
        </li>
        <li>
          <p class="body1"> {{ $t("Office_6") }}
          </p>
        </li>
        <li>
          <p class="body1"> {{ $t("Office_7") }}</p>
        </li>
        <li>
          <p class="body1"> {{ $t("Office_8") }}</p>
        </li>
        <li>
          <p class="body1"> {{ $t("Office_9") }} </p>
        </li>
      </ol>
      <p class="body1 py-4"> {{ $t("Office_10") }}</p>
      <p class="body1 py-4">
        <span class="d-text-primary"> {{ $t("Office_11") }}</span> {{ $t("Office_12") }}
      </p>
      <p class="subtitle1 d-text-primary py-4"> {{ $t("Office_13") }} </p>
      <p class="body1 py-4"> {{ $t("Office_14") }} </p>
      <p class="subtitle1 py-4"> {{ $t("Office_15") }}</p>
      <p class="body1 py-4"> {{ $t("Office_16") }} </p>
      <p class="body1 py-2"> {{ $t("Office_17") }}</p>
      <p class="body1 py-2"> {{ $t("Office_18") }}</p>
      <p class="body1 py-2"> {{ $t("Office_19") }} </p>
      <p class="subtitle1 d-text-primary py-4"> {{ $t("Office_20") }}
      </p>
      <p class="body1 py-2"> {{ $t("Office_21") }}</p>

      <p class="body1 py-2"> {{ $t("Office_22") }}</p>
      <p class="body1 py-2"> {{ $t("Office_23") }}</p>
      <p class="body1 py-2"> {{ $t("Office_24") }}</p>
      <p class="body1 py-2"> {{ $t("Office_25") }}</p>
      <p class="subtitle1 d-text-primary py-2"> {{ $t("Office_26") }}</p>
      <p class="body1 py-2"> {{ $t("Office_27") }}
      </p>
      <p class="body1 py-2"> {{ $t("Office_28") }}
      </p>
      <p class="body1 py-2"></p>
      <p class="body1 py-2"></p>


    </v-container>
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
        name: "",
        location_id: "",
        searchselected: 1,
      },
    };
  },
  computed: {
    ...mapGetters(["getOffices", "getLoadingForm"]),
    loading() {
      return this.getLoadingForm;
    },
    office() {
      return this.getOffices;
    },
  },
  methods: {
    ...mapActions(["initForm"]),
    goToResult() {
      this.$router.push("officesResult");
    },
  },
  mounted() {
    document.title = i18n.t("office_page");
    this.initForm(this.form);
    this.$store.dispatch("getArticals", {
      api: "article/userGetAll",
    });
  },
};
</script>
<style scoped>

</style>
