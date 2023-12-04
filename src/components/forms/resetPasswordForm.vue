<template>
  <v-container class="d-flex justify-center">
    <div v-if="show_status" class="background" style="background-image: url(images/home2.png); margin-top: 150px">
      <div class="message-back">
        <div class="message-style">{{ status }}</div>
      </div>
    </div>
    <div v-if="shwo_form" class="">
      <v-col cols="12">
      </v-col>
      <v-col cols="12 " class="d-p-relative ">
        <v-card class="Auth-box d-bg-light_gray d-border-radius">
          <form>
            <label class="subtitle1 d-text-primary">{{ $t('NewPassword') }}</label>
            <v-text-field v-model="form.NewPassword" style="border-radius: 7.41906px" class="my-3"
                          :error-messages="NewPasswordErrors" required outlined background-color="#FFFFFF"
                          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show"
                          :type="show ? 'text' : 'password'" dense @input="$v.form.NewPassword.$touch()"
                          @blur="$v.form.NewPassword.$touch()"></v-text-field>
            <label class="subtitle1 d-text-primary">{{ $t('ConfirmPassword') }}</label>
            <v-text-field v-model="form.ConfirmPassword" style="border-radius: 7.41906px" class="my-3"
                          :error-messages="ConfirmPasswordErrors" required outlined background-color="#FFFFFF"
                          :append-icon="showC ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showC = !showC"
                          :type="showC ? 'text' : 'password'" dense @input="$v.form.ConfirmPassword.$touch()"
                          @blur="$v.form.ConfirmPassword.$touch()"></v-text-field>
            <div id="errormessage">{{ $t("passwordsDoNotMatch") }}</div>
            <v-btn class="mx-7 d-bg-primary d-text-light" style="width: 269.89px; height: 51.45px"
                   :loading="loading" @click="submit(); $v.form.ConfirmPassword.$touch()">
              {{ $t("submit") }}
            </v-btn>
          </form>
        </v-card>
        <div class="mark"></div>
      </v-col>
    </div>
  </v-container>
</template>
<script>
import router from '@/router';
import axios from 'axios';
import {validationMixin} from "vuelidate";
import {
  required,
  maxLength,
  minLength,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    form: {
      NewPassword: {required, minLength: minLength(8)},
      ConfirmPassword: {required, minLength: minLength(8)},
    },
  },
  data: () => ({
    form: {
      Newpassword: '',
      ConfirmPassword: ''
    },
    shwo_form: false,
    show_status: true,
    show: false,
    showC: false,
    token: undefined,
    status: "جاري التحقق..."
  }),

  created() {
    // Get the token parameter from the URL
    this.token = this.$route.query.t;
    if (this.token) {
      this.validateToken();
    } else {
      this.$router.push('/');
    }
  },
  methods: {
    validateToken() {
      const self = this;
      // Make an API call to validate the token
      // For example, you could use Axios to make the API call
      axios.post('v2/customer/validate-reset-password-token', {
        "password_reset_token": this.token
      })
          .then(response => {
            if (response.status == 200) {
              self.shwo_form = true;
              self.show_status = false;
            } else {
              self.status = response.data.message;
              setTimeout(function () {
                self.$router.push('/');
              }, 2000)
            }
          })
          .catch(error => {
            if (error.response && error.response.data && error.response.data.message) {
              self.status = error.response.data.message;
            } else {
              self.status = error;
            }
            setTimeout(function () {
              self.$router.push('/');
            }, 2000)
          });
    },
  },

  computed: {
    loading() {
      return this.$store.getters.loadingForm
    },
    NewPasswordErrors() {
      const errors = [];
      if (!this.$v.form.NewPassword.$dirty) return errors;
      !this.$v.form.NewPassword.minLength &&
      errors.push(this.$t("errorMessageLessThan8"));
      !this.$v.form.NewPassword.required && errors.push(this.$t("errorInputMessage"));
      return errors;
    },
    ConfirmPasswordErrors() {
      const errors = [];
      if (!this.$v.form.ConfirmPassword.$dirty) return errors;
      !this.$v.form.ConfirmPassword.minLength &&
      errors.push(this.$t("errorConfirmMessageLessThan8"));
      !this.$v.form.ConfirmPassword.required && errors.push(this.$t("errorConfirmMessage"));
      return errors;
    },
    submit() {
      const self = this;
      this.status = "جاري تغيير كلمة المرور..";
      this.show_status = true;
      this.shwo_form = false;
      if (!this.$v.form.ConfirmPassword.$model.includes(this.$v.form.NewPassword.$model)) {
        document.getElementById('errormessage').style.display = "block";

      } else {
        document.getElementById('errormessage').style.display = "none";
        axios.post('v2/customer/change-password-by-token', {
          "password_reset_token": this.token,
          password: this.$v.form.NewPassword.$model
        })
            .then(response => {
              this.status = "تم تغيير كلمة المرور بنجاح";
              setTimeout(function () {
                self.$router.push('/');
              }, 2000)
            })
            .catch(error => {
              if (error.response && error.response.data && error.response.data.message) {
                this.status = error.response.data.message;
              } else {
                this.status = error;
              }
              setTimeout(function () {
                self.$router.push('/');
              }, 2000)
            });
      }
    }
  },
  // mounted() {
  //     this.token = this.$route.query.token;
  //     axios.post('http://example.com/verify', { token: this.token }).then((response) => {
  //         console.log(response);
  //     }).catch(() => {
  //         router.push('/*');
  //     })
  // }
};
</script>
<style scoped>
.background {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: -20px !important;
}

.message-back {
  padding: 20px;
  background-color: #2170b4;
  color: white;
  border-radius: 4px;
  text-align: center;
}

.message-style {
  font-size: 20px;
}

.Auth-box {
  z-index: 2;
  padding: 24px 32px 24px 32px;
  box-shadow: 0px 3.16589px 3.16589px rgba(0, 0, 0, 0.25) !important;
}

@media (min-width: 960px) {
  .Auth-box {
    width: 411.76px;
  }
}

@media (max-width: 960px) {
  .Auth-box {
    width: 350.76px;
  }
}

.Auth-button {
  position: absolute;
  top: 248px;
  width: 149.59px;
  height: 60.94px;
  border-radius: 10px 10px 0px 0px;
  padding: 14px;
  z-index: 2;
}

.mark {
  content: '';
  position: absolute;
  background-color: #D7B21D;
  width: 198px;
  height: 10px;
  /* top: 0px; */
  left: 50px;
  bottom: 7px;
  z-index: 3;
}

#errormessage {
  color: #ff5252 !important;
  word-break: break-word;
  word-wrap: break-word;
  hyphens: auto;
  font-size: 12px;
  padding: 12px;
  margin-top: -15px;
  display: none;
}
</style>
  