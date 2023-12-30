<template>
  <div class="estate-main-class">
    <div class="estate-small-screen">
      <div v-if="isLoad">
        <v-container class="">
          <v-row>
            <v-col cols="12" md="12" lg="4">
              <v-skeleton-loader type="image"></v-skeleton-loader>
            </v-col>
            <v-col cols="12" md="12" lg="4">
              <v-skeleton-loader
                type="list-item-avatar, article, actions"
              ></v-skeleton-loader>
            </v-col>
            <v-col cols="12" md="12" lg="8">
              <v-skeleton-loader
                type=" divider, list-item-three-line, card-heading, image, actions"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div v-else>
        <div
          class="go-back d-flex align-center justify-space-between"
          style="direction: ltr"
        >
          <router-link
            :to="`/estates?location_id=${item.location_id}&estate_type_id=${item.estate_type.id}&estate_offer_type_id=${item.estate_offer_type.id}&price_domain_id=&is_simple=true`"
            class="d-flex align-center"
            style="column-gap: 0.4rem; text-decoration: none"
          >
            <v-icon style="color: #000433">mdi-arrow-left</v-icon>
            <h5 style="font-weight: 300; color: #123f65">
              {{ $t("BackToSearchResults") }}
            </h5>
          </router-link>
          <div class="share-save d-flex align-center justify-space-between">
            <div @click="openShare" class="mx-2">
              <v-icon class="d-text-primary">mdi-share-variant-outline</v-icon>
            </div>
            <div
              class="line-separator"
              style="width: 1px; height: 30px; background-color: #ccc"
            ></div>
            <div class="mx-2" @click="save(item.id)" style="cursor: pointer">
              <v-icon v-if="is_saved" width="25.19" class="d-text-primary"
                >mdi-bookmark</v-icon
              >
              <v-icon v-else width="25.19" class="d-text-primary"
                >mdi-bookmark-outline</v-icon
              >
            </div>
          </div>
        </div>
        <div class="d-p-relative">
          <v-carousel
            hide-delimiters
            :show-arrows="true"
            style="height: unset"
            @change="currentindex = estateImages[$event].index"
          >
            <!-- Dynamically populate the carousel with images from estate-large-screen -->
            <v-carousel-item
              v-for="(image, index) in estateImages"
              :key="index"
              style="height: 400px"
              eager
            >
              <router-link :to="`/estate-gallery/${item.id}`">
                <v-img
                  :src="`${img_baseUrl}${image.url}`"
                  lazy-src="/images/white.webp"
                  v-pswp="img_baseUrl + estateImages[0].url"
                  cover
                  style="width: 100%; height: 400px"
                  eager
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="primary"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </router-link>
            </v-carousel-item>
          </v-carousel>

          <div class="index-img">
            <p class="body1 d-text-light px-4">
              {{ currentindex + "/" + estateImages.length }}
              <v-icon class="d-text-light" small
                >mdi-image-multiple-outline</v-icon
              >
            </p>
          </div>
        </div>
        <div class="all-estate-inf">
          <div class="main-inf d-flex">
            <div class="info-one">
              <div class="estate-address d-flex align-center">
                <div class="estate-address-text d-flex align-center">
                  <div class="address-one">
                    <p style="margin-bottom: 0">
                      {{
                        item.location.name +
                        "," +
                        item.location.locations[0].name
                      }}
                    </p>
                  </div>
                </div>
                <div class="d-flex estate-address-map" @click="scrollToMap">
                  <v-icon>mdi-map-marker-outline</v-icon>
                  <h3 style="font-weight: 400 !important">{{ $t("map") }}</h3>
                </div>
              </div>

              <div class="date-price-info">
                <div>
                  <div class="price-info">
                    <p style="text-transform: capitalize; margin-bottom: 0">
                      {{ $t("price") }}
                    </p>
                    <p class="h5" style="color: #262637">
                      {{
                        item.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
                        ($i18n.locale == "ar" ? " ل.س" : " SYP")
                      }}
                    </p>
                  </div>
                  <div class="date-info">
                    <p class="subtitle0 pt-1">
                      <v-icon
                        class="d-text-primary"
                        style="color: #424448 !important"
                        >mdi-calendar-month</v-icon
                      >
                      <!-- {{ formatDate(item.created_at) }} -->
                      <span style="color: #424448">{{
                        formatDate(item.created_at)
                      }}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <div class="info-two">
                    <router-link :to="'/office/' + item.office.id">
                      <img
                        width="75px"
                        height="75px"
                        :src="img_baseUrl + item.office.logo"
                        v-pswp="img_baseUrl + item.office.logo"
                      />
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="estate-details">
            <div class="estate-details-detail estate-type">
              <p class="estate-details-title">{{ $t("EstateType") }}</p>
              <div
                class="estate-details-inf d-flex align-start"
                style="column-gap: 0.35rem"
              >
                <v-icon>mdi-home-city-outline</v-icon>
                <p>
                  {{
                    $i18n.locale == "ar"
                      ? item.estate_type.name_ar.split("|")[1]
                      : item.estate_type.name_en.split("|")[1]
                  }}
                </p>
              </div>
            </div>
            <div class="estate-details-detail estate-type">
              <p class="estate-details-title">{{ $t("internalstate") }}</p>
              <div class="estate-details-inf d-flex align-start">
                <v-icon>mdi-bed-double-outline</v-icon>
                <p>
                  {{
                    $i18n.locale == "ar"
                      ? item.interior_status.name_ar
                      : item.interior_status.name_en
                  }}
                </p>
              </div>
            </div>
            <div class="estate-details-detail estate-type">
              <p class="estate-details-title">{{ $t("Space") }}</p>

              <div class="estate-details-inf d-flex align-start">
                <v-icon class="mx-2">mdi-ruler-square</v-icon>
                <p style="display: inline-block">
                  {{ item.area }}
                  {{
                    $i18n.locale == "ar"
                      ? item.area_unit.name_ar
                      : item.area_unit.name_en
                  }}
                </p>
              </div>
            </div>
            <div class="estate-details-detail estate-type">
              <p class="estate-details-title">{{ $t("OwnershipType") }}</p>

              <div class="estate-details-inf d-flex align-start">
                <v-icon class="mx-2">mdi-domain</v-icon>
                <p>
                  {{
                    $i18n.locale == "ar"
                      ? item.ownership_type.name_ar
                      : item.ownership_type.name_en
                  }}
                </p>
              </div>
            </div>
          </div>
          <div class="estate-description">
            <div class="estate-description-features">
              <p class="h6">{{ $t("EstateFeatures") }}</p>
              <v-col
                class="estate-feature"
                cols="12"
                v-if="item.estate_offer_type"
                ><v-icon size="small"> mdi-checkbox-blank-circle</v-icon>
                <p>
                  {{ $t("OfferType") + " : " }}

                  <span>{{
                    $i18n.locale == "ar"
                      ? item.estate_offer_type.name_ar
                      : item.estate_offer_type.name_en
                  }}</span>
                </p>
              </v-col>
              <v-col class="estate-feature" cols="12" v-if="item.floor"
                ><v-icon size="small">mdi-checkbox-blank-circle</v-icon>
                <p>
                  {{ $t("floor") + " : " }} <span>{{ item.floor }}</span>
                </p>
              </v-col>
            </div>
            <p class="estate-description-title">{{ $t("Details") }}</p>
            <p
              class="estate-description-text"
              style="direction: rtl; text-align: justify"
            >
              {{ item.description }}.
            </p>
          </div>
          <div id="estate-map" style="width: 100%">
            <p class="estate-map-title" style="padding-top: 19px">
              {{ $t("Address") }}
            </p>
            <v-row v-if="item.nearby_places" style="gap: 1.2rem; margin: 0">
              <div v-for="(place, i) in item.nearby_places.split('|')" :key="i">
                <div class="estate-map-nearpy d-text-light pa-3">
                  {{ place }}
                </div>
              </div>
            </v-row>
            <iframe
              :src="
                'https://maps.google.com/maps?q=' +
                item.location.locations[0].latitude +
                ',' +
                item.location.locations[0].longitude +
                '&hl=es&z=14&amp;output=embed'
              "
              width="100%"
              height="325"
              style="border: 0; margin-top: 20px"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="estate-office">
            <div class="estate-office-container">
              <h3>{{ $t("real_estate_office") }}</h3>

              <router-link :to="'/office/' + item.office.id">
                <img
                  width="115px"
                  height="115px"
                  :src="img_baseUrl + item.office.logo"
                  v-pswp="img_baseUrl + item.office.logo"
                />
              </router-link>
              <div class="estate-office-details">
                <p style="font-weight: bold; text-align: center">
                  {{ item.office.name }}
                </p>
                <p style="font-size: 13.5px; text-align: center">
                  {{ item.office.location.name }} -
                  {{ item.office.location.locations[0].name }}
                </p>
              </div>
              <div class="estate-office-contact">
                <a
                  :href="'tel:' + item.office.mobile"
                  style="text-decoration: none"
                >
                  <v-icon>mdi-phone</v-icon>
                  {{ $t("call") }}
                </a>

                <a
                  :href="'https://wa.me/' + item.office.mobile"
                  style="text-decoration: none"
                >
                  <v-icon>mdi-whatsapp</v-icon>
                  {{ $t("whatsapp") }}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="estate-fixed-call">
          <div class="call-whatsap">
            <a
              :href="'https://wa.me/' + item.office.mobile"
              style="text-decoration: none"
              ><button>
                <v-icon>mdi-whatsapp</v-icon> {{ $t("whatsapp") }}
              </button></a
            >
          </div>
          <div class="call-phone">
            <a :href="'tel:' + item.office.mobile" style="text-decoration: none"
              ><button><v-icon>mdi-phone</v-icon> {{ $t("call") }}</button></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { img_baseUrl } from "@/plugins/axios";
