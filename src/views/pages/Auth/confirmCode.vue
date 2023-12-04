<template>
  <div class="" style="background-image: url(images/home2.png);
    ">

    <!--
    <div class="mt-5 d-bg-light-dark-2">
      <v-container>


        <v-breadcrumbs :items="items">
          <v-breadcrumbs-item
            slot="item"
            slot-scope="{ item }"
            exact
            :class="item.class"
            :to="item.href"
          >
            <span v-if="item.disabled" class="subtitle1 d-text-dark">
              {{ $t(`${item.text}`) }}
            </span>
            <span v-else class="subtitle1 d-text-primary">
              {{ $t(`${item.text}`) }}
            </span>
          </v-breadcrumbs-item>
          <template v-slot:divider>
            <v-icon>mdi-chevron-left</v-icon>
          </template>
        </v-breadcrumbs>


      </v-container>
    </div>
    -->

    <v-container class=" mt-10">
<confirm></confirm>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    items: [
      {
        text: "التحقق من الرقم",
        disabled: true,
        class: "d-text-dark body1",
        href: "/confirm",
      }
    ],
  }),

};
</script>
<style scoped>

</style>
