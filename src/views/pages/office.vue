<template>
  <div>
    <div v-if="!isSmallViewport" class="office-large-screen">
      <div class="d-bg-light-dark-2">
        <v-container>
          <v-row v-if="!isLoad">
            <v-col cols="12" md="12" lg="3">
              <v-card
                class="d-border-radius contract-box text-center"
                :class="
                  item[0].office.contract_id == 4
                    ? 'contract-gold'
                    : item[0].office.contract_id == 3
                    ? 'contract-pron'
                    : item[0].office.contract_id == 2
                    ? 'contract-selver'
                    : 'contract-free'
                "
              >
                <div>
                  <img
                    width="145px"
                    height="145px"
                    :src="img_baseUrl + item[0].office.logo"
                    v-pswp="img_baseUrl + item[0].office.logo"
                  />
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="12" lg="9" style="padding: 5px !important">
              <v-col cols="12">
                <p class="subtitle1 d-text-primary" style="padding-top: 19px">
                  {{ item[0].office.name }}
                </p>
                <p class="body1 d-text-primary">
                  <a
                    style="text-decoration: none"
                    :href="'tel:' + item[0].office.mobile"
                    ><span dir="ltr">{{ item[0].office.mobile }}</span>
                    <img src="/icons/phone.svg" class="mx-3" alt="phone"
                  /></a>
                </p>

                <p class="body1 d-text-primary">
                  <a
                    style="text-decoration: none"
                    :href="'https://wa.me/' + item[0].office.mobile"
                    ><span dir="ltr">{{ item[0].office.mobile }}</span>
                    <img alt="whatsapp" src="/icons/whatsapp.svg" class="mx-3"
                  /></a>
                </p>

                <v-row class="mb-10">
                  <div class="subtitle1 d-text-primary">
                    <p>{{ $t("Address") }}</p>
                    <p class="body2">
                      {{
                        item[0].location.name +
                        "," +
                        item[0].location.locations[0].name
                      }}
                    </p>
                  </div>
                </v-row>
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12">
                <div class="mt-2">
                  <div class="d-md-inline mx-5">
                    <p class="d-inline subtitle2 d-text-primary">
                      {{ $t("NumberofEstateforrent") }} :
                    </p>
                    <span class="mx-2">{{
                      item[0].office.numOfEstatesForRent
                    }}</span>
                  </div>
                  <div class="d-md-inline mx-5">
                    <p class="d-inline subtitle2 d-text-primary">
                      {{ $t("NumberofEstateforsale") }} :
                    </p>
                    <span class="mx-2">{{
                      item[0].office.numOfEstatesForSell
                    }}</span>
                  </div>
                </div>
              </v-col>
              <v-col cols="12">
                <div class="subtitle1 my-5 d-text-primary">
                  <p>{{ $t("Address") }}</p>
                </div>
                <div style="width: 100%; height: 325px">
                  <iframe
                    :src="
                      'https://maps.google.com/maps?q=' +
                      item[0].office.location.locations[0].latitude +
                      ',' +
                      item[0].office.location.locations[0].longitude +
                      '&hl=es&z=14&amp;output=embed'
                    "
                    width="100%"
                    height="325"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </v-col>
              <v-col cols="12" style="padding: 5px">
                <p class="subtitle1 d-text-primary">العقارات</p>
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
            </v-col>
          </v-row>
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
        </v-container>
      </div>
    </div>
    <div v-else class="office-small-screen">
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
        <div class="office-address d-flex flex-column align-center">
          <div class="office-address-title d-flex align-center">
            <div class="office-address-title-holder d-flex">
              <img
                style="width: 20px; height: auto"
                src="/images/location.svg"
              />
              <h3>{{ $t("Address") }}</h3>
            </div>
          </div>
          <div style="width: 80%; height: 280px">
            <iframe
              :src="
                'https://maps.google.com/maps?q=' +
                item[0].office.location.locations[0].latitude +
                ',' +
                item[0].office.location.locations[0].longitude +
                '&hl=es&z=14&amp;output=embed'
              "
              width="100%"
              height="280"
              style="border: 0"
              allowfullscreen=""
              eager
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="office-estates">
          <div class="estates-count d-flex">
            <div class="estates-rent">
              <h3 class="d-inline">{{ $t("NumberofEstateforrent") }}</h3>
              :
              <span>{{ item[0].office.numOfEstatesForRent }}</span>
            </div>
            <div class="in-between"></div>
            <div class="estates-sale">
              <h3 class="d-inline">{{ $t("NumberofEstateforsale") }}</h3>
              :
              <span>{{ item[0].office.numOfEstatesForSell }}</span>
            </div>
          </div>
          <div class="show-estates d-flex">
            <div>
              <h3>{{ $t("viewProperties") }}</h3>
            </div>
            <div>
              <v-icon>mdi-chevron-left</v-icon>
              <v-icon>mdi-chevron-right</v-icon>
            </div>
          </div>
        </div>
        <div class="office-footer">
          <div class="office-footer-logo">
            <img
              width="50px"
              height="auto"
              :src="img_baseUrl + item[0].office.logo"
            />
          </div>
          <div class="office-footer-title">
            <h4>{{ item[0].office.name }}</h4>
          </div>
          <div class="office-footer-address">
            <h4>
              {{ item[0].office.location.name }} -
              {{ item[0].office.location.locations[0].name }}
            </h4>
          </div>
          <div class="office-footer-contact d-flex">
            <a
              style="text-decoration: none"
              :href="'https://wa.me/' + item[0].office.mobile"
            >
              <div class="office-footer-whatsapp">
                <v-icon>mdi-whatsapp</v-icon>
              </div></a
            >

            <div class="office-footer-inbetween"></div>
            <a
              :href="'tel:' + item[0].office.mobile"
              style="text-decoration: none"
            >
              <div class="office-footer-phone"><v-icon>mdi-phone</v-icon></div>
            </a>
          </div>
        </div>
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
    perPage: 4,
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