import { mapActions } from "vuex";
import i18n from "@/i18n";

export default {
  name: "EstateMobile",
  components: {},

  metaInfo() {
    return {
      meta: [
        { property: "og:description", content: this.item.description },
        { property: "og:image", content: this.img_url_meta },
      ],
    };
  },
  data: () => ({
    img_url_meta: "",
    img_baseUrl,
    currentindex: 1,
    page: 1,
    perPage: 4,
    is_saved: "",
    indexFloor: 0,
    dialog_img: false,
    dialog_form: false,
    dialog_share: false,
    model: 0,
    id: 0,
    img_selected: [],
    items: [
      {
        text: "main",
        disabled: true,
        class: "d-text-dark body1",
        href: "/",
      },
      {
        text: "EstatePage",
        disabled: false,
        class: "d-text-natural body1",
        href: "/estate",
      },
    ],
  }),
  computed: {
    Estate() {
      return this.$store.getters.getEstates;
    },
    item() {
      this.is_saved = this.$store.getters.getItem.is_saved;
      return this.$store.getters.getItem;
    },
    // visibleItem() {
    //   return this.Estate.slice(
    //     (this.page - 1) * this.perPage,
    //     this.page * this.perPage
    //   );
    // },
    isLoad() {
      return this.$store.getters.getLoadingItem;
    },
    estateImages() {
      let images = [];
      if (this.item && this.item.images && this.item.images.data) {
        images = this.item.images.data.filter((x) => x.type != "floor_plan");
      }
      images.sort((a, b) => a.index - b.index);

      return images;
    },
    floorImages() {
      let images = [];
      if (this.item.images.data.length > 0) {
        images = this.item.images.data.filter((x) => x.type == "floor_plan");
      }
      return images;
    },
  },
  methods: {
    preloadImages() {
      this.estateImages.forEach((image) => {
        const img = new Image();
        img.src = `${img_baseUrl}${image.url}`;
      });
    },
    updateMetaImage() {
      this.img_url_meta = img_baseUrl + this.item.images.data[0].url;
    },
    report(item) {
      this.dialog_form = true;
    },
    formatDate(date) {
      return this.$moment.default(date).format("DD.MM.YYYY");
    },
    open_img(val, type) {
      console.log(val);
      this.model = val;
      this.img_selected =
        type == "floor_plan" ? this.floorImages : this.estateImages;
      this.dialog_img = true;
    },
    openShare() {
      this.dialog_share = true;
    },
    save(id) {
      var isAuth = localStorage.getItem("isAuthenticate");
      if (isAuth == "true") {
        let form = {
          estate_id: id,
          is_saved: this.is_saved,
        };

        this.$store.dispatch("saveEstate", {
          form: form,
        });

        this.$toast.success(
          this.is_saved ? "تم ألغاء حفظ العقار " : "تم حفظ العقار"
        );
        this.is_saved = !this.is_saved;
      } else {
        this.$toast.warning("يرجى تسجيل دخول اولا");
        this.$router.push("/login");
      }
    },
    scrollToMap() {
      document
        .getElementById("estate-map")
        .scrollIntoView({ behavior: "smooth" });
    },
  },
  mounted() {
    document.title = i18n.t("EstatePage");
    this.preloadImages();
    this.$store.dispatch(
      "fetchItem",
      "estate?estate_id=" + this.$route.params.id
    );
    /*this.$store.dispatch('SimilarEstates',{
        api:"getEstateSimilarEstates?estate_id=" + this.$route.params.id
      })*/
    /*
      this.$store.dispatch("SimilarEstates", {
        api: "getEstateSimilarEstates?estate_id=" + this.$route.params.id,
      });
      */
  },
  updated() {
    this.updateMetaImage();
    // Call `$meta().refresh()` to update the meta information
    this.$meta().refresh();
  },
};
</script>
  
  <style scoped>
