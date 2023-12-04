<template>
  <form @submit.prevent="submit">

    <label class="subtitle1 d-text-primary">{{ $t('mobilenumber') }}</label>

    <!-- <vue-tel-input-vuetify dir="ltr" v-model="form.authentication" style="border-radius: 7.41906px" class="my-3"
      width="364.87px" height="41.16px" label="" placeholder="" :error-messages="authenticationErrors" required
      type="number" background-color="#FFFFFF" outlined v-on:country-changed="countryChanged" dense
      @input="$v.form.authentication.$touch()" @blur="$v.form.authentication.$touch()">
    </vue-tel-input-vuetify> -->

    <div>
      <vue-country-code @onSelect="countryChanged" :preferredCountries="['sy', 'de']" defaultCountry="sy"
        style="float:left; margin: 2px;">
      </vue-country-code>

      <v-text-field v-model="form.authentication" style="border-radius: 7.41906px" class="my-3" width="364.87px"
        height="41.16px" :error-messages="authenticationErrors" required outlined background-color="#FFFFFF"
        type="number" dense @input="$v.form.authentication.$touch()" @blur="$v.form.authentication.$touch()">
      </v-text-field>
    </div>


    <label class="subtitle1 d-text-primary">{{ $t('Password') }}</label>
    <v-text-field v-model="form.password" style="border-radius: 7.41906px" class="my-3" :error-messages="passwordErrors"
      required outlined background-color="#FFFFFF" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="show = !show" :type="show ? 'text' : 'password'" dense @input="$v.form.password.$touch()"
      @blur="$v.form.password.$touch()">
    </v-text-field>
    <!-- <p class="subtitle2 float-start d-text-primary">نسيت كلمة المرور</p>-->
    <v-btn class="mx-7 d-bg-primary d-text-light" type="submit" style="width: 269.89px; height: 51.45px"
      :loading="loading">
      {{ $t("login") }}
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
      authentication: { required, maxLength: maxLength(15) },
      password: { required, minLength: minLength(3) },
    },
  },

  data: () => ({
    country: null,
    form: {
      authentication: '',
      password: ''

    },
    api: "login",
    show: false,
  }),

  computed: {
    loading() {
      return this.$store.getters.loadingForm
    },
    authenticationErrors() {
      const errors = [];
      if (!this.$v.form.authentication.$dirty) return errors;
      !this.$v.form.authentication.maxLength &&
        errors.push("الحد الاعظمي لكتابة الرقم هو 15 أحرف");
      !this.$v.form.authentication.required &&
        errors.push("يرجى ملئ حقل رقم الموبايل");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.form.password.$dirty) return errors;
      !this.$v.form.password.minLength &&
        errors.push("يرجى أدخال كلمة سر اكثر من 3 أحرف");
      !this.$v.form.password.required && errors.push("يرجى أدخال كلمة سر");
      return errors;
    },

  },

  methods: {
    countryChanged(country) {
      this.country = country.dialCode;
    },
    submit() {
      if (this.country == null) {
        this.$toast.error("يرجى أختيار حقل البلد");
      } else {
        this.$v.form.$touch();
        if (!this.$v.form.$invalid) {
          let formdata = new FormData();
          for (let f in this.form) {
            if (f == "authentication") {
              continue;
            } else {
              formdata.append(f, this.form[f]);
            }
          }
          formdata.append('authentication', '+' + this.country + this.form['authentication'].replace(/\s/g, '').substring(1));
          this.$store.dispatch("login", {
            api: this.api,
            form: formdata,
          });
        } else {
          this.$toast.error("أكمل الحقول المطلوبة");
        }
      }
    },
  },
  mounted() {
    //  document.getElementById('input-80').type = 'number';
  }
};
</script>

<style>
</style>
