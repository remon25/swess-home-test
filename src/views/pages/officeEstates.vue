<template>
  <div style="background-color: #e9e9eb; margin-bottom: -100px">
    <div class="office-small-screen">
      <div v-if="!isLoad">
        <div class="office-header d-flex align-center justify-space-between">
          <div class="office-header-logo">
            <img
              width="80px"
              height="auto"
              :src="img_baseUrl + item[0].office.logo"
            />
          </div>
          <div class="office-header-title">
            <h1>{{ item[0].office.name }}</h1>
            <h3>
              {{ item[0].office.location.name }} -
              {{ item[0].office.location.locations[0].name }}
            </h3>
          </div>
        </div>
        <div style="direction:ltr;width: 100%; display: flex; padding: 20px 10px;">
          <button
            @click="$router.go(-1)"
            class="d-flex align-center"
            style="column-gap: 0.4rem; text-decoration: none"
          >
            <v-icon style="color: #000433">mdi-arrow-left</v-icon>
            <h5 style="font-weight: 300; font-size: 20px; color: #123f65">
              {{ $t("Back") }}
            </h5>
          </button>
        </div>

        <v-col cols="12" style="padding: 5px;margin-top: -40px;">
          <v-col cols="12">
            <div v-if="!(visibleItem.length == 0)">
              <EstateCard
                class="my-10"
                v-for="(estate, i) in visibleItem"
                :key="i"
                :area="estate.area"
                :area_unit="estate.area_unit"
                :ownership_type="estate.ownership_type"
                :internalstate="estate.interior_status"
                :images="estate.images"
                :office="estate.office"
                :price="estate.price"
                :location="estate.location.locations[0].name"
                :description="estate.description"
                :date="estate.created_at"
                :phone="estate.office.mobile"
                :logo="estate.office.logo"
                :contract="estate.office"
                :id="estate.id"
              ></EstateCard>

              <v-pagination
                dir="ltr"
                circle
                v-model="page"
                color="#2170B4"
                :length="Math.ceil(item.length / perPage)"
                prev-icon="mdi-arrow-left"
                next-icon="mdi-arrow-right"
              >
              </v-pagination>
            </div>

            <div v-else>
              <v-container class="text-center mt-15">
                <p class="h4">لا يوجد عقارات لهذا المكتب</p>
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
        </v-col>
        <div class="estate-fixed-call">
          <div class="call-whatsap">
            <a
              :href="'https://wa.me/' + item[0].office.mobile"
              style="text-decoration: none"
              ><button>
                <v-icon>mdi-whatsapp</v-icon> {{ $t("whatsapp") }}
              </button></a
            >
          </div>
          <div class="call-phone">
            <a
              :href="'tel:' + item[0].office.mobile"
              style="text-decoration: none"
              ><button><v-icon>mdi-phone</v-icon> {{ $t("call") }}</button></a
            >
          </div>
        </div>
      </div>
      <div v-if="isLoad">
        <v-row v-if="isLoad">
          <v-col cols="12" md="8" sm="12">
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
    </div>
  </div>
</template>
  
  <script>
import { img_baseUrl } from "@/plugins/axios";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Office",
  data: () => ({
    noform: true,
    img_baseUrl,
    page: 1,
    perPage: 10,
    viewportSize: "",
    items: [
      {
        text: "main",
        disabled: true,
        class: "d-text-dark body1",
        href: "/",
      },
      {
        text: "estate_office",
        disabled: true,
        class: "d-text-dark body1",
        href: "/",
      },
      {
        text: "estate",
        disabled: false,
        class: "d-text-natural body1",
        href: "/estate",
      },
    ],
  }),
  computed: {
    ...mapGetters(["getLoadingForm"]),
    visibleItem() {
      return this.item.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
    item() {
      return this.$store.getters.getEstates;
    },
    isLoad() {
      return this.$store.getters.getLoadingForm;
    },
    isSmallViewport() {
      return this.viewportSize === "small";
    },
    isMediumViewport() {
      return this.viewportSize === "medium";
    },
  },
  mounted() {
    this.$store.dispatch("userSaveEstate", {
      api: "getOfficeAcceptedEstates?office_id=" + this.$route.params.id,
    });
    this.updateViewportSize();
    window.addEventListener("resize", this.updateViewportSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateViewportSize);
  },
  methods: {
    updateViewportSize() {
      const mediaQuery = window.matchMedia("(max-width: 800px)");
      this.viewportSize = mediaQuery.matches ? "small" : "medium";
    },
  },
};
</script>
  <style scoped>
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  border-bottom: 3px solid #3f51b5 !important;
  /* Subtitle 1 */

  font-family: "Almarai";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  font-feature-settings: "tnum" on, "lnum" on;

  color: #000000;
}

.style-1 {
  cursor: pointer;
  background-color: #f3f3f3;
}

.style-2 {
  cursor: pointer;
  background-color: #ffffff;
}

.text-start {
  border: 0px !important;
}

.theme--light.v-pagination .v-pagination__navigation,
.v-pagination__item {
  box-shadow: unset;
}

.contract-box {
  box-shadow: 0px 10px 21px 5px rgba(0, 0, 0, 0.1);
  padding-right: 32px;
  padding-left: 32px;

  position: sticky;
  top: 130px;
}

.contract-selver {
  border-top: 10px solid #a7a7a7;
  border-bottom: 10px solid #a7a7a7;
}

.contract-free {
  border-top: 10px solid #ffffff;
  border-bottom: 10px solid #ffffff;
}

.contract-pron {
  border-top: 10px solid #cd7f32;
  border-bottom: 10px solid #cd7f32;
}

.contract-gold {
  border-top: 10px solid #bd9d1c;
  border-bottom: 10px solid #bd9d1c;
}

/* small screen*/
.office-small-screen {
  margin-top: -20px;
  margin-bottom: -50px;
}
.office-small-screen * {
  font-family: "Droid", "Effra" !important;
}
.office-header {
  background-color: #3f4756;
  padding: 0.833em 6.25% 0.75em;
  color: #fff;
  text-align: center;
}

.office-header h1 {
  font-size: 21px !important;
  margin-bottom: 5px;
}
.office-header h3 {
  font-size: 14px !important;
  font-weight: 400 !important;
}

.estate-fixed-call {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  background-color: #0f4c81;
  padding: 0 10px;
  z-index: 5;
}
.estate-fixed-call > div {
  flex: 1;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #262637 !important;
  border-radius: 8px;
}
.estate-fixed-call > div button,
.estate-fixed-call > div i {
  color: #262637 !important;
  font-weight: 400;
  text-decoration: none;
}
@media screen and (max-width: 460px) {
  .office-header-logo img {
    width: 70px !important;
  }
  .office-header h1 {
    font-size: 17px !important;
  }
  .office-header h3 {
    font-size: 13px !important;
  }
}
@media screen and (max-width: 360px) {
  .office-header-logo img {
    width: 65px !important;
  }
  .office-header h1 {
    font-size: 13px !important;
  }
  .office-header h3 {
    font-size: 12px !important;
  }
}
</style>
  