* {
  font-family: "Droid", "Effra" !important;
}

.save {
  position: absolute;
  top: 19px;
  left: 24px;
}
.all-estate-inf {
  padding: 0 20px;
}

.go-back {
  padding: 15px 8px;
}
.info-one {
  width: 100%;
}
.estate-address {
  direction: rtl !important;
  margin-bottom: 20px;
}
html[dir="ltr"] .estate-address-map {
  direction: ltr !important;
}
html[dir="ltr"] .estate-address {
  flex-direction: row-reverse !important;
}
html[dir="ltr"] .estate-address-text {
  border-left: none !important;
  border-right: 1px solid #ebe6e6 !important;
}
.estate-address-text {
  margin-top: 20px;
  border-left: 1px solid #ebe6e6 !important;
}
.estate-address-text p {
  font-size: 1.17em !important;
  font-weight: 600 !important;
  padding: 0px 5px;
}
.estate-address-map {
  align-items: center;
  margin-top: 16px;
  color: #184d7c;
  cursor: pointer;
}

.estate-address-map i {
  color: #184d7c !important;
}

.date-price-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.estate-details {
  display: grid;
  grid-template-columns: repeat(4, auto);
  row-gap: 1rem;
  margin-top: 20px;
  border-top: 1px solid #ebe6e6;
  border-bottom: 1px solid #ebe6e6;
}
.estate-type {
  margin: 15px 0;
}
p.estate-details-title {
  font-size: 12px !important;
  color: #6c6d7f !important;
  margin-bottom: 5px !important;
}
.estate-details-inf p {
  color: #030c16 !important;
  font-size: 14px !important;
}
.estate-details-inf i {
  color: #030c16 !important;
  margin-right: 0 !important;
  margin-left: 0 !important;
  margin-inline-end: 8px !important;
}
.estate-feature {
  display: flex;
  align-items: baseline;
  column-gap: 0.5rem;
  padding: 8px 0 !important;
}
.estate-description-features > p {
  color: #030c16 !important;
}
.estate-description {
  margin-top: 20px;
  border-bottom: 1px solid #ebe6e6;
}
.estate-feature p {
  color: #404141 !important;
  font-size: 17px !important;
}
.estate-feature i {
  color: #3b3b3b !important;
}
.estate-feature span {
  color: #030c16 !important;
  font-weight: bold;
  font-size: 16px !important;
}
.estate-description-title,
.estate-map-title {
  font-size: 20px !important;
  font-weight: 700;
  color: #030c16;
}
.estate-map-nearpy {
  color: #262637 !important;
  background-color: #f7f5f5;
  box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.3);
  padding: 10px !important;
  font-size: 13px;
  width: fit-content;
  border-radius: 8px;
}

