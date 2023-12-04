<template>
  <div class="d-block d-bg-dark-gray">
    <v-row no-gutters>
      <v-col cols="12" md="6" style="
          background-image: url('images/home2.png');
          background-size: cover;
        ">
        <div class="mt-15 mx-4 justify-end">
          <v-row>
            <v-col cols="12" style="padding-top: 100px" :style="
              $i18n.locale == 'ar'
                ? 'padding-right: 150px;'
                : 'padding-left: 150px;'
            ">
              <p class="d-text-dark h1 d-block">
                {{ $t("Findarealestateoffice") }}
              </p>
              <p class="d-text-secandary h6 d-block">
                {{ $t("Stayintouchwithus") }}
              </p>
            </v-col>
          </v-row>
        </div>
        <officeFilter @OfficeFilter="search" style="padding-top: 400px"></officeFilter>
      </v-col>
      <v-col cols="12" md="6" class="mt-10 d-border-radius" style="
          background-image: url('images/home.webp');
          height: 500px;
          background-size: cover;
          height: 599px;
        ">
      </v-col>
    </v-row>
    <v-col id="result" cols="12 " style="overflow: visible" v-if="office">
      <div v-if="!(office.length == 0)">
        <OfficeCard v-for="(item, i) in visibleItem" :key="i" :name="item.name" :logo="item.logo" :id="item.id"
          :rent="item.numOfEstatesForRent" :sale="item.numOfEstatesForSell" :phone="item.mobile"
          :location="item.location.name + ',' + item.location.locations[0].name" :contract="item.contract.id" />
        <v-pagination total-visible="6" circle v-model="page" color="#2170B4"
          :length="Math.ceil(office.length / perPage)" prev-icon="mdi-arrow-left" next-icon="mdi-arrow-right"
          @input="updatePage">
        </v-pagination>
      </div>
      <div v-else>
        <v-container class="text-center mt-15">
          <p class="h4">لا يوجد نتائج</p>
          <p class="subtitle2 d-text-secandary">حاول مجددا باستخدام الفلتر</p>
          <v-img class="mx-auto" width="250" height="250" style="border-radius: 10px 0px 0px 10px"
            src="/images/logo.jpeg"></v-img>
        </v-container>
      </div>
    </v-col>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      form1: {
        name: "",
        location_id: "",
        searchselected: 1,
      },
      page: 1,
      perPage: 6,
    };
  },
  computed: {
    ...mapGetters(["getOffices", "getLoadingForm"]),

    loading() {
      return this.getLoadingForm;
    },
    office() {
      return this.getOffices;
    },
    form() {
      return this.$store.getters.getForm;
    },
    visibleItem() {
      return this.office.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
  },
  methods: {
    ...mapActions(["initForm", "searchOffices", "searchOfficesByName"]),
    search(val) {
      this.form = val;
      let formdata = new FormData();
      for (let f in this.form) {
        formdata.append(f, this.form[f]);
      }
      this.$store.dispatch("setForm", this.form);

      if (this.form.searchselected == 1) {
        this.searchOffices({
          api:
            this.form.searchselected == 1
              ? "office/searchByRegions"
              : "office/searchByName?name=" + this.form.name,
          form: formdata,

          // api:
          //   this.form.searchselected == 1
          //     ? "office/searchByLocation?location_id=" + this.form.location_id
          //     : "office/searchByName?name=" + this.form.name,
        });
        document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
      }
      else{
        this.searchOfficesByName({
          api: "office/searchByName?name=" + this.form.name,
        });
        document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
      }



    },
    updatePage() {
      document.getElementById("result").scrollIntoView({ behavior: "smooth" });
    },
  },
  mounted() {
    this.initForm(this.form.searchselected == null ? this.form1 : this.form);
    this.search(this.form);
    document.getElementById("result").scrollIntoView({ behavior: "smooth" })
  },
};
</script>
<style scoped>
</style>
