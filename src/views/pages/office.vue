<template>
  <div class="d-bg-light-dark-2">
    <v-container v-if="item.length > 0">
      <v-row v-if="!isload">
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
            <Photoswipe>
              <img
                width="145px"
                height="145px"
                :src="img_baseUrl + item[0].office.logo"
                v-pswp="img_baseUrl + item[0].office.logo"
              />
            </Photoswipe>
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
      <v-row v-if="isload">
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

    <div v-else>
      <v-container class="text-center mt-15">
        <p class="h4">هذا المكتب ليس لديه عقارات</p>
        <p class="subtitle2 d-text-secandary">يرجى اختيار مكتب اخر</p>
        <v-img
          class="mx-auto"
          width="250"
          height="250"
          style="border-radius: 10px 0px 0px 10px"
          src="/images/logo.jpeg"
        ></v-img>
      </v-container>
    </div>
  </div>
</template>

<script>
import { img_baseUrl } from "@/plugins/axios";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Estate",
  data: () => ({
    img_baseUrl,
    page: 1,
    perPage: 4,
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
  },
  mounted() {
    this.$store.dispatch("userSaveEstate", {
      api: "getOfficeAcceptedEstates?office_id=" + this.$route.params.id,
    });
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
</style>
