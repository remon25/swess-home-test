<template>
  <div>
    <div class="my-5 d-bg-light-dark-2">
      <!--  
     <breadcrumbs :items="items"> </breadcrumbs> 
     -->
    </div>

    <div class="d-p-relative mx-auto" v-if="!isLoad">
      <div v-if="$i18n.locale == 'ar'">
        <div class="my-10 img-back" :style="
          'height: 310px;background-image:url(' +
          img_baseUrl +
          item.images.data[0].url +
          ');background-size: cover;  -webkit-filter: blur(5px);filter: blur(5px);'
        "></div>

        <v-container>
          <v-row class="img-hed">

            <v-img class="d-border-radius" style="width: 855px; height: 450px"
              :src="img_baseUrl + item.images.data[0].url"></v-img>

            <meta property="og:image" :content="img_baseUrl + item.images.data[0].url">
            <meta property="og:title" :content="item.title">


            <div class="my-5 share d-none" :class="
              $i18n.locale == 'ar' ? 'text-left float-left' : 'text-right'
            ">
              <div class="">
                <v-btn class="pa-4 mx-2 d-border-radius" :class="$i18n.locale == 'ar' ? 'btn-back-rtl' : 'btn-back-ltr'"
                  outlined @click="copy">
                  <img src="/icons/copy-link.svg" class="d-inline" />
                  <div class="d-inline" id="link">{{ $t("copylink") }}</div>
                </v-btn>
                <a :href="'https://twitter.com/intent/tweet?url=' + link" target="_blank">
                  <img src="/icons/artical-twitter.svg" class="d-inline mx-2" />
                </a> <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + link" target="_blank">
                  <img src="/icons/artical-facebook.svg" class="d-inline mx-2" />
                </a>
                <p class="subtitle0 d-block">
                  <v-icon class="d-text-primary">mdi-calendar-month</v-icon>
                  {{ this.formatDate(item.created_at) }}
                </p>
              </div>

            </div>
          </v-row>
        </v-container>

        <v-container class="mt-md-15" style="padding-left: 15%; padding-right:15%;">
          <v-row class="article_start">
            <v-col cols="12" lg="6" md="6" sm="12" style="max-height: 160px;">
              <div class="my-15  ">
                <p class="h5">{{ item.title.split("|")[0] }}</p>
              </div>
            </v-col>
            <v-col class="share_article" cols="12" lg="6" md="6" sm="12" style="max-height: 150px;">
              <div class="my-5 d-inline d-none share-md" :class="
                $i18n.locale == 'ar' ? 'text-left float-left' : 'text-right'
              ">
                <p> {{ $t('ShareArticals') }}</p>
                <div class="">
                  <v-btn class="pa-4 mx-2 d-border-radius" style="top:-12px;" :class="
                    $i18n.locale == 'ar' ? 'btn-back-rtl' : 'btn-back-ltr'
                  " outlined @click="copy">
                    <img src="/icons/copy-link.svg" class="d-inline" />
                    <div class="d-inline" id="link">{{ $t("copylink") }}</div>
                  </v-btn>
                  <a :href="'https://twitter.com/intent/tweet?url=' + link" target="_blank">
                    <img src="/icons/artical-twitter.svg" class="d-inline mx-2" />
                  </a> <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + link" target="_blank">
                    <img src="/icons/artical-facebook.svg" class="d-inline mx-2" />
                  </a>
                </div>
              </div>
            </v-col>
          </v-row>

          <p class="subtitle0 d-block">
            <v-icon class="d-text-primary">mdi-calendar-month</v-icon>
            {{ this.formatDate(item.created_at) }}
          </p>

          <div v-html="item.body.split('|')[0]" class="text-justify"></div>

          <v-col class="share_article_sm" cols="12" lg="6" md="6" sm="12" style="max-height: 150px;">
            <div class="my-5 d-inline d-none share-md" :class="
            $i18n.locale == 'ar' ? 'text-left float-left' : 'text-right'">
              <p> {{ $t('ShareArticals') }}</p>
              <div class="">
                <v-btn class="pa-4 mx-2 d-border-radius" :class="
                  $i18n.locale == 'ar' ? 'btn-back-rtl' : 'btn-back-ltr'
                " outlined @click="copy">
                  <img src="/icons/copy-link.svg" class="d-inline" />
                  <div class="d-inline" id="link">{{ $t("copylink") }}</div>
                </v-btn>
                <a :href="'https://twitter.com/intent/tweet?url=' + link" target="_blank">
                  <img src="/icons/artical-twitter.svg" class="d-inline mx-2" />
                </a> <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + link" target="_blank">
                  <img src="/icons/artical-facebook.svg" class="d-inline mx-2" />
                </a>

              </div>
            </div>
          </v-col>

          <!-- <v-row>
            <v-col cols="12">
              <p class="body1 mt-5" >
               {{ item.body.split("|")[0] }}
                
              </p>
            </v-col>
            <v-col cols="12" sm="12" :md="item.images.data[1] ? 6 : 12" v-if="item.body.split('|')[1]">
              <p class="body1 mt-5">
                {{ item.body.split("|")[1] }}
              </p>
            </v-col>
            <v-col cols="12" sm="12" md="6" v-if="item.images.data[1]">
              <v-img class="d-border-radius" :src="img_baseUrl + item.images.data[1].url"></v-img>
            </v-col>

            <v-col cols="12" sm="12" :md="item.images.data[2] ? 6 : 12" v-if="item.body.split('|')[2]">
              <p class="body1 mt-5">
                {{ item.body.split("|")[2] }}
              </p>
            </v-col>
            <v-col cols="12" sm="12" md="6" v-if="item.images.data[2]">
              <v-img class="d-border-radius" :src="img_baseUrl + item.images.data[2].url"></v-img>
            </v-col>
          </v-row> -->
        </v-container>
      </div>

      <div v-else>
        <div class="my-10 img-back" :style="
          'height: 310px;background-image:url(' +
          img_baseUrl +
          item.images.data[0].url +
          ');background-size: cover;  -webkit-filter: blur(5px);filter: blur(5px);'
        "></div>
        <v-container>
          <v-row class="img-hed">
            <v-img class="d-border-radius" style="width: 855px; height: 450px"
              :src="img_baseUrl + item.images.data[0].url"></v-img>

            <div class="my-5 share d-none" :class="
              $i18n.locale == 'ar' ? 'text-left float-left' : 'text-right'
            ">
              <p>{{ $t('ShareArticals') }}</p>
              <div class="">
                <v-btn class="pa-4 mx-2 d-border-radius"  :class="$i18n.locale == 'ar' ? 'btn-back-rtl' : 'btn-back-ltr'"
                  outlined @click="copy">
                  <img src="/icons/copy-link.svg" class="d-inline" />
                  <div class="d-inline" id="link">{{ $t("copylink") }}</div>
                </v-btn>
                <a :href="'https://twitter.com/intent/tweet?url=' + link" target="_blank">
                  <img src="/icons/artical-twitter.svg" class="d-inline mx-2" />
                </a> <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + link" target="_blank">
                  <img src="/icons/artical-facebook.svg" class="d-inline mx-2" />
                </a>
                <p class="subtitle0 d-block">
                  <v-icon class="d-text-primary">mdi-calendar-month</v-icon>
                  {{ this.formatDate(item.created_at) }}
                </p>
              </div>

            </div>
          </v-row>
        </v-container>

        <v-container class="mt-md-15" style="padding-left: 15%; padding-right:15%;">
          <v-row class="article_start">

            <v-col cols="12" lg="6" md="6" sm="12" style="max-height: 160px;">
              <div class="my-15 ">
                <p class="h5 ">{{ item.title.split("|")[1] }}</p>
              </div>
            </v-col>

            <v-col class="share_article" cols="12" lg="6" md="6" sm="12" style="max-height: 150px;  padding-top: 40px;">
              <div class="my-5 d-inline d-none share-md" :class="
                $i18n.locale == 'ar' ? 'text-left float-left' : 'text-right'
              ">
                <p>{{ $t('ShareArticals') }}</p>
                <div class="">
                  <v-btn class="pa-4 mx-2 d-border-radius" style="top:-12px;" :class="
                    $i18n.locale == 'ar' ? 'btn-back-rtl' : 'btn-back-ltr'
                  " outlined @click="copy">
                    <img src="/icons/copy-link.svg" class="d-inline" />
                    <div class="d-inline" id="link">{{ $t("copylink") }}</div>
                  </v-btn>
                  <a :href="'https://twitter.com/intent/tweet?url=' + link" target="_blank">
                    <img src="/icons/artical-twitter.svg" class="d-inline mx-2" />
                  </a> <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + link" target="_blank">
                    <img src="/icons/artical-facebook.svg" class="d-inline mx-2" />
                  </a>
                </div>
              </div>
            </v-col>
          </v-row>
          <p class="subtitle0 d-block">
            <v-icon class="d-text-primary">mdi-calendar-month</v-icon>
            {{ this.formatDate(item.created_at) }}
          </p>
          <div v-html="item.body.split('|')[1]"></div>

          <v-col class="share_article_sm" cols="12" lg="6" md="6" sm="12" style="max-height: 150px;">
            <div class="my-5 d-inline d-none share-md" :class="
            $i18n.locale == 'en' ? 'text-left float-left' : 'text-right'">
              <p> {{ $t('ShareArticals') }}</p>
              <div class="">
                <v-btn class="pa-4 mx-2 d-border-radius" :class="
                  $i18n.locale == 'ar' ? 'btn-back-rtl' : 'btn-back-ltr'
                " outlined @click="copy">
                  <img src="/icons/copy-link.svg" class="d-inline" />
                  <div class="d-inline" id="link">{{ $t("copylink") }}</div>
                </v-btn>
                <a :href="'https://twitter.com/intent/tweet?url=' + link" target="_blank">
                  <img src="/icons/artical-twitter.svg" class="d-inline mx-2" />
                </a> <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + link" target="_blank">
                  <img src="/icons/artical-facebook.svg" class="d-inline mx-2" />
                </a>

              </div>
            </div>
          </v-col>

          <!-- <v-row>
            <v-col cols="12">
              <p class="body1 mt-5">
                {{ item.body.split("|")[3] }}
              </p>
            </v-col>
            <v-col cols="12" sm="12" :md="item.images.data[1] ? 6 : 12" v-if="item.body.split('|')[4]">
              <p class="body1 mt-5">
                {{ item.body.split("|")[4] }}
              </p>
            </v-col>
            <v-col cols="12" sm="12" md="6" v-if="item.images.data[1]">
              <v-img class="d-border-radius" :src="img_baseUrl + item.images.data[1].url"></v-img>
            </v-col>

            <v-col cols="12" sm="12" :md="item.images.data[2] ? 6 : 12" v-if="item.body.split('|')[4]">
              <p class="body1 mt-5">
                {{ item.body.split("|")[4] }}
              </p>
            </v-col>
            <v-col cols="12" sm="12" md="6" v-if="item.images.data[2]">
              <v-img class="d-border-radius" :src="img_baseUrl + item.images.data[2].url"></v-img>
            </v-col>
          </v-row> -->
        </v-container>
      </div>
    </div>
    <div v-else>
      <v-container>
        <v-row class="mt-15">
          <v-col cols="12" md="12">
            <v-skeleton-loader type="article,paragraph,paragraph"></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row class="mt-15">
          <v-col cols="5" md="5">
            <v-skeleton-loader type=" article, paragraph"></v-skeleton-loader>
          </v-col>
          <v-col cols="6" md="6">
            <v-skeleton-loader type="image"></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row class="mt-15">
          <v-col cols="5" md="5">
            <v-skeleton-loader type=" article, paragraph"></v-skeleton-loader>
          </v-col>
          <v-col cols="6" md="6">
            <v-skeleton-loader type="image"></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-container>
    </div>

  </div>