.office-address {
  margin-top: 50px;
  row-gap: 1.8rem;
}
.office-address-title {
  width: 100%;
  justify-content: center;
  column-gap: 0.5rem;
  padding: 0 75px;
}
.office-address-title-holder {
  column-gap: 0.5rem;
  padding: 10px 20px;
  border-radius: 6px;
}

.office-estates {
  padding: 0 10px;
}
.estates-count {
  justify-content: center;
  column-gap: 0.5rem;
  margin-top: 30px;
  border: 1px solid #ccc;
  padding: 5px;
}
.estates-count .estates-sale,
.estates-count .estates-rent {
  flex: 1;
  display: flex;
  justify-content: center;
}
.estates-count h3 {
  font-size: 15px;
}
.in-between {
  width: 1px;
  height: auto;
  background-color: #ccc;
}
.show-estates {
  margin-top: 10px;
  border: 1px solid #ccc;
  padding: 5px;
}
.show-estates h3 {
  font-size: 15px;
}
.show-estates div:nth-child(1) {
  flex: 1;
  display: flex;
  justify-content: center;
}
html[dir="ltr"] .show-estates i:nth-child(1) {
  display: none;
}
html[dir="ltr"] .show-estates i:nth-child(2) {
  display: block;
}
html[dir="rtl"] .show-estates i:nth-child(1) {
  display: block;
}
html[dir="rtl"] .show-estates i:nth-child(2) {
  display: none;
}
.office-footer {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
}
.office-footer-logo {
  border: 2px solid #ccc;
  border-radius: 4px;
  line-height: 0 !important;
}
.office-footer h4 {
  font-size: 11px;
}
.office-footer-contact {
  column-gap: 0.35rem;
}
.office-footer-contact i {
  color: #0f4c81 !important;
}
.office-footer-inbetween {
  width: 1.5px;
  background-color: #cccc;
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
  .estates-count h3 {
    font-size: 12px;
  }
  .estates-count span {
    font-size: 13px;
  }
}
</style>
