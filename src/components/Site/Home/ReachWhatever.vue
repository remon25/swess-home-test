<template>
  <v-row  class="d-bg-dark-gray mt-5" style="overflow:hidden !important;">
    <v-container class="d-lg-block d-none">
      <v-row>
        <v-col cols="6">
          <div class="h4 d-text-primary title-ReachWhatever footer-title pt-5">
            <p class="d-text-secandary h6 d-block">{{$t('Reacht1')}}  </p>
            <p class="">{{$t('Reacht2')}}</p>
          </div>
          <div class="body1 py-15">
            <p>
{{$t('ReachP1')}}
            </p>
            <p>
{{$t('ReachP2')}}
            </p>
            <v-btn
            href="/offices"
              large
              depressed
              class="d-bg-primary  d-text-light elevation-0 subtitle1"
              style="border-radius: 10px"
            >
              {{$t('Reachbutn')}}
            </v-btn>
          </div>
        </v-col>
        <v-col cols="6">
          <img src="images/key.png" width="426px" height="330px" alt="Key image" />
        </v-col>
      </v-row>
    </v-container>
    <v-container class="d-md-block d-lg-none">
      <v-row>
        <v-col cols="12" class="pa-6">
          <div class="h4 d-text-primary title-ReachWhatever footer-title pt-5">
            <p class="d-text-secandary h6 d-block">{{$t('Reacht1')}}</p>
            <p class="">  {{$t('Reacht2')}} </p>
          </div>
          <div class="body1 py-15">
            <p>
{{$t('ReachP1')}}
            </p>
            <p>
{{$t('ReachP2')}}
            </p>
            <v-btn
              large
              depressed
              class="d-bg-primary my-10 d-text-light elevation-0 subtitle1"
              style="border-radius: 10px"
            >
                {{$t('Reachbutn')}}
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" class="pa-6">
          <img src="images/key.png" width="426px" height="330px" alt="Key image" />
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>
<style scoped>
.title-ReachWhatever::after {
  content: "";
  width: 200px;
  height: 4px;
  width: 200px;
  background-color: #d7b21d;
  margin-top: 12px;
}
</style>
