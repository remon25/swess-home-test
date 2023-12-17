<template>
  <div>
    <v-card outlined class="card-estate mt-15">
      <v-row class="mx-auto">
        <v-col class="cols" cols="12" sm="12" md="7">
          <div class="d-p-relative">
            <v-carousel
              :style="
                $i18n.locale == 'ar'
                  ? 'border-radius: 0px 10px 10px 0px;'
                  : 'border-radius: 10px 0px 0px 10px;'
              "
              class="img-card"
              hide-delimiters
              show-arrows-on-hover
              height="365"
              @change="currentindex = images.data[$event].index"
            >
              <v-carousel-item
                style=""
                v-for="(item, i) in images.data"
                :key="i"
                eager
              >
                <router-link
                  target="_blank"
                  :to="'/estate/' + id"
                  style="text-decoration: none"
                >
                  <v-img
                    :src="`${img_baseUrl}${item.url}`"
                    lazy-src="/images/white.jpg"
                    height="100%"
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
                {{ currentindex + "/" + images.data.length }}
                <v-icon class="d-text-light" small
                  >mdi-image-multiple-outline</v-icon
                >
              </p>
            </div>
            <div
              class="d-p-absolute report close-small"
              style="background-color: #fff; border-radius: 5px"
            >
              <v-icon @click="report(id)">mdi-close</v-icon>
            </div>
          </div>
          <router-link
            target="_blank"
            :to="'/estate/' + id"
            style="text-decoration: none"
          >
            <p
              class="h5 d-text-dark_gray title-price price-small"
              style="direction: rtl"
            >
              {{ price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }}
              <span style="font-size: 20px">{{ $t("currency") }}</span>
              <br />
              <span
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 15px;
                  direction: ltr;
                "
              >
                {{ location }}
                <v-icon color="#53535f" small>mdi-map-marker</v-icon>
              </span>
            </p>
          </router-link>
        </v-col>
        <v-col class="cols d-p-relative" cols="12" sm="12" md="5">
          <div
            style="margin-right: 17px; margin-left: 17px; margin-bottom: 75px"
          >
            <router-link
              target="_blank"
              :to="'/estate/' + id"
              style="text-decoration: none"
            >
              <p class="h5 d-text-dark_gray title-price price-lg">
                {{ price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}} <span>{{ $t("currency") }}</span>
              </p>
              <div class="d-block">
                <p class="subtitle1 d-inline">{{ location }}</p>
              </div>
              <div class="subtitle0 mt-2 d-text-dark_gray inf_holder">
                <div v-if="internalstate" class="internal_state">
                  <span style="display: inline-block" class="star">
                    <img src="/icons/star.svg" class="mx-2" alt="star" />
                  </span>
                  <span style="display: inline-block">
                    <img
                      style="vertical-align: middle"
                      src="/icons/icon-bed.svg"
                      class="mx-2"
                      alt="bed"
                    />
                  </span>
                  <span style="display: inline-block">
                    <span class="mx-2"> {{ $t("internalstate") }}</span>
                    {{
                      $i18n.locale == "ar"
                        ? internalstate.name_ar
                        : internalstate.name_en
                    }}
                  </span>
                </div>

                <div v-if="area" class="area">
                  <span style="display: inline-block" class="star">
                    <img
                      style="vertical-align: middle"
                      src="/icons/star.svg"
                      class="mx-2"
                      alt="star"
                    />
                  </span>
                  <span style="display: inline-block">
                    <v-icon class="mx-2">mdi-ruler-square</v-icon>
                  </span>
                  <span style="display: inline-block">
                    <span class="mx-2"> {{ $t("Space") }}</span
                    >{{ area }}
                    {{
                      $i18n.locale == "ar"
                        ? area_unit.name_ar
                        : area_unit.name_en
                    }}
                  </span>
                </div>

        <div v-if="ownership_type" class="ownership_type">
                  <span style="display: inline-block" class="star">
                    <img
                      style="vertical-align: middle"
                      src="/icons/star.svg"
                      class="mx-2"
                      alt="star"
                    />
                  </span>
                  <span style="display: inline-block">
                    <v-icon class="mx-2">mdi-domain</v-icon>
                  </span>
                  <span style="display: inline-block">
                    <span class="mx-2"> {{ $t("OwnershipType") }}</span>
                    {{
                      $i18n.locale == "ar"
                        ? ownership_type.name_ar
                        : ownership_type.name_en
                    }}
                  </span>
                </div>
                <!-- 
                <ul style="list-style-type: none">
                  <li v-if="internalstate">
                    <img src="/icons/star.svg" class="mx-2" />
                    <img src="/icons/icon-bed.svg" class="mx-2" />
                    <span class="mx-2"> {{ $t("internalstate") }}</span>
                    {{
                    $i18n.locale == "ar"
                    ? internalstate.name_ar
                    : internalstate.name_en
                    }}
                  </li>
                  <li v-if="area">
                    <img src="/icons/star.svg" class="mx-2" />
                    <v-icon class="mx-2">mdi-ruler-square</v-icon>
                    <span class="mx-2"> {{ $t("Space") }}</span>{{ area }}
                    {{
                    $i18n.locale == "ar"
                    ? area_unit.name_ar
                    : area_unit.name_en
                    }}
                  </li>
                  <li v-if="ownership_type">
                    <img src="/icons/star.svg" class="mx-2" />
                    <v-icon class="mx-2">mdi-domain</v-icon>

                    <span class="mx-2"> {{ $t("OwnershipType") }}</span>
                    {{
                    $i18n.locale == "ar"
                    ? ownership_type.name_ar
                    : ownership_type.name_en
                    }}
                  </li>
                </ul> -->
              </div>
              <!-- <p class="body2">
                {{
                description.substring(0, 50) +
                (description.length > 50 ? " ...." : "")
                }}
              </p> -->
            </router-link>
          </div>
          <div
            class="contract-box pa-2 px-5"
            :class="
              contract == 4
                ? 'contract-gold'
                : contract == 3
                ? 'contract-pron'
                : contract == 2
                ? 'contract-selver'
                : 'contract-free'
            "
            :style="
              $i18n.locale == 'ar'
                ? 'border-radius: 0px 0px 0px 10px;'
                : 'border-radius: 0px 0px 10px 0px;'
            "
          >
            <div
              class="float-left mx-2 save"
              @click="save(id)"
              style="cursor: pointer"
            >
              <v-icon v-if="is_saved" class="mx-2" style="color: inherit"
                >mdi-bookmark</v-icon
              >
              <v-icon v-else class="mx-2" style="color: inherit"
                >mdi-bookmark-outline</v-icon
              >
              <p class="subtitle0 d-inline">{{ $t("save") }}</p>
            </div>
            <p class="subtitle0 float-left mx-2 call">
              <a
                style="text-decoration: none; color: inherit"
                :href="'tel:' + phone"
              >
                <v-icon style="color: inherit">mdi-phone</v-icon>
                <span class="mx-2">{{ $t("call") }}</span>
              </a>
            </p>

            <div class="d-p-absolute logo office">
              <router-link
                :to="'/office/' + office.id"
                style="text-decoration: none"
              >
                <v-img
                  lazy-src="/images/logo.jpeg"
                  class="d-border-radius office-img"
                  :src="`${img_baseUrl}${logo}`"
                  width="58px"
                  height="58px"
                  contain
                ></v-img>
              </router-link>
            </div>
          </div>
          <div class="d-p-absolute report close-lg">
            <v-icon @click="report(id)">mdi-close</v-icon>
          </div>
      <div class="date-img">
            <p class="subtitle0" style="direction: ltr">
              <v-icon class="d-text-primary"
                >mdi-calendar-month</v-icon
              >
              <!-- {{ formatDate(date) }} -->
              <span>{{ formatDate(date) }}</span>
            </p>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <v-dialog v-model="dialog_form" max-width="500px">
      <reportEstate :id="id" @closeDailog="dialog_form = false"></reportEstate>
    </v-dialog>
  </div>
