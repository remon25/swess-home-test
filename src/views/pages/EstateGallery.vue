<template>
  <div class="estate-main-class">
    <div v-if="!isLoad">
      <div class="estate-small-screen">
      <div
        class="go-back d-flex align-center justify-space-between"
        :style="{
          position: isAdvanceFilterMdFixed ? 'fixed' : 'absolute',
          top: isAdvanceFilterMdFixed ? '0px' : '0px',
          marginTop: isAdvanceFilterMdFixed ? '0px !important' : '50px',
          marginBottom: isAdvanceFilterMdFixed ? '50px !important' : '0px',
        }"
      >
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
      <div class="d-p-relative" style="margin-top: 80px;">
        <div class="gallery-container">
          <div
            v-for="(image, index) in estateImages"
            :key="index"
            loading="lazy"
            class="gallery-item"
          >
            <img
              :src="`${img_baseUrl}${image.url}`"
              v-pswp="img_baseUrl + estateImages[0].url"
              cover
              style="width: 100%"
              loading="lazy"
            />
            <p style="direction: ltr;">{{ index + 1 }} of {{ estateImages.length }}</p>
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
    <div v-else>
      <v-container>
          <v-row>
            <v-col cols="12" md="12" lg="4">
              <v-skeleton-loader type="image"></v-skeleton-loader>
            </v-col>
            
            <v-col cols="12" md="12" lg="8">
              <v-skeleton-loader type="image"></v-skeleton-loader>
            </v-col>

            <v-col cols="12" md="12" lg="8">
              <v-skeleton-loader type="image"></v-skeleton-loader>
            </v-col>

          </v-row>
        </v-container>
    </div>
  </div>
</template>

<script>
import { img_baseUrl } from "@/plugins/axios";
import { mapActions } from "vuex";
import i18n from "@/i18n";

export default {
  name: "Estate",
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
    isAdvanceFilterMdFixed: false,
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
        text: "Estate Gallery",
        disabled: false,
        class: "d-text-natural body1",
        href: "/estate-gallery",
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
    visibleItem() {
      return this.Estate.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
    isLoad() {
      return this.$store.getters.getLoadingItem;
    },
    estateImages() {
      let images = [];
      if (this.item.images.data.length > 0) {
        images = this.item.images.data.filter((x) => x.type != "floor_plan");
      }
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
    handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      if (document.getElementById("AppPopup")) {
        this.isAdvanceFilterMdFixed = scrollY >= 121;
      } else {
        this.isAdvanceFilterMdFixed = scrollY >= 50;
      }
    },
  },
  mounted() {
    document.title = i18n.t("EstateGallery");
    this.$store.dispatch(
      "fetchItem",
      "estate?estate_id=" + this.$route.params.id
    );
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("load", this.handleScroll);
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

.go-back {
  width: 100%;
  padding: 15px 8px;
  direction: ltr;
  background-color: #fff;
  border-bottom: 0.5px solid #ccc;
  border-top: 0.5px solid #ccc;
  z-index: 5;
}
.info-one {
  width: 100%;
}

.gallery-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.5rem;
  padding: 10px 35px;
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
.gallery-item:last-child {
  margin-bottom: 40px;
}
</style>