<template>
  <div>
    <!-- 
    <breadcrumbs :items="items"></breadcrumbs>
    -->
    <v-row no-gutters style="
          background-image: url('images/ArticalHero.png');
          background-size: cover; height: 585px; ">
      <v-col cols="12" md="12">
        <div class="mt-15 mx-4 text-center">
          <v-row class="mt-10">
            <v-col cols="12" style=" padding-top: 100px">

              <p class="d-text-dark h3 d-block">
                {{ $t("HeroArtical") }}
              </p>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" md="4" class="mt-1">
      </v-col>
    </v-row>
    <v-container>
      <v-row class="mt-10">
        <v-col cols="12" md="12" lg="6" v-for="(artical, i) in visibleItem" :key="i">
          <ArticalCard :item="artical"></ArticalCard>
        </v-col>

      </v-row>
      <v-pagination total-visible="6" circle v-model="page" color="#2170B4" :length="Math.ceil(item.length / perPage)"
        prev-icon="mdi-arrow-left" next-icon="mdi-arrow-right" @input="updatePage">
      </v-pagination>
    </v-container>
  </div>
</template>

<script>
import { img_baseUrl } from "@/plugins/axios";
import breadcrumbs from "@/components/Site/breadcrumbs.vue";
import i18n from "@/i18n";

export default {
  components: { breadcrumbs },
  name: "Articals",
  data: () => ({
    img_baseUrl,
    page: 1,
    perPage: 6,
    items: [
      {
        text: "main",
        disabled: true,
        class: "d-text-dark body1",
        href: "/",
      },
      {
        text: "articals",
        disabled: false,
        class: "d-text-natural body1",
        href: "/ِArticals",
      },
    ],
  }),
  computed: {
    visibleItem() {
      return this.item.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
    item() {
      return this.$store.getters.getArticals;
    },
    isLoad() {
      return this.getLoadingForm;
    },
  },
  methods: {
    updatePage() {
      document.getElementById('app').scrollIntoView({ behavior: 'smooth' });

    }
  },
  mounted() {
    document.title = i18n.t("news_page");
    this.$store.dispatch("getArticals", {
      api: "article/adminGetAll",
    });
  },
};
</script>
