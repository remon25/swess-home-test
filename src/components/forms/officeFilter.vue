<!-- <template>
  <v-container :class="$i18n.locale == 'ar' ? 'filter-rtl' : 'filter-ltr'">
    <v-col cols="12">
      <v-card class="filter-box  d-lg-block d-none">
        <v-row>
          <v-col cols="3" class="subtitle1">
            <div class="select-type" style="background: #f3f3f3; height: 60px">
              <selectComponent class="mx-5" label="طريقة البحث" :height="60" :model="form.searchselected"
                :items="searchType" attr="searchselected" @select="
                  (val) => {
                    form.searchselected = val.value;
                
                  }
                " />
            </div>
          </v-col>
          <v-col cols="7" sm="7">
            <v-text-field v-if="form.searchselected == 2" v-model="form.name" class="elevation-0"></v-text-field>
            <selectComponent v-if="form.searchselected == 1" class="mx-5" :label="$t('place')" :height="60"
              :model="form.location_id" :items="location" attr="location_id" @select="
                (val) => {
                  form.location_id = val.value;
                }
              " />
          </v-col>
          <v-col cols="2" class="pr-5 d-text-dark_gray">
            <v-btn large depressed :class="$i18n.locale == 'ar' ? 'rounded-r-0' : 'rounded-l-0'"
              class="d-bg-primary d-text-light elevation-0 subtitle1" style="width: 190px; height: 61px"
              @click="search">
              {{ $t('search') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="  d-md-block d-lg-none">
        <v-row>
          <v-col cols="12" class="subtitle1">
            <div style="background: #f3f3f3; height: 60px">
              <selectComponent class="mx-5" label="طريقة البحث" :height="60" :model="form.searchselected"
                :items="searchType" attr="searchselected" @select="
                  (val) => {
                    form.searchselected = val.value;
                  }
                " />
            </div>
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field v-if="form.searchselected == 2" v-model="form.name" class="elevation-0"></v-text-field>
            <selectComponent v-if="form.searchselected == 1" class="mx-5" :model="form.location_id" :label="$t('place')"
              :height="60" :items="location" attr="location_id" @select="
                (val) => {
                  form.location_id = val.value;
                }
              " />
          </v-col>
          <v-col cols="12" class=" d-text-dark_gray">
            <v-btn large depressed class="d-bg-primary d-text-light elevation-0 subtitle1"
              style="width: 100%; height: 61px" @click="search">
              {{ $t('search') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

import { validationMixin } from "vuelidate";
import {
  required,
  requiredIf,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    form: {
      location_id: '',
      name: '',
      searchselected: 1
    },
  },
  data: () => ({
    searchType: [
      {
        text: "searchByPlace",
        value: 1,
      },
      {
        text: "searchByName",
        value: 2,
      },
    ],
  }),
  computed: {
    ...mapGetters(["getLocations", "getEstateTypes", "getPriceDomains"]),
    location() {
      return this.getLocations;
    },
    form() {
      return this.$store.getters.getForm;
    },
  },
  methods: {
    ...mapActions(["fetchLocations", 'searchOffices']),
    search() {
      if (this.form.searchselected == 1 && this.form.location_id == "") {
        this.$toast.error(" يرجى اختيار المنطقة المطلوبة");
      } else if (this.form.searchselected == 2 && this.form.name == "") {
        this.$toast.error("يرجى كتابة الاسم المطلوب");
      } else {

        let formdata = new FormData();
        for (let f in this.form) {
          formdata.append(f, this.form[f]);
        }
        this.$store.dispatch("setForm", this.form);
        this.$emit('OfficeFilter', this.form)
        /* this.searchOffices({
           api: this.searchselected == 1 ? 'office/searchByLocation?location_id='+this.form.location_id : "office/searchByName?name="+this.form.name,
         })
         this.$router.push('officesResult')*/
      }
    },
  },
  mounted() {
    this.fetchLocations("locations");
  },
};
</script>
<style scoped>
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
  width: 1078px;
  height: 61px;
  position: absolute;
  top: 133px;
  max-width: unset !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
}

.v-text-field {
  margin-top: 0px !important;
  border-radius: 0px 10px 10px 0px;
}

.select-type {
  width: 225px !important;
}
</style> -->

<template>
  <v-container :class="$i18n.locale == 'ar' ? 'filter-rtl' : 'filter-ltr'">
    <v-col cols="12">
      <v-card class="filter-box d-lg-block d-none" style="height: 112px; width: 974px">

        <v-window class="">
          <v-window-item value="one">
            <v-row>
              <v-col cols="3" class="subtitle1">
                <div class="select-type" style="background: #f3f3f3; height: 60px">
                  <selectComponent class="mx-5" label="طريقة البحث" :height="60" :model="form.searchselected"
                    :items="searchType" attr="searchselected" @select="
                      (val) => {
                        form.searchselected = val.value;
                    
                      }
                    " />
                </div>
              </v-col>
              <v-col cols="6" class="subtitle1 d-text-dark_gray">
                <v-text-field v-if="form.searchselected == 2" v-model="form.name" :placeholder="$t('agent_placeholder')"
                  class="elevation-0"></v-text-field>
                <selectComponent v-if="form.searchselected == 1" class="mx-5" :label="$t('place')" :height="60"
                  :model="form.location_id" :items="location" attr="location_id" @select="
                    (val) => {
                      form.location_id = val.value;
                    }
                  " />
              </v-col>
              <v-divider vertical style="height: 60px; margin-top: 15px"></v-divider>
              <v-col cols="3" class="pr-5 d-text-dark_gray">
                <v-btn large depressed class="d-bg-primary ma-3 pa-2 d-text-light elevation-0 subtitle1"
                  style="width: 185px; border-radius: 10px; height: 48px" @click="search">
                  {{ $t('search') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>

      </v-card>

      <v-card class="  d-md-block d-lg-none">
        <v-row>
          <v-col cols="12" class="subtitle1">
            <div style="background: #f3f3f3; height: 60px">
              <selectComponent class="mx-5" label="طريقة البحث" :height="60" :model="form.searchselected"
                :items="searchType" attr="searchselected" @select="
                  (val) => {
                    form.searchselected = val.value;
                  }
                " />
            </div>
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field v-if="form.searchselected == 2" v-model="form.name" class="elevation-0"></v-text-field>
            <selectComponent v-if="form.searchselected == 1" class="mx-5" :model="form.location_id" :label="$t('place')"
              :height="60" :items="location" attr="location_id" @select="
                (val) => {
                  form.location_id = val.value;
                }
              " />
          </v-col>
          <v-col cols="12" class=" d-text-dark_gray">
            <v-btn large depressed class="d-bg-primary d-text-light elevation-0 subtitle1"
              style="width: 100%; height: 61px" @click="search">
              {{ $t('search') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card>

    </v-col>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import { validationMixin } from "vuelidate";
import {
  required,
  requiredIf,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    form: {
      location_id: '',
      name: '',
      searchselected: 1
    },
  },
  data: () => ({
    searchType: [
      {
        text: "searchByPlace",
        value: 1,
      },
      {
        text: "searchByName",
        value: 2,
      },
    ],
  }),
  computed: {
    ...mapGetters(["getLocations", "getEstateTypes", "getPriceDomains"]),
    location() {
      return this.getLocations;
    },
    form() {
      return this.$store.getters.getForm;
    },
  },
  methods: {
    ...mapActions(["fetchLocations", 'searchOffices']),
    search() {
      if (this.form.searchselected == 1 && this.form.location_id == "") {
        this.$toast.error(" يرجى اختيار المنطقة المطلوبة");
      } else if (this.form.searchselected == 2 && this.form.name == "") {
        this.$toast.error("يرجى كتابة الاسم المطلوب");
      } else {

        let formdata = new FormData();
        for (let f in this.form) {
          formdata.append(f, this.form[f]);
        }
        this.$store.dispatch("setForm", this.form);
        this.$emit('OfficeFilter', this.form)
        /* this.searchOffices({
           api: this.searchselected == 1 ? 'office/searchByLocation?location_id='+this.form.location_id : "office/searchByName?name="+this.form.name,
         })
         this.$router.push('officesResult')*/
      }
    },
  },
  mounted() {
    this.fetchLocations("allregions");
  },
};
</script>

<style scoped>
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
  position: absolute;
  top: 133px;
  max-width: unset !important;
  padding: 24px 32px 24px 64px;
  box-shadow: 0px 24px 50px rgba(0, 0, 0, 0.1) !important;
}

.filter-button {
  position: absolute;
  top: 60px;
  width: 112px;
  height: 72px;
  border: 1px solid #f3f3f3;
  border-radius: 10px 10px 0px 0px;
  padding: 14px;
  z-index: 2;
}
</style>

