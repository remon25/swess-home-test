<template>
  <div class="background" style="background-image: url(images/home2.png);">
    <div class="message-back">
      <div class="message-style">{{ status }}</div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import axios from "axios";

export default {
  data: () => ({
    token: undefined,
    status: "جاري تفعيل الحساب.."
  }),

  created() {
    // Get the token parameter from the URL
    this.token = this.$route.query.t;
    if (this.token) {
      this.validateToken();
    } else {
      // this.$router.push('/');
    }
  },

  methods: {
    validateToken() {
      const self = this;
      // Make an API call to validate the token
      // For example, you could use Axios to make the API call
      axios.post('v2/customer/account-confirmation', {
        "registration_token": this.token
      })
          .then(response => {
            if (response.status == 200) {
              this.status = "تم تفعيل الحساب بنجاح!";
              setTimeout(function(){
                self.$router.push('/');
              }, 2000);
            } else {
              this.status = response.data.message;
              setTimeout(function(){
                self.$router.push('/');
              }, 2000);
            }
          })
          .catch(error => {
            if (error.response && error.response.data && error.response.data.message) {
              this.status = error.response.data.message;
            } else {
              this.status = error;
            }
            setTimeout(function(){
              self.$router.push('/');
            }, 2000);
          });
    },
  },
  mounted() {
    // this.token = this.$route.query.token;
    // axios.post('http://example.com/verify', { token: this.token }).then((response) => {
    //     console.log(response);
    // }).catch(() => {
    //     router.push('/*');
    // })
  }
}
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

@media screen and (max-width: 500px) {
  .message-back {
    width: 90%;
  }
}
</style>