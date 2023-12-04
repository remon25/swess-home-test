<template>
 <v-switch 
  flat
  v-model="value"
  :label="label"
  class="mx-5  mt-3">
 </v-switch>
</template>

<script>
export default {
 props: {
  label: String,
  attr: String,
  model: {
   default: 0
  }
 },
 data() {
  return {
   value: false
  }

 },
 watch: {
  value(val) {
      
   this.$emit('switcher', {
    key: this.attr,
    value: val == true ? 1 : 0
   })
  },
  model(val) {
   this.value = val == 1 ? true : false

  }
 },
 mounted() {
  this.value = this.model == 1 ? true : false
 }

}
</script>
