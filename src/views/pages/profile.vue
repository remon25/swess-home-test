<template>
  <div
    class=""
    style="background-image: url(images/home2.png); background-size: 800px"
  >
    <div class="mt-5 d-bg-light-dark-2">
      <v-container>
      <!--
        <v-breadcrumbs :items="items">
          <v-breadcrumbs-item
            slot="item"
            slot-scope="{ item }"
            exact
            :class="item.class"
            :to="item.href"
          >
            <span v-if="item.disabled" class="subtitle1 d-text-dark">
              {{ $t(`${item.text}`) }}
            </span>
            <span v-else class="subtitle1 d-text-primary">
              {{ $t(`${item.text}`) }}
            </span>
          </v-breadcrumbs-item>

          <template v-slot:divider>
            <v-icon>mdi-chevron-left</v-icon>
          </template>
        </v-breadcrumbs>
        -->
      </v-container>
    </div>
    <v-container class="mt-10">
      <v-card
        width="1095px"
        class="d-border-radius"
        style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); padding: 40px"
      >
        <p class="h6 d-text-primary" style="padding-top: 19px">{{$t('PersonalProfile')}}</p>
        <v-row>
          <v-col cols="12" md="6" sm="12">
            <div class="subtitle1 my-5">
              <p class="d-md-inline mx-5"> {{$t('Fullname')}} :</p>
              <p class="body1 d-inline my-5 mx-5">
                {{ userData.first_name + " " + userData.last_name }}
              </p>
            </div>
            <div class="subtitle1 my-5">
              <p class="d-md-inline mx-5"> {{$t('mobilenumber')}}</p>
              <p class="body1 d-inline my-5 mx-5" dir="ltr">
                {{ userData.authentication }}
              </p>
              <img src="icons/phone.svg" class="d-inline" />
            </div>
          </v-col>
          
        </v-row>
      </v-card>

      <v-card
        width="1095px"
        class="d-border-radius my-10"
        style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); padding: 40px"
      >
        <p class="h6 d-text-primary" style="padding-top: 19px">
          
        </p>
        <v-data-table
          :headers="$i18n.locale == 'ar' ? headers_ar : headers_en"
          :items="Estate"
          item-key="name"
          class="mytable"
          header-class="teat"
          :item-class="itemRowBackground"
          :search="search"
          :page.sync="page"
          hide-default-footer
        > 
          <template v-slot:[`item.id`]="{ item }">
            <div class="text-center">
              <a @click="openEstate(item)">
               {{item.id}}</a
              >
            </div></template
          ><template v-slot:[`item.estate_offer_type.name_ar`]="{ item }">
            <div class="text-center">
              <a @click="openEstate(item)">
                 {{ $i18n.locale == 'ar' ? item.estate_offer_type.name_ar : item.estate_offer_type.name_en}}</a
              >
            </div></template
          ><template v-slot:[`item.estate_type.name_ar`]="{ item }">
            <div class="text-center">
              <a @click="openEstate(item)">
                 {{ $i18n.locale == 'ar' ? item.estate_type.name_ar.split('|')[1] : item.estate_type.name_en.split('|')[1]}}</a
              >
            </div></template
          ><template v-slot:[`item.price`]="{ item }">
            <div class="text-center">
              <a @click="openEstate(item)">
                {{item.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}}</a
              >
            </div></template
          ><template v-slot:[`item.office.name`]="{ item }">
            <div class="text-center">
              <a @click="openEstate(item)">
                 {{item.office.name}}</a
              >
            </div></template
          ><template v-slot:[`item.office.mobile`]="{ item }">
            <div class="text-center" dir="ltr">
              <a @click="openEstate(item)">
                 {{item.office.mobile}}</a
              >
            </div></template
          >
          <template v-slot:[`item.actions`]="{ item }">
            <div class="text-center">
              <a @click="open(item)"> <img src="icons/trach.svg" /></a></div
          ></template>

          <template v-slot:top>
            <v-text-field
              dense
              v-model="search"
              :label="$t('useSearch')"
              class="mx-4"
            ></v-text-field>
          </template>
        </v-data-table>
        <v-row class="text-center px-4 mt-10 align-center" wrap>
          <v-col cols="12" md="12">
            <v-pagination
              dir="ltr"
              circle
              v-model="page"
              color="#2170B4"
              :length="pageCount"
              prev-icon="mdi-arrow-left"
              next-icon="mdi-arrow-right"
            >
            </v-pagination>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "login",
  data: () => ({
    api: {
      user: "getUserByToken",
      estate: "user/saves",
    },
    page: 1,
    search: "",
  }),
  computed: {
    totalRecords() {
      return this.Estate.length;
    },
    userData() {
      console.log(this.$store.getters.getUser);
      return this.$store.getters.getUser;
    },
    loading(){
      return this.$store.getters.getLoadingForm
    },
    pageCount() {
      return Math.ceil(this.totalRecords / 10);
    },
    headers_ar() {
      return [
        { text: "رقم العقار", value: "id" },

        { text: "نوع العرض ", value: "estate_offer_type.name_ar" },
        { text: "نوع العقار", value: "estate_type.name_ar" },
        { text: "السعر", value: "price" },
        { text: "المكتب", value: "office.name" },
        { text: "رقم هاتف المكتب", value: "office.mobile" },
        { text: "العمليات", value: "actions" },
      ];
    },
    headers_en() {
      return [
        { text: "Estate Number", value: "id" },

        { text: " Offer Type ", value: "estate_offer_type.name_ar" },
        { text: " Estate Type", value: "estate_type.name_ar" },
        { text: "Price", value: "price" },
        { text: "Office", value: "office.name" },
        { text: " Office Phone ", value: "office.mobile" },
        { text: "Actions", value: "actions" },
      ];
    },
    Estate() {
      return this.$store.getters.getEstates;
    },
  },
  methods: {
    openEstate: function (item) {
      let routeData = this.$router.resolve({path: "/estate/" + item.id});
    window.open(routeData.href, '_blank');
    },
    itemRowBackground: function (item) {
      console.log(item.id % 2 == 1);
      return item.id % 2 != 1 ? "style-1" : "style-2";
    },
    open(item) {
      
        let form = {
          estate_id: item.id,
          is_saved: true,
        };

        this.$store.dispatch("saveEstate", {
          form: form,
        });
    this.$store.dispatch("userSaveEstate", {
      api: this.api.estate,
    });
        this.$toast.success(
        "تم ألغاء حفظ العقار " 
        );}
  },
  mounted() {
    this.$store.dispatch("userData", {
      api: this.api.user,
    });
    this.$store.dispatch("userSaveEstate", {
      api: this.api.estate,
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

  color: #000000 !important;
}
a {
    color: #000000 !important;

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
.theme--light.v-pagination .v-pagination__item,
.theme--light.v-icon {
  color: #2170b4;
}
</style>
