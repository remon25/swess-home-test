<template>
  <div class="main-filter-class">
    <v-card
      class="mx-auto advance-filter d-lg-block"
      max-width="344"
      outlined
      dense
      fixed
    >
      <p class="subtitle1 d-text-primary">{{ $t("searchFilter") }}</p>

      <selectComponent
        style="position: inherit"
        class="select-box"
        :errorMessages="estate_offer_typeErrors"
        background="#FFFFFF"
        :model="form.estate_offer_type_id"
        :filled="true"
        :label="$t('OfferType')"
        :items="EstateOfferTypes"
        attr="estate_offer_type_id"
        @select="
          (val) => {
            form.estate_offer_type_id = val.value;
          }
        "
      />
      <selectComponent
        class="select-box"
        :errorMessages="price_domain_idErrors"
        :model="form.price_domain_id"
        background="#FFFFFF"
        :filled="true"
        :label="$t('searchPrice')"
        :items="PriceDomains"
        attr="price_domain_id"
        @select="
          (val) => {
            form.price_domain_id = val.value;
          }
        "
      />

      <selectComponent
        class="select-box"
        :errorMessages="estate_type_idErrors"
        :model="form.estate_type_id"
        style="border: 0px"
        background="#FFFFFF"
        :filled="true"
        :label="$t('EstateType')"
        :items="EstateTypes"
        attr="estate_type_id"
        @select="
          (val) => {
            form.estate_type_id = val.value;
          }
        "
      />
      <selectComponent
        class="select-box"
        :errorMessages="location_idErrors"
        :model="form.location_id"
        style="border: 0px"
        background="#FFFFFF"
        :filled="true"
        :label="$t('place')"
        :items="Locations"
        attr="location_id"
        @select="
          (val) => {
            form.location_id = val.value;
          }
        "
      />
      <!--<p class="subtitle1 d-text-primary mt-5">{{$t('advancedsearch')}}</p>

    <selectComponent class="select-box"
      background="#FFFFFF"
      :filled="true"
      :label="$t('internalstate')"
      :items="interiorStatuses"
      attr="interior_status_id"
      @select="
        (val) => {
          form.interior_status_id = val.value;
        }
      "
    />

    <selectComponent class="select-box"
      background="#FFFFFF"
      :filled="true"
      :label="$t('OwnershipType')"
      :items="OwnershipTypes"
      attr="ownership_type_id"
      @select="
        (val) => {
          form.ownership_type_id = val.value;
        }
      "
    />
    <Switcher
      attr="is_furnished"
      :label="$t('IstheEstatefurnished?')"
      @switcher="
        (val) => {
          form.is_furnished = val.value;
        }
      "
    ></Switcher>
    <Switcher
      attr="on_beach"
      :label="$t('IstheEstateoverlookingthebeach')"
      @switcher="
        (val) => {
          form.on_beach = val.value;
        }
      "
    ></Switcher>
        <Switcher
      attr="swimming_pool"
      :label="$t('Doestheestatehaveaswimmingpool')"
      @switcher="
        (val) => {
          form.swimming_pool = val.value;
        }
      "
    ></Switcher>-->

      <v-btn
        large
        depressed
        class="d-bg-primary pa-2 mt-10 d-text-light elevation-0 subtitle1"
        style="width: 100%; border-radius: 10px; height: 48px"
        @click="search"
      >
        {{ $t("search") }}
      </v-btn>
    </v-card>

    <v-card
      ref="advanceFilterMdCard"
      class="mx-auto mt-10 advance-filter-md d-block"
      max-width="100%"
      outlined
      dense
      fixed
      :style="{
        position: isAdvanceFilterMdFixed ? 'fixed' : 'absolute',
        top: isAdvanceFilterMdFixed ? '0px' : '0px',
        marginTop: isAdvanceFilterMdFixed ? '0px !important' : '40px',
        marginBottom: isAdvanceFilterMdFixed ? '40px !important' : '0px',
      }"
    >
      <selectComponent
        class="select-mobile"
        :errorMessages="location_idErrors"
        :model="form.location_id"
        style="border: 0px; height: 50px"
        background="#FFFFFF"
        :outlined="true"
        :label="$t('place')"
        :items="Locations"
        attr="location_id"
        @select="
          (val) => {
            form.location_id = val.value;
          }
        "
      />
      <!-- <p class="subtitle1 d-text-primary">{{$t('advancedsearch')}}</p>

    <selectComponent
      background="#FFFFFF"
      :outlined="true"
      :label="$t('internalstate')"
      :items="interiorStatuses"
      attr="interior_status_id"
      @select="
        (val) => {
          form.interior_status_id = val.value;
        }
      "
    />

    <selectComponent
      background="#FFFFFF"
      :outlined="true"
      :label="$t('OwnershipType')"
      :items="OwnershipTypes"
      attr="ownership_type_id"
      @select="
        (val) => {
          form.ownership_type_id = val.value;
        }
      "
    />
    <Switcher
      attr="is_furnished"
      :label="$t('IstheEstatefurnished?')"
      @switcher="
        (val) => {
          form.is_furnished = val.value;
        }
      "
    ></Switcher>
    <Switcher
      attr="on_beach"
      :label="$t('IstheEstateoverlookingthebeach')"
      @switcher="
        (val) => {
          form.on_beach = val.value;
        }
      "
    ></Switcher>
        <Switcher
      attr="swimming_pool"
      :label="$t('Doestheestatehaveaswimmingpool')"
      @switcher="
        (val) => {
          form.swimming_pool = val.value;
        }
      "
    ></Switcher>-->

      <v-btn
        large
        depressed
        id="search-medium"
        class="d-bg-primary pa-2 d-text-light elevation-0 subtitle1 search-md"
        style="width: 100%; border-radius: 5px; height: 40px"
        @click="search"
      >
        {{ $t("search") }}
      </v-btn>
      <router-link to="/advanced-search">
        <v-btn
          icon
          large
          depressed
          class="d-bg-primary pa-2 d-text-light elevation-0 subtitle1"
          style="width: 100%; border-radius: 5px; height: 40px"
        >
          <v-icon small>mdi-tune</v-icon>
          <div>{{ $t("advancedsearch") }}</div>
        </v-btn>
      </router-link>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      isAdvanceFilterMdFixed: false,
    };
  },
  mixins: [validationMixin],
  validations: {
    form: {
      location_id: { required },
      estate_type_id: { required },
      estate_offer_type_id: { required },
      price_domain_id: { required: false },
    },
  },
  computed: {
    ...mapGetters(["getLocations", "getEstateTypes", "getPriceDomains"]),
    form() {
      return this.$store.getters.getForm;
    },
    estate_offer_typeErrors() {
      const errors = [];
      if (!this.$v.form.estate_offer_type_id.$dirty) return errors;
      !this.$v.form.estate_offer_type_id.required &&
        errors.push("يرجى ملئ حقل نوع العقار");
      return errors;
    },
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
    EstateOfferTypes() {
      return this.$store.getters.getEstateOfferTypes;
    },
    interiorStatuses() {
      return this.$store.getters.getInteriorStatuses;
    },
    OwnershipTypes() {
      return this.$store.getters.getOwnershipTypes;
    },
  },
  methods: {
    ...mapActions([
      "fetchLocations",
      "fetchEstateTypes",
      "fetchPriceDomains",
      "fetchEstateOfferTypes",
      "fetchInteriorStatuses",
      "fetchOwnershipTypes",
      "sendfilterEstate",
    ]),
    search() {
      debugger;
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        let formdata = new FormData();
        for (let f in this.form) {
          formdata.append(f, this.form[f]);
        }
        this.$store.dispatch("setForm", this.form);
        this.$router.push({ query: this.form });
        this.sendfilterEstate({
          api: "estate/searchEstateByregionsByestatefeatures/",
          form: formdata,
          page: 1,
        });
      } else {
        this.$toast.error("أكمل الحقول المطلوبة");
      }
    },
    fillFromQuery() {
      let query = this.$route.query;
      if (query["estate_offer_type_id"]) {
        this.form.estate_offer_type_id = query["estate_offer_type_id"];
        this.$nextTick(() => {
          // Trigger the selectComponent's value synchronization
          this.$refs.selectComponent.syncValue();
        });
      }
      if (query["estate_type_id"]) {
        this.form.estate_type_id = query["estate_type_id"];
        this.$nextTick(() => {
          // Trigger the selectComponent's value synchronization
          this.$refs.selectComponent.syncValue();
        });
      }
      if (query["location_id"]) {
        this.form.location_id = query["location_id"];
        this.$nextTick(() => {
          // Trigger the selectComponent's value synchronization
          this.$refs.selectComponent.syncValue();
        });
      }
      if (query["price_domain_id"]) {
        this.form.price_domain_id = query["price_domain_id"];
        this.$nextTick(() => {
          // Trigger the selectComponent's value synchronization
          this.$refs.selectComponent.syncValue();
        });
      }
    },
    handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      if (document.getElementById("AppPopup").offsetHeight > 0) {
        this.isAdvanceFilterMdFixed = scrollY >= 181;
      } else {
        this.isAdvanceFilterMdFixed = scrollY >= 110;
      }
    },
  },
  mounted() {
    this.fillFromQuery();
    this.fetchLocations("locations");
    this.fetchEstateTypes();
    this.fetchPriceDomains();
    this.fetchEstateOfferTypes("estateOfferTypes");
    this.fetchInteriorStatuses("interiorStatuses");
    this.fetchOwnershipTypes("ownershipTypes");
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("load", this.handleScroll);
  },
  beforeDestroy() {
    // Remove the scroll event listener to prevent memory leaks
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
* {
  font-family: "Droid", "Effra" !important;
}

.main-filter-class {
  position: sticky;
  top: 110px;
}
.advance-filter {
  width: 100%;
  padding: 23px 12px 30px 12px;
  margin-top: 54px;
  background: #f3f3f3 !important;
  border: 0.5px solid #bfbbbb !important;
  border-radius: 10px !important;
}
.advance-filter-md {
  display: grid !important;
  column-gap: 5px;
  grid-template-areas: "input input" "search advanced";
  width: 100%;
  padding: 15px 12px;
  border-radius: 5px !important;
  z-index: 5;
}
.advance-filter-md button {
  font-size: 16px !important;
  font-weight: 300 !important;
  text-transform: capitalize !important ;
}
.select-mobile {
  grid-area: input;
}
.select-box {
  margin-top: 10px;
  padding-top: 5px;
  padding-right: 10px;
  padding-left: 10px;
  background-color: rgb(255, 255, 255);
  height: 44px;
  border-radius: 7px;
}
.d-bg-primary {
  background-color: #2170b4 !important;
}
@media screen and (min-width: 801px) {
  .advance-filter-md {
    display: none !important;
  }
}
@media screen and (max-width: 800px) {
  .main-filter-class {
    position: relative !important;
    top: -80px !important;
  }
  .advance-filter {
    display: none !important;
  }
  .subtitle1 {
    font-size: 10px !important;
    letter-spacing: 0px;
  }
}
</style>
