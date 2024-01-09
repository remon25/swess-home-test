<template>
  <div class="main">
    <Flipbook
      class="flipbook"
      :pages="[
        null,
        '/images/profile/1.webp',
        '/images/profile/2.webp',
        '/images/profile/3.webp',
        '/images/profile/4.webp',
        '/images/profile/5.webp',
        '/images/profile/6.webp',
        '/images/profile/7.webp',
      ]"
      v-slot="flipbook"
      ref="flipbook"
    >
      <div class="pt-2 action-bar text-xs-center">
        <v-icon
          class="ma-1 btn left"
          :class="{ disabled: !flipbook.canFlipLeft }"
          icon="chevron-circle-left"
          size="lg"
          @click="flipbook.flipLeft"
          >mdi-chevron-left-circle</v-icon
        >
        <v-icon
          class="ma-1 btn plus"
          :class="{ disabled: !flipbook.canZoomIn }"
          icon="plus-circle"
          size="lg"
          @click="flipbook.zoomIn"
          >mdi-plus-circle</v-icon
        >
        <span class="ma-1 font-weight-medium subheading">Page</span>
        <span class="font-weight-medium subheading">{{ flipbook.page }}</span>
        <span class="font-weight-medium subheading">&nbsp;of&nbsp;</span>
        <span class="mr-1 font-weight-medium subheading">{{
          flipbook.numPages
        }}</span>
        <v-icon
          class="ma-1 btn minus"
          :class="{ disabled: !flipbook.canZoomOut }"
          icon="minus-circle"
          size="lg"
          @click="flipbook.zoomOut"
          >mdi-minus-circle</v-icon
        >
        <v-icon
          class="ma-1 btn right"
          :class="{ disabled: !flipbook.canFlipRight }"
          icon="chevron-circle-right"
          size="lg"
          @click="flipbook.flipRight"
          >mdi-chevron-right-circle</v-icon
        >
      </div>
    </Flipbook>
  </div>
</template>
  
  <script>
import Flipbook from "flipbook-vue/vue2";
import i18n from "@/i18n";


export default {
  name: "app",
  components: {
    Flipbook,
  },
  metaInfo: {
  title: i18n.t("CompanyProfile"),
  meta: [
    {
      property: 'og:image',
      content: '/images/profile/1.webp',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: i18n.t("Swesshome CompanyProfile"),
    },
    {
      name: 'twitter:image',
      content: '/images/profile/1.webp',
    },
    {
      property: 'og:site_name',
      content: '/', 
    },
    {
      property: 'og:title',
      content: i18n.t("CompanyProfile"),
    },
  ],
},

  data() {
    return {};
  },
  computed: {
    canFlipLeft() {
      return this.$refs.flipbook.canFlipLeft;
    },
  },
  mounted() {
    const flipbook = this.$refs.flipbook; // Store the flipbook component reference

    window.addEventListener("keydown", (ev) => {
      if (ev.keyCode === 37 && flipbook.canFlipLeft) {
        flipbook.flipLeft();
      }

      if (ev.keyCode === 39 && flipbook.canFlipRight) {
        flipbook.flipRight();
      }
    });
  },
};
</script>
  
  <style scoped>
.main {
  min-height: 100vh;
  direction: ltr !important;
  margin-top: 0 !important;
  display: flex;
  justify-content: center;
  background-color: #333;
}
.action-bar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.action-bar .btn svg {
  bottom: 0;
}
.action-bar .btn:not(:first-child) {
  margin-left: 10px;
}
.has-mouse .action-bar .btn:hover {
  color: #ccc;
  filter: drop-shadow(1px 1px 5px #000);
  cursor: pointer;
}
.action-bar .btn:active {
  filter: none !important;
}
.action-bar .btn{
    color: #999 !important;
}
.action-bar .btn.disabled {
  color: #444 !important;
  opacity: 0.6 !important;
  pointer-events: none;
}
.flipbook {
  width: 95vw;
  height: 93vh;
  display: flex;
  flex-direction:column ;
  row-gap: 20px;
}

.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}

</style>
  






