<template>
  <div class="short">
    <v-container>
      <v-breadcrumbs :items="items">
        <v-breadcrumbs-item slot="item" slot-scope="{ item }" exact :class="item.class" :to="item.href">
          <span v-if="item.disabled" class="subtitle1 d-text-dark">
            {{ $t(`${item.text}`) }}
          </span>
          <span v-else class="subtitle1 d-text-primary">
            {{ $t(`${item.text}`) }}
          </span>
        </v-breadcrumbs-item>
        <template v-slot:divider>
          <v-icon v-if="$i18n.locale == 'ar'">mdi-chevron-left</v-icon>
          <v-icon v-else>mdi-chevron-right</v-icon>

        </template>
      </v-breadcrumbs>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      default: []
    }
  }
}
</script>

<style>
.short {
  margin-top: 128px;
  /* background-color: #f3f3f3 !important; */
  /* box-shadow: 0px 4px 4px rgb(0 0 0 / 25%); */
}
</style>