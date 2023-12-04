<template>
  <div>
    <v-select v-model="$i18n.locale" :items="locales" dense @change="change" label="   "></v-select>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return {
      locales: [
        {
          text: "العربية",
          value: "ar",
        },
        {
          text: "English",
          value: "en",
        },
      ],
    };
  },
  methods: {
    change() {
      let element = document.getElementById("html");
      element.setAttribute("lang", this.$i18n.locale);
      element.setAttribute("dir", this.$i18n.locale == "ar" ? "rtl" : "ltr");
      element.setAttribute("label", "test");
      this.$vuetify.rtl = this.$i18n.locale == "ar" ? true : false;
      this.$store.dispatch("changeLang", this.$i18n.locale);
    },
  },
  mounted() {
    if (localStorage.getItem("lang") != null) {
      this.$i18n.locale = localStorage.getItem("lang");
      this.change();
    }
  },
};
</script>