.estate-office {
  margin-top: 20px;
}
.estate-office-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  padding: 15px;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
}
.estate-office-container h3 {
  font-size: 20px;
  color: #030c16;
}
.estate-office-contact {
  display: flex;
  column-gap: 2rem;
  width: 100%;
  justify-content: center;
}
.estate-office-contact a {
  display: flex;
  justify-content: center;
  column-gap: 0.5rem;
  flex: 1;
  padding: 7px 10px;
  color: #262637;
  background-color: rgba(38, 38, 55, 0.08);
  font-weight: 600;
  text-decoration: none;
  border-radius: 15px;
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

.index-img {
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 30px;
  background: #fcfcfc;
  border-radius: 5px;
}
.index-img p,
.index-img i {
  color: #262637 !important;
}
.pswp__button--share {
  display: none !important;
}

@media screen and (min-width: 800px) {
  .estate-main-class {
    margin-top: 100px !important;
  }
}

@media screen and (max-width: 600px) {
  .estate-details {
    grid-template-columns: auto auto !important;
  }
  .estate-details-inf p {
    font-size: 13px !important;
  }
}

@media screen and (max-width: 440px) {
  .all-estate-inf {
    padding: 0 20px;
  }
  .estate-address-text p,
  .estate-address-text span,
  .estate-address-map h3 {
    font-size: 16px !important;
  }
  .estate-address {
    flex-direction: column !important;
    align-items: flex-start !important;
  }
  html[dir="ltr"] .estate-address {
    flex-direction: column !important;
    align-items: flex-end !important;
  }
  .estate-address-text {
    border-left: none !important;
    border-right: none !important;
  }
  html[dir="ltr"] .estate-address-text {
    border-left: none !important;
    border-right: none !important;
  }

  .price-info .h5 {
    font-size: 19px !important;
  }
}

@media screen and (max-width: 300px) {
  .estate-details {
    grid-template-columns: 1fr !important;
    row-gap: 0 !important;
  }
}
</style>