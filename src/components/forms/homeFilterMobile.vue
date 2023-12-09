<template>
  <v-container :class="$i18n.locale == 'ar' ? 'filter-rtl' : 'filter-ltr'">
    <v-col cols="12" class="filter_mobile">
      <div class="filter-button">
        <v-btn
          style="
            padding: 1.5rem;
            color: #fff;
            background-color: hsl(207.89deg 79.17% 28.24%);
            letter-spacing: 0;
          "
           @click="handleButtonClick('poped_up')"
         
          >{{ $t("sale") }}</v-btn
        >
      </div>

      <div class="filter-button">
        <v-btn
          style="
            padding: 1.5rem;
            color: #fff;
            background-color: hsl(207.89deg 79.17% 28.24%);
            letter-spacing: 0;
          "
         @click="handleButtonClick('poped_up')"
          >{{ $t("rent") }}</v-btn
        >
      </div>
    </v-col>
  </v-container>
</template>
<script>
export default {
  methods: {
    handleButtonClick(className) {
      this.$emit('apply-class', className);
    },
  },
};
</script>
  <style scoped>
.filter_mobile {
  display: flex;
  justify-content: center;
  column-gap: 1rem;
}
.filter-button {
  flex: 1;
}
.filter-button > button {
  width: 100%;
  font-size: 16px;
}

.container {
  padding: 5px;
}
</style>
  