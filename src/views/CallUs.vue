<template>
  <div class="call-us">

    <!--
    <div class="mt-5 d-bg-light-dark-2" style="box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);}">
        <breadcrumbs :items="items">
        </breadcrumbs>
    </div>
    -->
    <v-row no-gutters>
      <v-col cols="12" md="6" style="
          background-image: url('images/home2.png');
          background-size: 500px;
          background-position: right;
        ">
        <div class="mt-15 mx-4">
          <v-row class="text-center">
            <v-col cols="12" style="padding-top: 100px" class="">
              <p class="d-text-dark h1 d-block">
                {{ $t("callus") }}
              </p>
              <p class="d-text-secandary h6 d-block">
                {{ $t("Stayintouchwithus") }}
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="mt-10 left" style="
          background-image: url('images/call-us.png');
          background-size: 100%;
          width: 960px;
          height: 400px;">
      </v-col>

      <v-container>
        <v-row>
          <v-col cols="12" md="6" style="width: 960px;">
            <contactForm></contactForm>
          </v-col>
          <v-col cols="12" md="6" class="mt-10" style="width: 960px;">
            <div class="h4 d-text-primary title-contact mx-3 footer-title d-bg-light pb-5">
              <p class="">{{$t('Easiercommunication')}}</p>
            </div>
            <!-- <p class="subtitle1 d-text-primary pt-5 px-5">{{$t('Address')}}</p>
            <p class="body1 px-5">
              {{$t('AddressPlace')}}
            </p> -->
            <div>
              <div class="row">
                <v-col cols="12" md="4" sm="4" class="pb-1 pt-5">
                  <p class="subtitle1 d-text-primary  px-5 d-inline">
                    {{$t('Address')}}
                  </p>
                </v-col>
                <v-col cols="12" md="8" sm="8" class="pb-1 pt-5">
                  <p class="body1 px-5 d-inline ">{{$t('AddressPlace')}}</p>
                </v-col>
              </div>
            </div>
            <div>
              <div class="row">
                <v-col cols="12" md="4" sm="4" class="pb-1 pt-5">
                  <p class="subtitle1 d-text-primary  px-5 d-inline">
                    {{$t('email')}}
                  </p>
                </v-col>
                <v-col cols="12" md="8" sm="8" class="pb-1 pt-5">
                  <a class="nav-link" href="mailto:Service@Swesshome.com">
                    <p class="body1 px-5 d-inline">{{$t('companyEmail')}}</p>
                  </a>
                </v-col>
              </div>
            </div>
            <div>
              <v-row>
                <v-col cols="12" md="4" sm="4" class="pb-1 pt-5">
                  <p class="subtitle1 d-text-primary  px-5 d-inline">{{$t('telephone')}}</p>
                </v-col>
                <v-col cols="12" md="8" sm="8" class="pb-1 pt-5">
                  <a class="nav-link" href="tel:+963967850485">
                    <p class="body1 px-5 d-inline" dir="ltr">{{$t('teleCompany')}}</p>
                  </a>
                </v-col>
              </v-row>
            </div>
            <div class="location ma-10 ">
              <div>
                <iframe
                  src="
                https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.709051513474!2d36.295955299999996!3d33.508946099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e172f7e28b9b%3A0x3eb3b998eec41172!2sSWESS%20HOME!5e0!3m2!1ses!2s!4v1664734530681!5m2!1ses!2s"
                  width="100%" height="325" style="border: 0" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>

              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>

    </v-row>

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
        text: "callus",
        disabled: false,
        class: "d-text-natural body1",
        href: "/call-us",
      },
    ],
  }),
  mounted() {
    document.title = i18n.t("contact_us_page");
  }
};
</script>
<style scoped>
.title-contact::after {
  content: "";
  width: 200px;
  height: 4px;
  background-color: #d7b21d;
  margin-top: 0px;
}

@media only screen and (max-width: 556px) {
  .left {
    height: 240px !important;
  }
}
</style>
