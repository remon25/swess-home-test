<template>
  <div>
    <form @submit.prevent="submit">
        <v-card light outlined width="500" height="300" class="pa-3">
          <v-card-title class="d-text-primary h6">
            هل تريد الابلاغ عن العقار؟</v-card-title
          >
          <v-card-text class="body2"
            >سنكون سعداء بسماع ارائكم في حال وجود اي مشكلة
          </v-card-text>
          <v-card-subtitle class=""
            ><Select
              required
              :items="item"
              @select="
                (val) => {
                  this.reason = val.value;
                }
              "
              label="يرجى تحديد سبب المشكلة"
            ></Select>
          </v-card-subtitle>
          <v-card-actions class=" float-left"><v-btn
      type="submit"
      color="primary"
    >
      <v-icon left>
        mdi-send
      </v-icon>
      أرسال
    </v-btn></v-card-actions>
        </v-card>
    </form>
  </div>
</template>
<script>
import Select from "../formComponents/select.vue";

export default {
  props: {
    id: {
      default: "",
    },
  },
  data() {
    return {
      reason: "",
      item: [
        {
          text: "لايوجد صور واضحة",
          value: 1,
        },
        {
          text: "السعر غير منطقي",
          value: 2,
        },
        {
          text: "لايوجد  معلومات كافية",
          value: 3,
        },
        {
          text: "الصور غير حقيقية",
          value: 4,
        },
        {
          text: "غير ذلك",
          value: 5,
        },
      ],
    };
  },
  components: { Select },
  methods: {
    submit() {
      this.loading = true;
      let form={
       estate_id: this.id,
       report_type_id: this.reason
      }
      console.log(form);
      if (this.reason) {
        let formdata = new FormData();
        for (let f in form) {
          formdata.append(f, form[f]);
        }
        this.$store.dispatch('reportEstate',{
          api:"report",
          form:formdata,
        })
        this.$toast.success("تم أرسال الابلاغ بنجاح");
        this.$emit('closeDailog',false)
      } else {
        this.$toast.error("أكمل الحقول المطلوبة");
      }
    },
  },
};
</script>

<style></style>
