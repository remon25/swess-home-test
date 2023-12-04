<template>
  <v-container>
    <form @submit.prevent="submit" style="max-width: 634px;" class="px-5">
      <label class="subtitle1 ">{{$t('Fullname')}}</label>
      <v-text-field v-model="form.name" style="border-radius: 7.41906px" class="my-3" height="41.16px"
        :error-messages="nameErrors" required background-color="#e8eaed" dense @input="$v.form.name.$touch()"
        @blur="$v.form.name.$touch()"></v-text-field>
      <label class="subtitle1"> {{$t('mobilenumber')}}</label>

      <v-text-field v-model="form.mobile" style="border-radius: 7.41906px" class="my-3" height="41.16px"
        :error-messages="mobileErrors" required background-color="#e8eaed" dense @input="$v.form.mobile.$touch()"
        @blur="$v.form.mobile.$touch()">
      </v-text-field>
      <label class="subtitle1">{{$t('subject')}}</label>

      <v-textarea v-model="form.subject" style="border-radius: 7.41906px" class="my-3" :error-messages="subjectErrors"
        required background-color="#e8eaed" dense @input="$v.form.subject.$touch()" @blur="$v.form.subject.$touch()">
      </v-textarea>
      <!-- <p class="subtitle2 float-start d-text-primary">نسيت كلمة المرور</p>-->
      <v-btn block class=" d-bg-primary d-text-light" type="submit" style="width: 269.89px; height: 51.45px"
        :loading="loading">
        {{ $t("Send") }}
      </v-btn>
    </form>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    form: {
      name: { required, maxLength: maxLength(35) },
      mobile: { required, maxLength: maxLength(15), minLength: minLength(6) },
      subject: { required, maxLength: maxLength(2000) },
    },
  },

  data: () => ({
    api: "contactUs/import",
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;

      !this.$v.form.name.required &&
        errors.push("يرجى ملئ حقل الاسم ");

      !this.$v.form.name.maxLength &&
        errors.push(" حقل الاسم يجب ان يكون اقل من 35 محرف ");

      return errors;
    },
    mobileErrors() {
      const errors = [];
      if (!this.$v.form.mobile.$dirty) return errors;
      !this.$v.form.mobile.required && errors.push("يرجى أدخال حقل  رقم الموبايل");
      !this.$v.form.mobile.maxLength && errors.push("الحد الاقصى لحقل رقم الهاتف هو 15 رقم");
      !this.$v.form.mobile.minLength && errors.push("الحد الادنى لحقل رقم الهاتف هو 6 ارقام");
      return errors;
    },
    subjectErrors() {
      const errors = [];
      if (!this.$v.form.subject.$dirty) return errors;
      !this.$v.form.subject.required && errors.push("يرجى أدخال حقل الموضوع");
      !this.$v.form.subject.maxLength && errors.push("حقل الموضوع يجب ان يكون اقل من 2000 محرف");
      return errors;
    },
    form() {
      return this.$store.getters.getUser;
    },
    // loading() {
    //   return this.$store.getters.getLoadingForm
    // }
  },

  methods: {
    submit() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        let formdata = new FormData();
        for (let f in this.form) {
          formdata.append(f, this.form[f]);
        }
        this.$store.dispatch("ContactUSForm", {
          api: this.api,
          form: formdata,
        });
      } else {
        this.$toast.error("يرجى التأكد من صحة البيانات ");
      }
    },
  },
  mounted() {
    this.$store.dispatch('setLoad', false);
  }
};
</script>

<style>

</style>