</template>
<script>
import { img_baseUrl } from "@/plugins/axios";

export default {
  props: {
    price: {
      default: "",
    },
    office: {
      default: [],
    },
    location: {
      default: "",
    },
    internalstate: {
      default: [],
    },
    ownership_type: {
      default: [],
    },
    area: {
      default: "",
    },
    area_unit: {
      default: [],
    },
    description: {
      default: {},
    },
    date: {
      default: "",
    },
    phone: {
      default: "",
    },
    logo: {
      default: "",
    },
    contract: {
      default: "",
    },
    is_saved: {
      default: false,
    },
    images: {
      default: [],
    },
    id: {
      default: "",
    },
  },
  data() {
    return {
      currentindex: 1,
      dialog_form: false,
      img_baseUrl,
    };
  },
  methods: {
    report(item) {
      this.dialog_form = true;
    },
    formatDate(date) {
      return this.$moment.default(date).format("DD.MM.YYYY");
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
  },
};
</script>
<style scoped>
* {
  font-family: "Droid", "Effra" !important
}
.cols {
  padding: 0px 0px 12px 0px !important;
}

.title-price {
  margin-top: 60px;
}

.contract-box {
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.1);
  height: 47px;
  position: absolute;
  width: 100%;
  bottom: 12px;
}

