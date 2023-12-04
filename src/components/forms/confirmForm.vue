<template>
  <form @submit.prevent="submit">
    <label class="subtitle1 d-text-primary">لقد تم أرسال رسالة للرقم {{ form.authentication }}
    </label>
    <p class="body2">هل حصلت على كود للتفعيل ؟</p>
    <v-text-field v-model="form.code" style="border-radius: 7.41906px" class="my-3" width="364.87px" height="41.16px"
      :error-messages="codeErrors" required background-color="#FFFFFF" outlined dense @input="$v.form.code.$touch()"
      @blur="$v.form.code.$touch()"></v-text-field>
    <a @click="resend" class="subtitle2 float-start d-text-primary my-4">لم تستلم كود التحقق؟</a>
    <v-btn class="mx-7 d-bg-primary d-text-light" type="submit" style="width: 269.89px; height: 51.45px"
      :loading="loading">
      {{ $t("تأكيد") }}
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
      code: { required, maxLength: maxLength(6) },
    },
  },

  data: () => ({
    api: { login: "login", checkCode: "code/check", resendCode: "code/resend" },
    show: false,
    loading: false,
  }),

  computed: {

    codeErrors() {
      const errors = [];
      if (!this.$v.form.code.$dirty) return errors;
      !this.$v.form.code.maxLength &&
        errors.push("الحد الاعظمي لكتابة الرقم هو 6 أحرف");
      !this.$v.form.code.required && errors.push("يرجى ملئ حقل رقم الموبايل");
      return errors;
    },

    form() {
      return this.$store.getters.getUser;
    },
  },

  methods: {
    resend() {

      let formdata = new FormData();
      for (let f in this.form) {
        formdata.append(f, this.form[f]);
      }
      this.$store.dispatch("ConfirmCode", {
        api: this.api.resendCode,
        form: formdata,
      });
    },
    submit() {
      this.loading = true;
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        let formdata = new FormData();
        formdata.append('authentication', this.form['authentication'].replace(/\s/g, ''));
        formdata.append('code', this.form['code']);
        console.log(this.form['authentication'].replace(/\s/g, ''));
        this.$store.dispatch("ConfirmCode", {
          api: this.api.checkCode,
          form: formdata,
        });
        this.loading = false;
      } else {
        this.loading = false;

        this.$toast.error("أكمل الحقول المطلوبة");
      }
    },
  },
  mounted() {
    this.$store.dispatch("userData", {
      api: this.api,
    });
  },
};
</script>

<style>

</style>
