
  <template>
  <div class="main-class" :class="popupClass">
    <v-container :class="$i18n.locale == 'ar' ? 'filter-rtl' : 'filter-ltr'">
      <v-col
        cols="12"
        class="d-flex justify-center"
        style="padding: 0; margin-bottom: 5px"
      >
        <v-btn
          @click="closePopup"
          style="
            position: absolute;
            left: 10px;
            height: 30px;
            min-width: 38px;
            padding: 0;
            background-color: #e3e3e3;
            box-shadow: none;
          "
          ><img src="images/close.svg" style="width: 24px" alt="close"
        /></v-btn>
        <img src="images/logo.jpeg" alt="logo" style="width: 75px" />
      </v-col>

      <v-col
        cols="12 d-flex justify-center"
        style="
          border-radius: 10px;
          background-color: #ffff;
          padding: 3px;
          border: 1px solid #ccc;
          margin-top: 50px;
          margin-bottom: 50px;
        "
      >
        <div
          class="filter-button"
          :class="
            tab == 'one'
              ? 'd-bg-light d-text-light'
              : 'd-bg-inactiv d-text-dark'
          "
        >
          <v-btn
            @click="
              tab = 'one';
              form.estate_offer_type_id = 1;
            "
            class="d-border-radius elevation-0"
            style="
              font-size: small;
              width: 100%;
              height: 100%;
              border-radius: 10px;
            "
            :class="
              tab == 'one'
                ? 'd-bg-primary d-text-light'
                : 'd-bg-inactiv d-text-dark'
            "
            >{{ $t("sale") }}</v-btn
          >
        </div>

        <div
          class="filter-button"
          :class="
            tab == 'two'
              ? 'd-bg-light d-text-light'
              : 'd-bg-inactiv d-text-dark'
          "
        >
          <v-btn
            @click="
              tab = 'two';
              form.estate_offer_type_id = 2;
            "
            style="
              font-size: small;
              width: 100%;
              height: 36px;
              border-radius: 10px;
            "
            class="d-border-radius elevation-0"
            :class="
              tab == 'two'
                ? 'd-bg-primary d-text-light'
                : 'd-bg-inactiv d-text-dark'
            "
            >{{ $t("rent") }}</v-btn
          >
        </div>
      </v-col>
      <v-col cols="12">
        <v-card
          class="filter-box d-lg-block d-none"
          style="height: 112px; width: 974px"
        >
          <v-window class="">
            <v-window-item value="one">
              <v-row>
                <v-col cols="3" class="subtitle1 d-text-dark_gray">
                  <p class="pr-15">{{ $t("place") }}</p>
                  <selectComponent
                    class="ma-3"
                    :errorMessages="location_idErrors"
                    :label="$t('searchPlace')"
                    :items="Locations"
                    attr="location_id"
                    @select="
                      (val) => {
                        form.location_id = val.value;
                      }
                    "
                  />
                </v-col>
                <v-divider
                  vertical
                  style="height: 60px; margin-top: 15px"
                ></v-divider>
                <v-col cols="3" class="subtitle1 d-text-dark_gray">
                  <p class="pr-15">{{ $t("type") }}</p>
                  <selectComponent
                    :errorMessages="estate_type_idErrors"
                    class="ma-3"
                    :label="$t('searchHouse')"
                    :items="EstateTypes"
                    attr="estate_type_id"
                    @select="
                      (val) => {
                        form.estate_type_id = val.value;
                      }
                    "
                  />
                </v-col>
                <v-divider
                  vertical
                  style="height: 60px; margin-top: 15px"
                ></v-divider>
                <v-col cols="3" class="subtitle1 d-text-dark_gray">
                  <p class="pr-15">{{ $t("price") }}</p>
                  <selectComponent
                    :errorMessages="price_domain_idErrors"
                    class="ma-3"
                    :label="$t('searchPrice')"
                    :items="PriceDomains"
                    attr="price_domain_id"
                    @select="
                      (val) => {
                        form.price_domain_id = val.value;
                      }
                    "
                  />
                </v-col>
                <v-divider
                  vertical
                  style="height: 60px; margin-top: 15px"
                ></v-divider>
                <v-col cols="3" class="pr-5 d-text-dark_gray">
                  <v-btn
                    large
                    depressed
                    class="d-bg-primary ma-3 pa-2 d-text-light elevation-0 subtitle1"
                    style="width: 185px; border-radius: 10px; height: 48px"
                    @click="search"
                  >
                    {{ $t("search") }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
        <v-card
          class="filter-box d-md-block d-lg-none d-border-radius"
          max-width="344"
        >
          <p>{{ $t("place") }}</p>
          <selectComponent
            :errorMessages="location_idErrors"
            :label="$t('searchPlace')"
            :items="Locations"
            attr="location_id"
            @select="
              (val) => {
                form.location_id = val.value;
              }
            "
          />
          <v-divider style="height: 60px; margin-top: 5px"></v-divider>
          <p>{{ $t("type") }}</p>
          <selectComponent
            :errorMessages="estate_type_idErrors"
            :label="$t('searchHouse')"
            :items="EstateTypes"
            attr="estate_type_id"
            @select="
              (val) => {
                form.estate_type_id = val.value;
              }
            "
          />
          <v-divider style="height: 60px; margin-top: 5px"></v-divider>
          <p>{{ $t("price") }}</p>
          <selectComponent
            :errorMessages="price_domain_idErrors"
            :label="$t('searchPrice')"
            :items="PriceDomains"
            attr="price_domain_id"
            @select="
              (val) => {
                form.price_domain_id = val.value;
              }
            "
          />
          <v-divider style="height: 60px; margin-top: 5px"></v-divider>
          <v-btn
            large
            depressed
            class="d-bg-primary search ma-3 pa-2 d-text-light elevation-0 subtitle1"
            style="width: 107px; border-radius: 10px; height: 48px"
            @click="search"
          >
            {{ $t("search") }}
          </v-btn>
        </v-card>
      </v-col>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";
import form from "@/store/form";

export default {
  mixins: [validationMixin],

  validations: {
    form: {
      location_id: { required },
      estate_type_id: { required },
      estate_offer_type_id: { required },
      price_domain_id: { required: false },
    },
  },
  props: {
    tab: {
      default: "one",
    },
    popupClass: String,
  },
  data: () => ({ api: "login" }),
  computed: {
    ...mapGetters(["getLocations", "getEstateTypes", "getPriceDomains"]),
    location_idErrors() {
      const errors = [];
      if (!this.$v.form.location_id.$dirty) return errors;
      !this.$v.form.location_id.required && errors.push("يرجى ملئ حقل  المكان");
      return errors;
    },
    estate_type_idErrors() {
      const errors = [];
      if (!this.$v.form.estate_type_id.$dirty) return errors;
      !this.$v.form.estate_type_id.required &&
        errors.push("يرجى ملئ حقل  النوع");
      return errors;
    },
    price_domain_idErrors() {
      const errors = [];
      if (!this.$v.form.price_domain_id.$dirty) return errors;
      !this.$v.form.price_domain_id.required &&
        errors.push("يرجى ملئ حقل  السعر");
      return errors;
    },
    Locations() {
      return this.getLocations;
    },
    EstateTypes() {
      return this.getEstateTypes;
    },
    PriceDomains() {
      return this.getPriceDomains;
    },
    form() {
      return this.$store.getters.getForm;
    },
  },
  methods: {
    ...mapActions(["fetchLocations", "fetchEstateTypes", "fetchPriceDomains"]),
    search() {
      document.body.classList.remove("poped_up");
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        let formdata = new FormData();
        for (let f in this.form) {
          formdata.append(f, this.form[f]);
        }
        this.$router.push({ query: this.form });
        this.$store.dispatch("setForm", this.form);
        /*
          this.sendfilterEstate({
            api:'estate/search/',
            form:formdata,
            page:0
          })*/
        this.$router.push("estates");
      } else {
        this.$toast.error("أكمل الحقول المطلوبة");
      }
    },
    closePopup() {
      this.$emit("close-popup");
      document.body.classList.remove("poped_up");
    },
    updateTab(newTab) {
      this.$emit("updateTab", newTab); // Emit the selected tab
    },
  },
  mounted() {
    this.fetchLocations("locations");
    this.fetchEstateTypes();
    this.fetchPriceDomains();
  },
};
</script>
  <style scoped>
.main-class {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100svh;
  background-color: #fff;
}
.filter-rtl {
  position: relative;
  right: 163px;
}

.filter-ltr {
  position: relative;
  left: 163px;
}


@media (max-width: 960px) {
  .filter-rtl {
    position: relative;
    right: 0px;
  }

  .filter-ltr {
    position: relative;
    left: 0px;
  }
}

.filter-box {
  left: 0;
  right: 0;
  max-width: unset !important;
  padding: 24px 32px 24px 64px;
  box-shadow: 0px 24px 50px rgba(0, 0, 0, 0.1) !important;
}

.filter-button {
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
}
.filter-button > button {
  letter-spacing: 0px;
  font-size: 18px !important;
}
.d-bg-inactiv {
  background-color: #fff !important;
  border-radius: 10px;
}
.d-bg-primary {
  background-color: rgba(15, 76, 129, 0.2) !important;
  color: rgb(15, 76, 129) !important;
  font-weight: bold !important;
}
.d-bg-primary.search {
  background-color: rgba(15, 76, 129, 0.95) !important;
  color: #fff !important;
  font-weight: bold !important;
  letter-spacing: 0;
}
.v-application {
  line-height: 1 !important;
}

</style>
  
  
  