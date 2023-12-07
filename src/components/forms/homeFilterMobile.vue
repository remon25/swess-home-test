<template>
  <v-container :class="$i18n.locale == 'ar' ? 'filter-rtl' : 'filter-ltr'">
    <v-col cols="12" class="filter_mobile">
      <div
        class="filter-button"

      >
        <v-btn
        style="padding: 1.25rem; background-color: #74FAC8;"
          @click="
            tab = 'one';
            form.estate_offer_type_id = 1;
          "
          >{{ $t("sale") }}</v-btn
        >
      </div>

      <div class="filter-button">
        <v-btn style="padding: 1.25rem; background-color: #74FAC8;"
          @click="
            tab = 'two';
            form.estate_offer_type_id = 2;
          "
          >{{ $t("rent") }}</v-btn
        >
      </div>
    </v-col>
  </v-container>
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
  },
  data: () => ({}),
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
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        let formdata = new FormData();
        for (let f in this.form) {
          formdata.append(f, this.form[f]);
        }
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
  },
  mounted() {
    this.fetchLocations("locations");
    this.fetchEstateTypes();
    this.fetchPriceDomains();
  },
};
</script>
  <style scoped>

  .filter_mobile{
    display: flex;
    justify-content: center;
    column-gap: 1rem;
  }
  .filter-button{
    flex: 1;
  }
  .filter-button > button{
    width: 100%;
    font-size: 16px;
    font-weight: bold;
  }

  .container{
    padding: 5px;
  }

  

</style>
  