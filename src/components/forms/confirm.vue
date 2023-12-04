<template>
  <v-container class="d-flex justify-center">
    <div class="">
      <v-col cols="12">
        <div
          class="Auth-button"
          :class="
            tab == 'one'
              ? 'd-bg-primary d-text-light'
              : 'd-bg-light_gray d-text-dark'
          "
        >
          <v-btn
            @click="tab = 'one'"
            class=" elevation-0 subtitle2"
            style="border-radius: 10px"
            :class="
              tab == 'one'
                ? 'd-bg-primary d-text-light'
                : 'd-bg-light_gray d-text-dark'
            "
            >{{ $t("للتحقق") }}</v-btn
          >
        </div>
      
      </v-col>
      <v-col cols="12 " class="d-p-relative ">
        <v-card v-if="tab == 'one'" class="Auth-box d-bg-light_gray d-border-radius">
          <confirmForm></confirmForm>
        </v-card>
           <div class="mark"></div>
      </v-col>
    </div>
  </v-container>
</template>
<script>
export default {
  data: () => ({
        api:"getUserByToken",
    tab: "one",
 form: {
    authentication: '',
    password: ''
   }
  }),

  computed:{
    user() {
      return this.$store.getters.getUser;
    },
  },
  mounted(){
    this.$store.dispatch("userData", {
          api: this.api});
  }
};
</script>
<style scoped>
.Auth-box {
  z-index: 2;
  padding: 24px 32px 24px 32px;
  box-shadow: 0px 3.16589px 3.16589px rgba(0, 0, 0, 0.25) !important;
}
@media (min-width: 960px) {
  .Auth-box{
  width: 411.76px;
  }
}
@media (max-width: 960px) {
  .Auth-box{
  width: 350.76px;
  }
}
.Auth-button {
  position: absolute;
  top: 248px;
  width: 149.59px;
  height: 60.94px;
  border-radius: 10px 10px 0px 0px;
  padding: 14px;
  z-index: 2;
}
.mark{
    content: '';
    position: absolute;
    background-color: #D7B21D;
    width: 198px;
    height: 10px;
    /* top: 0px; */
    left: 50px;
    bottom: 7px;
    z-index: 3;
}
</style>
