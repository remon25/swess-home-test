<template>
  <div>
    <v-card elevation="24" max-width="100%" class="mx-auto">
      <v-row justify="space-around" class="mx-auto">

      </v-row>
      <v-carousel hide-delimiters v-model="model" @change="currentindex = images[$event].index">

        <v-carousel-item v-for="(image, i) in images" :key="i" :src="`${img_baseUrl}${image.url}`"
          reverse-transition="fade-transition" transition="fade-transition" style="background-size: contain;"></v-carousel-item>


        <!-- <v-carousel-item v-for="(image, i) in images" :key="i">
          <v-sheet tile height="100%" width="100%">
            <v-row align="center" justify="center">

              <v-img aspect-ratio="5:5" height="500px" contain :src="`${img_baseUrl}${image.url}`"></v-img>
            </v-row>
          </v-sheet>
        </v-carousel-item> -->

      </v-carousel>
      <div class="index-img">
        <p class="body1 d-text-light px-4">
          {{ currentindex + "/" + images.length }}
          <v-icon class="d-text-light" small>mdi-image-multiple-outline</v-icon>
        </p>
      </div>
      <v-list two-line>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-content>
              <div @click="openShare" class="d-inline">
                <v-icon width="25.19" class="d-text-primary">mdi-share-variant</v-icon>
              </div>
            </v-list-item-content>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn color="blue" dark @click="close"> الغاء </v-btn>
          </v-list-item-action>
        </v-list-item>

      </v-list>
    </v-card>
    <v-dialog v-model="dialog_share" max-width="500px">
      <ShareBox></ShareBox>
    </v-dialog>
  </div>
</template>

<script>
import { img_baseUrl } from "@/plugins/axios";

export default {
  props: {
    images: Array,
    model: Number,
  },
  data() {
    return {
      img_baseUrl,
      currentindex: this.model,
      dialog_share: false
    };
  },
  methods: {
    close() {
      this.$emit("closeDialog");
    },
    openShare() {
      this.dialog_share = true;
    },
  },
};
</script>
<style scoped>
.index-img {
  position: absolute;
  top: 30px;
  right: 120px;
  height: 33px;
  color: white;
  background: #6f6f6f;
  border-radius: 10px;
}
</style>
