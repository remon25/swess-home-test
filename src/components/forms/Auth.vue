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
            @click="change('one') "
            class="d-border-radius elevation-0 subtitle2"
            style="border-radius: 10px"
            :class="
              tab == 'one'
                ? 'd-bg-primary d-text-light'
                : 'd-bg-light_gray d-text-dark'
            "
            >{{ $t("login") }}</v-btn
          >
        </div>
        <div
          class="Auth-button"
          :class="
            tab == 'two'
              ? 'd-bg-primary d-text-light'
              : 'd-bg-light_gray d-text-dark'
          "
          :style="
            $i18n.locale == 'ar' ? 'margin-right: 150px' : 'margin-left: 150px'
          "
        >
          <v-btn
            @click="change('two')"
            style=" border-radius: 10px"
            class="d-border-radius elevation-0 subtitle2"
            :class="
              tab == 'two'
                ? 'd-bg-primary d-text-light'
                : 'd-bg-light_gray d-text-primary'
            "
            >{{$t('Signin')}}</v-btn
          >
        </div>
      </v-col>
      <v-col cols="12 " class="d-p-relative ">
        <v-card v-if="tab == 'one'" class="Auth-box d-bg-light_gray d-border-radius">
          <LoginForm></LoginForm>
        </v-card>
        <v-card v-if="tab == 'two'" class="Auth-box d-bg-light_gray d-border-radius">
          <RegisterForm></RegisterForm>
        </v-card>
           <div class="mark"></div>
      </v-col>
    </div>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    tab: "one",
 form: {
    authentication: '',
    password: ''
   }
  }),
  methods:{
    change(val){
      this.tab = val,
      this.$emit('updateTab',val)
    }
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
  top: 255px;
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