</template>

<script>
import { img_baseUrl } from "@/plugins/axios";
import i18n from "@/i18n";

export default {
  name: "privacyPolicy",
  data: () => ({
    img_baseUrl,
    dialog_share: false,

    items: [
      {
        text: "main",
        disabled: true,
        class: "d-text-dark body1",
        href: "/",
      },
      {
        text: "artical",
        disabled: false,
        class: "d-text-natural body1",
        href: "/privacy-policy",
      },
    ],
  }),
  computed: {
    item() {
      return this.$store.getters.getItem;
    },
    isLoad() {
      return this.$store.getters.getLoadingItem;
    },
    link() {
      return window.location.href;
    },
  },
  methods: {
    openShare() {
      this.dialog_share = true;
    },
    copy() {
      console.log('click');
      let copyText = this.link
      this.$toast.success('تم نسخ المقال')
      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText);
      document.getElementById("link").innerHTML = this.$i18n.local == 'ar' ? "!تم نسخ اللينك" : 'Link has Been Copyed!'

    }
  },
  mounted() {
    this.$store.dispatch(
      "fetchItem",
      "article/getByID?article_id=" + this.$route.params.id
    );
    document.title = i18n.t("news_page");
  },
};
</script>
<style scoped>
.img-back {
  display: none;
}

.article_start {
  margin-top: 100px !important;
}

@media (min-width: 960px) {
  .img-hed {
    position: absolute;
    top: 100px;
    right: 30%;
    left: 30%;
  }

  .img-back {
    display: block;
  }

  .share {
    display: block;
    position: absolute;
    bottom: -150px;
    left: 0;
  }

  .share_article_sm {
    display: none;
  }

}

@media (max-width: 960px) {
  .share-md {
    display: block;
  }

  .article_start {
    margin-top: 0px !important;
  }

  .share_article {
    display: none;
  }
}
</style>
