<template>
  <v-row >
    <div class="d-lg-block d-none">
      <div
        class="h4 d-text-primary title-rent footer-title d-bg-light"
        :style="$i18n.locale == 'ar' ? 'right: 832px' : 'left: 832px'"
      >
        <p class="">تأجير مكاتب</p>
      </div>
      <v-row class="d-bg-dark-gray" style="height: 222px">
        <v-col cols="4" class="d-p-relative">
          <div
            class="mx-auto card-rent justify-center"
            max-width="344"
            :style="$i18n.locale == 'ar' ? 'right: 432px' : 'left: 432px'"
          >
            <img src="images/rentOffice.svg" class="img-rent" />
            <div class="body-card-rent">
              <p class="body2">
                طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع
                لتوضيح الشكل المرئي للمستند أو
              </p>
              <v-btn
                large
                depressed
                class="d-bg-primary my-3 d-text-light elevation-0 subtitle1 button-rent"
              >
                بحث
              </v-btn>
              <v-btn
                large
                depressed
                outlined
                class="d-text-primary mt-3 mb-5 elevation-0 subtitle1 button-rent"
              >
                قائمة المفضلة
              </v-btn>
            </div>
          </div></v-col
        >
        <v-col cols="8">
          <div class="text body1 pa-5 body-rent">
            <p>
              طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع
              لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي
              معنى. يمكن استخدام لوريم إيبسوم قبل نشر النسخة النهائية.طريقة
              لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح
              الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي معنى. يمكن
              استخدام لوريم إيبسوم قبل نشر النسخة النهائية.
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="d-lg-none d-block">
      <div
        class="h4 d-text-primary title-rent my-5 footer-title d-bg-light"
        :style="$i18n.locale == 'ar' ? 'right: 25px;' : 'left: 25px'"
      >
        <p class="">تأجير مكاتب</p>
      </div>
      <v-row class="d-bg-dark-gray">
        <v-col cols="12">
          <div class="mx-auto card-rent d-flex justify-center">
            <div class="">
              <img src="images/rentOffice.svg" class="img-rent mx-auto" />

              <p class="body2">
                طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع
                لتوضيح الشكل المرئي للمستند أو
              </p>
              <v-btn
                large
                depressed
                class="d-bg-primary my-3 d-text-light elevation-0 subtitle1 button-rent"
              >
                بحث
              </v-btn>
              <v-btn
                large
                depressed
                outlined
                class="d-text-primary mt-3 mb-5 elevation-0 subtitle1 button-rent"
              >
                قائمة المفضلة
              </v-btn>
            </div>
          </div></v-col
        >
        <v-col cols="12">
          <div class="text body1 pa-5 body-rent">
            <p>
              طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع
              لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي
              معنى. يمكن استخدام لوريم إيبسوم قبل نشر النسخة النهائية.طريقة
              لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح
              الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي معنى. يمكن
              استخدام لوريم إيبسوم قبل نشر النسخة النهائية.
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-row>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  overflow: visible;
}
.title-rent {
  margin-bottom: 10px;
  position: relative;
}

.title-rent::after {
  content: "";
  width: 200px;
  height: 4px;
  width: 323px;
  background-color: #d7b21d;
  position: absolute;
  margin-top: 0px;
}
.body-rent {
  margin-right: 17%;
  margin-left: 17%;
}
.card-rent {
  width: 331.64px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 390.67px;
  padding: 40px;
  margin-top: 20px;
  background: #ffffff;
  border: 0.871922px solid #f3f3f3;
  border-radius: 17.4384px;
}
.img-rent {

}
@media (max-width: 960px) {
  .img-rent {
padding-left: 30%;
padding-right: 30%;
}
}
@media (min-width: 1261px) {
  .card-rent {
    position: absolute;
    width: 331.64px;
    right: 432px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 390.67px;
    background: #ffffff;
    top: -100px;
    border: 0.871922px solid #f3f3f3;
    border-radius: 17.4384px;
  }
  .img-rent {
    position: absolute;
    top: 42px;
    right: 129px;
    left: 129px;
  }
  .card-rent {
    width: 331.64px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 390.67px;
    background: #ffffff;
    border: 0.871922px solid #f3f3f3;
    border-radius: 17.4384px;
  }
}

.body-card-rent {
  position: absolute;
  top: 146px;
  right: 40px;
  left: 40px;
}
.button-rent {
  border-radius: 10px;
  width: 246.75px;
  height: 54.93px !important;
}
</style>
