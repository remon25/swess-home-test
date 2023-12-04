<template>
<div>
  <v-autocomplete v-if="attr == 'location_id'"
    :disabled="disabled"
    item-color="primary"
    dense
    :outlined="outlined"
    :height="height"
    :filled="filled"
    :background-color="background"
    single-line
    v-model="value"
    :items="items"
    :label="label"
    class="subtitle1 d-text-dark select"
    :error-messages="errorMessages"
    @change="changeSelect"
  >

<template v-slot:selection="{ item }">
       {{ item.text.includes("|") ? item.text.split("|")[1] : $t(`${item.text}`) }}
    </template>

    <template v-slot:item="{ item, attrs, on }">
      <v-list-item v-on="on" v-bind="attrs">
        <v-list-item-content style="mt-3" light>
          {{ item.text.includes("|") ? item.text.split("|")[1] : $t(`${item.text}`) }}
        </v-list-item-content>
      </v-list-item></template
    >
  </v-autocomplete>



   <v-select v-else
    :disabled="disabled"
    item-color="primary"
    dense
    :outlined="outlined"
    :height="height"
    :filled="filled"
    :background-color="background"
    single-line
    v-model="value"
    :items="items"
    :label="label"
    class="subtitle1 d-text-dark select"
    :error-messages="errorMessages"
    @change="changeSelect"
  >

<template v-slot:selection="{ item }">
       {{ item.text.includes("|") ? item.text.split("|")[1] : $t(`${item.text}`) }}
    </template>

    <template v-slot:item="{ item, attrs, on }">
      <v-list-item v-on="on" v-bind="attrs">
        <v-list-item-content style="mt-3" light>
          {{ item.text.includes("|") ? item.text.split("|")[1] : $t(`${item.text}`) }}
        </v-list-item-content>
      </v-list-item></template
    >
  </v-select></div>
</template>

<script>
export default {
  props: {
    items: {
      default: [],
    },
    icon: {
      default: "mdi-chevron-down",
    },
    attr_key: {
      default: "",
    },
    attr: {
      default: {},
    },
    outlined:{
      default:false
    },
    height:{
      default:undefined
    },
    filled:{
      default:false
    },
    background:{
      default:''
    },
    label: {
      default: "",
    },
    errorMessages: {
      default: "",
    },
    model: {
      default: "",
    },
    disabled: {
      default: false,
    },
  },
  data() {
    return {
      value: "0", //{ text: 'Any', value: '0' }
    };
  },
  watch: {
    value(val) {},
    model(val) {
      this.value = val;
    },
  },
  methods: {
    changeSelect(val) {
      if (val != null)
        this.$emit("select", {
          key: this.attr,
          value: val,
        });
      if (val == null) {
        this.$emit("select", {
          key: this.attr,
          value: null,
        });
      }
    },
  },
  mounted() {
    this.value = this.model;
  },
};
</script>
<style >
.mdi-menu-down::before {
    content: url('@/assets/Vector.svg'); 
}
.v-text-field > .v-input__control > .v-input__slot:after {
   content: none;
}
.v-text-field > .v-input__control > .v-input__slot:before{
  content: none;
}
</style>
