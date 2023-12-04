<template>
  <div class="call-us">
    <div
      class="mt-5 d-bg-light-dark-2"
      style="box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
}">
        <!--
        <breadcrumbs :items="items">
        </breadcrumbs>
        -->
    </div>

    <v-row no-gutters>
      <v-col
        cols="12"
        md="6"
        style="
          background-image: url('images/home2.png');
          background-size: 500px;
          background-position: right;
        "
      >
        <div class="mt-15 mx-4">
          <v-row class="text-center">
            <v-col cols="12" style="padding-top: 100px" class="">
              <p class="d-text-dark h1 d-block">
                {{ $t("whoUs") }}
              </p>
              <p class="d-text-secandary h6 d-block">
                {{ $t("Stayintouchwithus") }}
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col
        cols="12"
        md="6"
        class="mt-10"
        style="
          background-image: url('images/call-us.png');
          background-size: 100%;
          width: 960px;
          height: 500px;
        "
      >
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" class="mt-10" style="width: 960px">
          <div
            class="h4 d-text-primary title-contact mx-3 footer-title d-bg-light"
          >
            <p class="">{{$t('ourvision')}}</p>
          </div>
          <p class="body1 pa-5">
{{$t('ourvisionText')}}
          </p>
          
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="mt-10"
          style="
            background-image: url('/images/who-us-1.png');
            background-size: 100%;
            width: 508px;
            height: 382px;
          "
        >
        </v-col>

        <v-col
          cols="12"
          md="6"
          class="mt-10"
          style="
            background-image: url('/images/who-us-2.png');
            background-size: 100%;
            width: 508px;
            height: 382px;
          "
        >
        </v-col>
        <v-col cols="12" md="6" class="mt-10" style="width: 960px">
          <div
            class="h4 d-text-primary title-contact mx-3 footer-title d-bg-light"
          >
            <p class="">{{$t('Ourmissions')}}</p>

          </div>
          <p class="body1 pa-5">
{{$t('OurmissionsText')}}
          </p>
        </v-col>

        <v-col cols="12" md="6" class="mt-10" style="width: 960px">
          <div
            class="h4 d-text-primary title-contact mx-3 footer-title d-bg-light"
          >
            <p class="">{{$t('Ourconcept')}}</p>
          </div>
          <p class="body1 pa-5">
{{$t('OurconceptText')}}
          </p>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="mt-10"
          style="
            background-image: url('/images/who-us-3.png');
            background-size: 100%;
            width: 508px;
            height: 382px;
          "
        >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import i18n from "@/i18n";

export default {
  data: () => ({
    items: [
      {
        text: "main",
        disabled: true,
        class: "d-text-dark body1",
        href: "/",
      },
      {
        text: "whoUs",
        disabled: false,
        class: "d-text-natural body1",
        href: "/call-us",
      },
    ],
  }),
  mounted() {
    document.title = i18n.t("abount_us");
  }
};
</script>
<style scoped>
.footer-title:after {
    content: "";
    width: 200px;
    height: 2px;
    background-color: #d7b21d;
    position: absolute;
    margin-top: 34px;
}
.title-contact::after {
  content: "";
  width: 254px;
  height: 4px;
  background-color: #d7b21d;
  margin-top: 0px;
}
</style>