.logo {
  bottom: 12px;
  right: 35px;
  width: 58px;
  box-shadow: 0px -1px 6px rgb(0 0 0 / 25%);
  height: 58px;
  border-radius: 10px;
}

.card-estate {
  max-width: 972px;
  background: #ffffff;
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.1);
  border-radius: 10.4437px !important;
  border: 0px !important;
}
.price-small {
  margin-top: 0;
  background-color: #f4f4f5 !important;
  text-align: center;
  color: #53535f !important;
}
.area,.ownership_type {
  margin-bottom: 5px;
  font-size: 14px !important;
  font-weight: 400 !important;
  color: #262637 !important;
}

.area i,.ownership_type i{
  color: #262637 !important;
}
.save,.call{
  color: #262637 !important;
  font-weight: 400 !important;
}

@media (min-width: 960px) {
  .close-small {
    display: none;
  }
  .card-estate {
    height: 337px;
  }
  .price-small {
    display: none;
  }
}

@media (max-width: 960px) {
  .close-lg {
    display: none;
  }
  .price-lg {
    display: none;
  }

  .subtitle1 {
    display: none !important;
  }
  .inf_holder {
    margin-top: 60px !important;
  }
  .contract-box {
    background: none;
    box-shadow: none;
    width: 100%;
    border-radius: 0px 0px 10px 10px !important;
    height: 47px;
    position: absolute;
    bottom: 0px;
    padding-right: 0px !important;
    padding-left: 0px !important;
  }

  .img-card {
    border-radius: 10px 10px 0px 0px !important;
    height: 290px !important;
  }
  .internal_state {
    display: none;
  }
  .contract-free {
    background: none !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .save {
    margin-bottom: 16px;
    width: calc(100% / 3);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px !important;
    font-weight: 400 !important;
    background-color: #e9e9eb !important;
    color: #262637 !important;
  }
  .save > p {
    margin-bottom: 0 !important;
  }
  .call {
    width: calc(100% / 3);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    font-size: 16px !important;
    font-weight: 400 !important;
    background-color: #e9e9eb !important;
    color: #262637 !important;
    transition: background-color 0.2s ease;
  }
  .save:hover,
  .call:hover {
    background-color: rgb(19 95 160 / 25%) !important;
  }
  .office {
    position: static !important;
    width: calc(100% / 3);
    box-shadow: none;
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }
  .office-img {
    width: 70px !important;
    height: 50px !important;
  }
  .star {
    display: none !important;
  }
}

.report {
  top: 18px;
  right: 12px;
  cursor: pointer;
}

.small-img {
  margin-right: 2px;
  margin-left: 2px;
  margin-bottom: 60px;

  width: 48%;
  height: 48%;
  border-radius: 10px;
}

.index-img {
  position: absolute;
  top: 10px;
  left: 28px;
  height: 33px;
  color: white;
  background: rgb(9 48 82) !important;
  border-radius: 10px;
  opacity: 0.85;
}

.date-img {
  position: absolute;
  top: 10px;
  left: 25px;
  margin-bottom: 32px;
  color: #53535f !important;
  font-size: 14px  !important;
}
.date-img i{
  color: #53535f !important;
}

.contract-selver {
  background: linear-gradient(180deg, #f4f4f4 0%, #a7a7a7 100%);
  color: #6f6f6f;
}

.contract-free {
  background: linear-gradient(180deg, #ffffff 0%, #ececec 100%);
  color: #6f6f6f;
}

.contract-pron {
  background: linear-gradient(180deg, #cd7f32 0%, #cd7f32 100%);
  color: #ffffff;
}

.contract-gold {
  background: linear-gradient(180deg, #d7b21d 0%, #bd9d1c 100%);
  color: #ffffff;
}
</style>
