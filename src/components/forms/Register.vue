<template>
  <form @submit.prevent="submit">
    <label class="subtitle1 d-text-primary">{{$t('firstname')}}</label>
    <v-text-field
      v-model="form.first_name"
      style="border-radius: 7.41906px"
      class="my-3"
      width="364.87px"
      height="41.16px"
      :error-messages="first_nameErrors"
      required
      background-color="#FFFFFF"
      outlined
      dense
      @input="$v.form.first_name.$touch()"
      @blur="$v.form.first_name.$touch()"
    ></v-text-field>
    <label class="subtitle1 d-text-primary">{{$t('lastname(nickname)')}}</label>
    <v-text-field
      v-model="form.last_name"
      style="border-radius: 7.41906px"
      class="my-3"
      width="364.87px"
      defaultCountry="963"
      height="41.16px"
      :error-messages="last_nameErrors"
      required
      background-color="#FFFFFF"
      outlined
      dense
      @input="$v.form.last_name.$touch()"
      @blur="$v.form.last_name.$touch()"
    ></v-text-field>
    <label class="subtitle1 d-text-primary">{{$t('mobilenumber')}}</label>
    <vue-tel-input-vuetify dir="ltr"
      v-model="form.authentication"
      style="border-radius: 7.41906px"
      class="my-3"
      width="364.87px"
      height="41.16px"
      label=""
      placeholder=""
      :error-messages="authenticationErrors"
      required
      background-color="#FFFFFF"
      outlined
      
      v-on:country-changed="countryChanged"
      dense
      @input="$v.form.authentication.$touch()"
      @blur="$v.form.authentication.$touch()"
    ></vue-tel-input-vuetify>

    <label class="subtitle1 d-text-primary">{{$t('Password')}}</label>

    <v-text-field
      v-model="form.password"
      style="border-radius: 7.41906px"
      class="my-3"
      :error-messages="passwordErrors"
      required
      outlined
      background-color="#FFFFFF"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="show = !show"
      :type="show ? 'text' : 'password'"
      dense
      @input="$v.form.password.$touch()"
      @blur="$v.form.password.$touch()"
    >
    </v-text-field>
    <v-btn
      class="mx-7 d-bg-primary d-text-light"
      type="submit"
      style="width: 269.89px; height: 51.45px"
      :loading="loading"
    >
      {{ $t("Signin") }}
    </v-btn>
  </form>
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
      first_name: { required,maxLength: maxLength(15),minLength: minLength(2) },
      last_name: { required ,maxLength: maxLength(15),minLength: minLength(2)},
      authentication: { required, maxLength: maxLength(15),minLength: minLength(6) },
      password: { required, minLength: minLength(4) ,maxLength: maxLength(30)},
    },
  },

  data: () => ({
    country: null,
        form:{
          first_name:'',
          last_name:'',
      authentication:'',
      password:''

    },
    api: "user/register",
    show: false,
    loading: false,
  }),

  computed: {
    first_nameErrors() {
      const errors = [];
      if (!this.$v.form.first_name.$dirty) return errors;
      !this.$v.form.first_name.required &&
        errors.push("يرجى ملئ حقل الاسم الاول");
        !this.$v.form.first_name.maxLength &&
        errors.push("الحد الاعلى للاسم هو 15 محرف");
         !this.$v.form.first_name.minLength &&
        errors.push("الحد الادنى للاسم هو 2 محرف");
      return errors;
    },
    last_nameErrors() {
      const errors = [];
      if (!this.$v.form.last_name.$dirty) return errors;
      !this.$v.form.last_name.required &&
        errors.push("يرجى ملئ حقل الاسم الثاني (الكنية)");
      !this.$v.form.last_name.maxLength &&
        errors.push(" الحد الاعلى لحقل الاسم الثاني 15 محرف");
        !this.$v.form.last_name.minLength &&
        errors.push(" الحد الادنى لحقل الاسم الثاني 2 محرف");
      return errors;
    },
    authenticationErrors() {
      const errors = [];
      if (!this.$v.form.authentication.$dirty) return errors;
      !this.$v.form.authentication.maxLength &&
        errors.push("الحد الاعظمي لكتابة الرقم هو 10 ارقام");
        !this.$v.form.authentication.required &&
        errors.push("يرجى ملئ حقل رقم الموبايل");
      !this.$v.form.authentication.minLength &&
        errors.push("الحد الادنى لكتابة الرقم هو 6 ارقام");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.form.password.$dirty) return errors;
      !this.$v.form.password.minLength &&
        errors.push("يرجى أدخال كلمة سر اكثر من 4 أحرف");
        !this.$v.form.password.maxLength &&
        errors.push(" الحد الاعلى لكلمة المرور هو 30 محرف");
      !this.$v.form.password.required && errors.push("يرجى أدخال كلمة سر");
      return errors;
    },
    
  },

  methods: {
    countryChanged(country) {
      this.country = country.dialCode;
    },
    submit() {
      if(this.country == null){
        this.$toast.error("يرجى أختيار حقل البلد");
      }else{
      this.loading = true;
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        let formdata = new FormData();
        for (let f in this.form) {
          if(f=="authentication"){
            continue;
          }else{
          formdata.append(f, this.form[f]);
          }
        }
         formdata.append('authentication',  '+'+this.country + this.form['authentication'].replace(/\s/g, '').substring(1) );
        this.$store.dispatch("Register", {
          api: this.api,
          form: formdata,
        });
      } else {
        this.$toast.error("أكمل الحقول المطلوبة");
      }}
    },
  },
};
</script>

<style></style>
