<template>
  <div class="estates-main" style="background-color: #e9e9eb; margin-bottom: -100px">
    <!-- 
    <breadcrumbs :items="links"></breadcrumbs>
    -->
    <div class="mx-auto">
      <v-row no-gutters>
        <v-col cols="12" md="3" sm="12">
          <advanceFilter />
        </v-col>
        <v-col cols="12" md="9" sm="12" v-if="!isload" class="estates_result">
          <div v-if="Estates.data && Estates.data.length !== 0">
            <div class="m-4 p-4 result_title">
              <h2 class="ml-4 mr-4 pt-4" v-if="!(Status == 202)">
                <span><v-icon color="#100f0f">mdi-home-search</v-icon></span>
                {{ $t("201") }}<br />
                {{ $t("201_2") }}
              </h2>
              <h2 class="ml-4 mr-4 pt-4" v-if="!(Status == 201)">
                {{ $t("202") }}<br />{{ $t("202_2") }}
              </h2>
            </div>

            <div v-for="(item, i) in Estates.data" :key="i">
              <!-- Display EstateCard component -->
              <EstateCard
                class="my-10 pl-3 pr-3 my-estate-card"
                :area="item.area"
                :area_unit="item.area_unit"
                :ownership_type="item.ownership_type"
                :internalstate="item.interior_status"
                :images="item.images"
                :office="item.office"
                :price="item.price"
                :is_saved="item.is_saved"
                :location="item.location.locations[0].name"
                :description="item.description"
                :date="item.created_at"
                :phone="item.office.mobile"
                :logo="item.office.logo"
                :contract="item.contract_id"
                :id="item.id"
              >
              </EstateCard>

              <div
                v-if="
                  shouldShowAdditionalDiv(i) && i !== Estates.data.length - 1
                "
                class="additional-div"
              >
                <!-- Content of the additional div -->
                <router-link
                  :to="'/office/' + 50069"
                  style="text-decoration: none"
                >
                  <div
                    class="add"
                    style="
                      display: flex;
                      justify-content: center;
                      padding: 25px;
                    "
                  >
                    <img
                      style="width: 220px; height: 100px"
                      src="/images/download.jpg"
                      alt="add"
                    />
                  </div>
                </router-link>
              </div>
            </div>

            <div class="text-center">
              <v-pagination
                total-visible="6"
                circle
                v-model="current_page"
                color="#2170B4"
                :length="Estates.last_page"
                prev-icon="mdi-arrow-left"
                next-icon="mdi-arrow-right"
                @input="updatePage"
              >
              </v-pagination>
            </div>
          </div>
          <div v-else>
            <v-container class="text-center mt-15">
              <p class="h4">لا يوجد نتائج</p>
              <p class="subtitle2 d-text-secandary">
                حاول مجددا باستخدام الفلتر
              </p>
              <v-img
                class="mx-auto"
                width="250"
                height="250"
                style="border-radius: 10px 0px 0px 10px"
                src="/images/logo.jpeg"
              ></v-img>
            </v-container>
          </div>
        </v-col>
        <v-col cols="12" md="8" sm="12" v-if="isload">
          <v-container>
            <v-row class="mt-15">
              <v-col cols="7" md="7">
                <v-skeleton-loader
                  min-height="200"
                  type="image"
                ></v-skeleton-loader>
              </v-col>
              <v-col cols="5" md="5">
                <v-skeleton-loader
                  type=" article, paragraph"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
            <v-row class="mt-15">
              <v-col cols="7" md="7">
                <v-skeleton-loader
                  min-height="200"
                  type="image"
                ></v-skeleton-loader>
              </v-col>
              <v-col cols="5" md="5">
                <v-skeleton-loader
                  type=" article, paragraph"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
            <v-row class="mt-15">
              <v-col cols="7" md="7">
                <v-skeleton-loader
                  min-height="200"
                  type="image"
                ></v-skeleton-loader>
              </v-col>
              <v-col cols="5" md="5">
                <v-skeleton-loader
                  type=" article, paragraph"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </div>
    <router-link :to="'/office/' + 50069" style="text-decoration: none">
      <div
        class="add"
        style="display: flex; justify-content: center; padding: 25px"
      >
        <img
          style="width: 220px; height: 100px"
          src="/images/download.jpg"
          alt="add"
        />
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import i18n from "@/i18n";

export default {
  name: "Estates",
  data: () => ({
    noform: true,
    current_page: 1,
    links: [
      {
        text: "main",
        disabled: true,
        class: "d-text-dark body1",
        href: "/",
      },
      {
        text: "researchresults",
        disabled: false,
        class: "d-text-natural body1",
        href: "/privacy-policy",
      },
    ],
  }),
  methods: {
    ...mapActions(["sendfilterEstate"]),
    updatePage(val) {
      let query = this.$route.query;
      if (
        query["estate_offer_type_id"] &&
        query["estate_type_id"] &&
        query["location_id"]
      ) {
        this.sendfilterEstate({
          api: "estate/searchEstateByregionsByestatefeatures/",
          form: query,
          page: val,
        });
      } else {
        let formdata = new FormData();
        for (let f in this.form) {
          formdata.append(f, this.form[f]);
        }
        this.$router.push({ query: this.form });
        this.sendfilterEstate({
          api: "estate/searchEstateByregionsByestatefeatures/",
          form: formdata,
          page: val,
        });
      }
      document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    },
    shouldShowAdditionalDiv(index) {
      const currentPage = this.current_page;
      const itemsPerPage = 10; // Number of items per page

      // Calculate the index of the current item relative to the current page
      const relativeIndex = index % itemsPerPage;

      // Check if the relative index is divisible by 5 and not divisible by 10
      return relativeIndex === 4 && relativeIndex !== 9;
    },
  },
  computed: {
    ...mapGetters(["getEstates", "getStatus"]),
    form() {
      return this.$store.getters.getForm;
    },
    isload() {
      return this.$store.getters.getLoadingForm;
    },
    Estates() {
      return this.getEstates;
    },
    totalCards() {
      return this.Estates.length; // Calculate the total cards dynamically based on the Estates array length
    },
    Status() {
      return this.getStatus;
    },
  },
  mounted() {
    document.title = i18n.t("researchresults");
    this.noform = false;
    this.updatePage(1);
  },
};
</script>
<style scoped>
* {
  font-family: "Droid", "Effra" !important;
}
@media screen and (max-width: 800px) {
  .estates-main {
    margin-top: 0px !important;
    padding-top: 80px !important;
  }
  .estates_result {
    margin-top: 85px;
  }
  .result_title h2 {
    font-size: 13px;
    line-height: 1.7;
    color: #262637;
  }
}
</style>