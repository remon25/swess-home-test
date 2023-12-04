<template>
  <div class="" style="background-image: url(images/home2.png);
    ">


    <!-- <div class="mt-5 d-bg-light-dark-2">
      <breadcrumbs :items=" tab == 'one' ? itemslogin : itemssignin">

      </breadcrumbs>
    </div> -->

    <breadcrumbs :items=" tab == 'one' ? itemslogin : itemssignin">

    </breadcrumbs>


    <v-container class=" mt-10">
      <Auth @updateTab="(val)=>{tab = val} "></Auth>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    tab: 'one',
    itemslogin: [
      {
        text: "login",
        disabled: true,
        class: "d-text-dark body1",
        href: "/login",
      }
    ],
    itemssignin: [
      {
        text: "Signin",
        disabled: true,
        class: "d-text-dark body1",
        href: "/login",
      }
    ],
  }),
  mounted() {
    var isAuth = localStorage.getItem('isAuthenticate')
    if (isAuth == 'true') {
      this.$router.push('/')
    }
  }
};
</script>
<style scoped>

</style>
