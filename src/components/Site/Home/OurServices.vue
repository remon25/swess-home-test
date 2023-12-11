<template>
  <v-row style="">
    <v-container class="d-lg-block d-none" v-if="!isLoad">
      <v-row>
        <v-col cols="4">
          <div class="h4 d-text-primary title-OurServices footer-title d-bg-light">
            <p class="d-text-secandary h6 d-block">{{ $t('AboutOurService') }}</p>
            <p class="">{{ $t('tOurService') }}</p>
          </div>
        </v-col>

        <v-row>
          <v-col cols="8">
            <div class="text body1 pa-5 body-rent mb-15">
              <p>
                {{ $t('OurService') }} </p>
            </div>
          </v-col>
        </v-row>
        <v-col cols="4">

          <a :href="'/artical/' + item[0].id" class="no_decoration">
            <v-card class="mx-auto elevation-0" max-width="300">
              <div class="hover">
                <v-img class="d-border-radius " src="images/service-one.webp" height="369px"
                  width="300px"></v-img>
              </div>
              <v-row class="mt-5">
                <!-- <v-col cols="4" style="overflow: visible">
                <v-btn large depressed :href="'/artical/' + item[0].id"
                  class="d-bg-primary ma-3 pa-2 d-text-light elevation-0 subtitle1"
                  style="width: 107px; border-radius: 10px; height: 48px">
                  {{ $t("ReadMore") }}
                </v-btn>
              </v-col> -->
                <v-col cols="12" class="px-10">
                  <p class="h6 d-text-dark_gray">{{ $i18n.locale == 'ar' ? item[0].title.split("|")[0] :
                  item[0].title.split("|")[1]
                  }}</p>

                  <!-- <p class="body2">
                  {{ $i18n.locale == 'ar' ?
                      item[0].body.split("|")[0].substring(0, 90) +
                      (item[0].body.split("|")[0].length > 90 ? " ...." : "") :
                      item[0].body.split("|")[3].substring(0, 90) +
                      (item[0].body.split("|")[3].length > 90 ? " ...." : "")
                  }}
                </p> -->

                  <div v-if="($i18n.locale == 'ar')" v-html="item[0].body.split('|')[0].substring(0, 90) + '.....'"
                    class="body1 d-text-dark_gray"></div>
                  <div v-if="($i18n.locale == 'en')" v-html="item[0].body.split('|')[1].substring(0, 90) + '.....'"
                    class="body1 d-text-dark_gray"></div>



                </v-col>
              </v-row>
            </v-card>
          </a>

        </v-col>
        <v-col cols="4">
          <a :href="'/artical/' + item[1].id" class="no_decoration">

            <v-card class="mx-auto elevation-0" max-width="300">
              <v-row class="mt-5">
                <!-- <v-col cols="4" style="overflow: visible">
                <v-btn large depressed :href="'/artical/' + item[1].id"
                  class="d-bg-primary ma-3 pa-2 d-text-light elevation-0 subtitle1"
                  style="width: 107px; border-radius: 10px; height: 48px">
                  {{ $t("ReadMore") }}
                </v-btn>
              </v-col> -->
                <v-col cols="12" class="px-10">
                  <p class="h6 d-text-dark_gray mt-5">{{ $i18n.locale == 'ar' ? item[1].title.split("|")[0] :
                  item[1].title.split("|")[1]
                  }}</p>

                  <!-- <p class="body2">
                  {{ $i18n.locale == 'ar' ?
                      item[1].body.split("|")[0].substring(0, 90) +
                      (item[1].body.split("|")[0].length > 90 ? " ...." : "") :
                      item[1].body.split("|")[3].substring(0, 90) +
                      (item[1].body.split("|")[3].length > 90 ? " ...." : "")
                  }}
                </p> -->

                  <div v-if="($i18n.locale == 'ar')" v-html="item[1].body.split('|')[0].substring(0, 90) + '.....'"
                    class="body1 d-text-dark_gray mb-5"></div>
                  <div v-if="($i18n.locale == 'en')" v-html="item[1].body.split('|')[1].substring(0, 90) + '.....'"
                    class="body1 d-text-dark_gray mb-5"></div>


                </v-col>
              </v-row>
              <div class="hover">

            <v-img class="d-border-radius" src="images/service-two.webp" height="369px"
                  width="300px"></v-img>
              </div>
            </v-card>
          </a>
        </v-col>

        <v-col cols="4">
          <a :href="'/artical/' + item[2].id" class="no_decoration">

            <v-card class="mx-auto elevation-0" max-width="300">
              <div class="hover">

                <v-img class="d-border-radius" src="images/service-three.webp" height="369px"
                  width="300px"></v-img>
              </div>
              <v-row class="mt-5">
                <!-- <v-col cols="4" style="overflow: visible">
                <v-btn large depressed :href="'/artical/' + item[2].id"
                  class="d-bg-primary ma-3 pa-2 d-text-light elevation-0 subtitle1"
                  style="width: 107px; border-radius: 10px; height: 48px">
                  {{ $t("ReadMore") }}
                </v-btn>
              </v-col> -->
                <v-col cols="12" class="px-10">
                  <p class="h6 d-text-dark_gray">{{ $i18n.locale == 'ar' ? item[2].title.split("|")[0] :
                  item[2].title.split("|")[1]
                  }}</p>

                  <!-- <p class="body2">
                  {{ $i18n.locale == 'ar' ?
                      item[2].body.split("|")[0].substring(0, 90) +
                      (item[2].body.split("|")[0].length > 90 ? " ...." : "") :
                      item[2].body.split("|")[3].substring(0, 90) +
                      (item[2].body.split("|")[3].length > 90 ? " ...." : "")
                  }}
                </p> -->

                  <div v-if="($i18n.locale == 'ar')" v-html="item[2].body.split('|')[0].substring(0, 90) + '.....'"
                    class="body1 d-text-dark_gray"></div>
                  <div v-if="($i18n.locale == 'en')" v-html="item[2].body.split('|')[1].substring(0, 90) + '.....'"
                    class="body1 d-text-dark_gray"></div>


                </v-col>
              </v-row>
            </v-card>
          </a>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="d-md-block d-lg-none" v-if="!isLoad">
      <v-row>
        <v-col cols="12">
          <div class="h4 d-text-primary title-OurServices mx-3 footer-title d-bg-light">
            <p class="d-text-secandary h6 d-block">{{ $t('AboutOurService') }} </p>

            <p class="">{{ $t('tOurService') }}</p>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="body1 pa-5 mb-15">
            <p>
              {{ $t('OurService') }} </p>
          </div>
        </v-col>
        <v-col cols="12">
          <v-card class="mx-auto elevation-0" max-width="300">
            <a :href="'/artical/' + item[0].id" class="no_decoration">

              <v-img style="border-radius: 20px" :src="`${img_baseUrl}${item[0].images.data[0].url}`" height="369px"
                width="300px"></v-img>
              <v-col cols="12">

                <p class="h6 d-text-dark_gray mt-5">{{ $i18n.locale == 'ar' ? item[0].title.split("|")[0] :
                item[0].title.split("|")[1]
                }}</p>

                <!-- <p class="body2">
                {{ $i18n.locale == 'ar' ?
                    item[0].body.split("|")[0].substring(0, 90) +
                    (item[0].body.split("|")[0].length > 90 ? " ...." : "") :
                    item[0].body.split("|")[3].substring(0, 90) +
                    (item[0].body.split("|")[3].length > 90 ? " ...." : "")
                }}
              </p> -->

                <div v-if="($i18n.locale == 'ar')" v-html="item[0].body.split('|')[0].substring(0, 90) + '.....'"
                  class="body1 d-text-dark_gray"></div>
                <div v-if="($i18n.locale == 'en')" v-html="item[0].body.split('|')[1].substring(0, 90) + '.....'"
                  class="body1 d-text-dark_gray"></div>

                <!-- <v-btn depressed :href="'/artical/' + item[0].id" class="d-bg-primary ma-3 pa-2 d-text-light elevation-0"
                style="width: 107px; border-radius: 10px; height: 48px">
                {{ $t("ReadMore") }}
              </v-btn> -->
              </v-col>
            </a>

          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="mx-auto elevation-0" max-width="300">
            <a :href="'/artical/' + item[1].id" class="no_decoration">

              <v-img style="border-radius: 20px" :src="`${img_baseUrl}${item[1].images.data[0].url}`" height="369px"
                width="300px"></v-img>
              <v-col cols="12">
                <p class="h6 d-text-dark_gray mt-5">{{ $i18n.locale == 'ar' ? item[1].title.split("|")[0] :
                item[1].title.split("|")[1]
                }}</p>

                <!-- <p class="body2">
                {{ $i18n.locale == 'ar' ?
                    item[1].body.split("|")[0].substring(0, 90) +
                    (item[1].body.split("|")[0].length > 90 ? " ...." : "") :
                    item[1].body.split("|")[3].substring(0, 90) +
                    (item[1].body.split("|")[3].length > 90 ? " ...." : "")
                }}
              </p> -->

                <div v-if="($i18n.locale == 'ar')" v-html="item[1].body.split('|')[0].substring(0, 90) + '.....'"
                  class="body1 d-text-dark_gray"></div>
                <div v-if="($i18n.locale == 'en')" v-html="item[1].body.split('|')[1].substring(0, 90) + '.....'"
                  class="body1 d-text-dark_gray"></div>

                <!-- <v-btn depressed :href="'/artical/' + item[1].id" class="d-bg-primary ma-3 pa-2 d-text-light elevation-0"
                style="width: 107px; border-radius: 10px; height: 48px">
                {{ $t("ReadMore") }}
              </v-btn> -->
              </v-col>
            </a>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="mx-auto elevation-0" max-width="300">
            <a :href="'/artical/' + item[2].id" class="no_decoration">

              <v-img style="border-radius: 20px" :src="`${img_baseUrl}${item[2].images.data[0].url}`" height="369px"
                width="300px"></v-img>
              <v-col cols="12">
                <p class="h6 d-text-dark_gray mt-5">{{ $i18n.locale == 'ar' ? item[2].title.split("|")[0] :
                item[2].title.split("|")[1]
                }}</p>

                <!-- <p class="body2">
                {{ $i18n.locale == 'ar' ?
                    item[2].body.split("|")[0].substring(0, 90) +
                    (item[2].body.split("|")[0].length > 90 ? " ...." : "") :
                    item[2].body.split("|")[3].substring(0, 90) +
                    (item[2].body.split("|")[3].length > 90 ? " ...." : "")
                }}
              </p> -->
                <div v-if="($i18n.locale == 'ar')" v-html="item[2].body.split('|')[0].substring(0, 90) + '.....'"
                  class="body1 d-text-dark_gray"></div>
                <div v-if="($i18n.locale == 'en')" v-html="item[2].body.split('|')[1].substring(0, 90) + '.....'"
                  class="body1 d-text-dark_gray"></div>

                <!-- <v-btn depressed :href="'/artical/' + item[2].id" class="d-bg-primary ma-3 pa-2 d-text-light elevation-0"
                style="width: 107px; border-radius: 10px; height: 48px">
                {{ $t("ReadMore") }}
              </v-btn> -->
              </v-col>
            </a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col cols="12" md="4">
          <v-skeleton-loader type="image, article" />
        </v-col>
        <v-col cols="12" md="4">
          <v-skeleton-loader type=" article,image" />
        </v-col>
        <v-col cols="12" md="4">
          <v-skeleton-loader type="image, article" />
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>
<script>
import { img_baseUrl } from "@/plugins/axios";

export default {
  data: () => ({
    show: false,
    img_baseUrl,
  }),
  computed: {
    item() {
      return this.$store.getters.getArticals;
    },
    isLoad() {
      return this.$store.getters.getLoadingForm;
    },
  },
};
</script>
<style scoped>
.title-OurServices::after {
  content: "";
  width: 200px;
  height: 4px;
  background-color: #d7b21d;
  margin-top: 0px;
}

.hover :hover {
  box-shadow: 0 0px 10px rgba(0, 0, 0, .3);
  transition: all 0.3s ease-in-out;
}
</style>
