<template>
  <div class="about d-bg-light-dark-2 ">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" sm="12" class="notfound">
          <div
            :class="$i18n.locale == 'ar' ? 'box-nopage-rtl' : 'box-nopage-ltr'"
          >
            <p
              :class="
                $i18n.locale == 'ar' ? 'text-title-rtl' : 'text-title-ltr'
              "
            >
              404
            </p>
            <p
              class="h6 d-text-warning"
              :class="$i18n.locale == 'ar' ? 'text-body-rtl' : 'text-body-ltr'"
            >
              {{$t('Pagenotfound')}}
            </p>
            <v-btn
              class="ma-2 d-border-radius"
              :class="$i18n.locale == 'ar' ? 'btn-back-rtl' : 'btn-back-ltr'"
              outlined
              href="/"
            >
              {{$t('Backtothemainpage')}}
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6" sm="12" class="pt-16">
          <img src="/images/404.svg" class="img-bontfound" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import i18n from "@/i18n";

export default {
  mounted() {
    document.title = i18n.t("not_found");
  }
};
</script>

<style scoped>
.notfound {
  position: relative;
}
.img-bontfound {
  width: inherit;
}

.box-nopage-rtl,
.box-nopage-ltr {
  width: inherit;
  height: 321px;
  background: #ffffff;
  box-shadow: 10px 10px 45px rgb(0 0 0 / 4%);
  border-radius: 10px;
  text-align: center;
}
.text-title-rtl,
.text-title-ltr {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 181px;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #6f6f6f;
}
@media (min-width: 945px) and (max-width: 1264px) {
  .img-bontfound {
    width: inherit;
    height: 640px;
  }
  .box-nopage-rtl {
    width: 80%;
    height: 175px;
    position: absolute;
    right: 175px;
    top: 250px;
  }
  .box-nopage-ltr {
    width: 80%;
    height: 175px;
    position: absolute;
    left: 175px;
    top: 250px;
  }
  .text-title-rtl {
    line-height: 100%;
    position: absolute;
    right: 100px;
    font-size: 100px;
  }
  .text-title-ltr {
    line-height: 130%;

    position: absolute;
    left: 100px;
    font-size: 100px;
  }
  .text-body-rtl {
    position: absolute;
    right: 60px;
    bottom: 0px;
  }
  .text-body-ltr {
    position: absolute;
    left: 60px;
    bottom: 0px;
  }
  .btn-back-rtl {
    position: absolute;
    right: 30px;
    bottom: -75px;
  }
  .btn-back-ltr {
    position: absolute;
    left: 30px;
    bottom: -75px;
  }
}
@media (min-width: 1265px) {
  .img-bontfound {
    width: 745px;
    height: 640px;
  }
  .box-nopage-rtl {
    position: absolute;
    right: 60px;
    top: 140px;
  }
  .box-nopage-ltr {
    position: absolute;
    left: 60px;
    top: 140px;
  }
  .text-title-rtl {
    line-height: 130%;

    position: absolute;
    right: 100px;
    font-size: 230px;
  }
  .text-title-ltr {
    line-height: 130%;

    position: absolute;
    left: 100px;
    font-size: 230px;
  }
  .text-body-rtl {
    position: absolute;
    right: 60px;
    bottom: 0px;
  }
  .text-body-ltr {
    position: absolute;
    left: 60px;
    bottom: 0px;
  }
  .btn-back-rtl {
    position: absolute;
    right: 30px;
    bottom: -75px;
  }
  .btn-back-ltr {
    position: absolute;
    left: 30px;
    bottom: -75px;
  }
}
</style>
