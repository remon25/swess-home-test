<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="h4 d-text-primary title-Articals footer-title pt-5">
          <v-row>
            <p class="d-text-secandary h6">{{ $t('Newsarticals') }}</p>
          </v-row>
          <v-row>
            <p class="">{{ $t('HeroArtical') }}</p>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12">
        <v-row class="mt-10">

          <v-col cols="12" md="12" lg="4" v-for="i in [3, 4, 5]" :key="i">
            <ArticalCard :item="item[i]"></ArticalCard>

          </v-col>

        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { img_baseUrl } from "@/plugins/axios";

export default {
  data: () => ({
    img_baseUrl,
    show: false,
  }),
  computed: {
    item() {
      return this.$store.getters.getArticals;
    },
  },
};
</script>
<style scoped>
.title-Articals {
  margin-right: 25%;
  margin-left: 25%;
}

.title-Articals::after {
  content: "";
  height: 4px;
  background-color: #d7b21d;
  margin-top: 12px;
}
</style>
