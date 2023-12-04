<template>
  <div>
    <v-card class="mx-auto elevation-0" max-width="452" v-if="!isload">
      <a :href="'/artical/' + item.id" class="no_decoration">
        <div class="hover">

          <v-img class="d-border-radius" :src="`${img_baseUrl}${item.images.data[0].url}`"
            style="width: 412px; height: 412px"></v-img>
        </div>
        <v-row class="mt-5">
          <v-col cols="12">
            <p class="h5 d-text-primary" style="height: 70px; overflow: hidden;">{{ $i18n.locale == 'ar' ?
            item.title.split("|")[0] :
            item.title.split("|")[1]
            }}
            </p>
            <!-- <p class="h5">{{ item.title.split("|")[0] }}</p> -->

            <p class="h6 d-text-primary">
              <span class="d-text-dark_gray"> {{ item.created_at }}</span>
            </p>
            <!-- <p class="body1 d-text-dark_gray">
            {{ $i18n.locale == 'ar' ?
                item.body.split("|")[0].substring(0, 90) +
                (item.body.split("|")[0].length > 90 ? " ...." : "") :
                item.body.split("|")[3].substring(0, 90) +
                (item.body.split("|")[3].length > 90 ? " ...." : "")
            }}
          </p> -->

            <div v-if="($i18n.locale == 'ar')" v-html="item.body.split('|')[0].substring(0, 90) + '.....'"
              class="body1 d-text-dark_gray"></div>
            <div v-if="($i18n.locale == 'en')" v-html="item.body.split('|')[1].substring(0, 90) + '.....'"
              class="body1 d-text-dark_gray"></div>


          </v-col>
        </v-row>
        <!-- <a :href="'/artical/' + item.id">
        <p style="float: left" class="d-text-dark subtitle1">
          {{ $t("ReadMore") }}
        </p>

        <img style="float: left" class="mx-2" src="icons/Arrow.svg" /> -->
      </a>
    </v-card>
    <v-card max-width="452" v-if="isload">
      <v-skeleton-loader width="100%" type="image, article" />
    </v-card>
  </div>
</template>
<script>
import { img_baseUrl } from "@/plugins/axios";

export default {
  props: {
    item: Object,
  },
  data() {
    return {
      img_baseUrl,
    };
  },
  computed: {
    isload() {
      return this.$store.getters.getLoadingForm
    }
  }
};
</script>
<style scoped>
.hover :hover {
  box-shadow: 0 0px 10px rgba(0, 0, 0, .3);
  transition: all 0.3s ease-in-out;
}
</style>
