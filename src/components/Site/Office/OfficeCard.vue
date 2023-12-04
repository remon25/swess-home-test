<template>
  <div>
    <v-container>
      <v-card outlined class="office-card mt-15 pa-5">
        <a style="text-decoration: none" :href="/office/ + id">
        <v-row no-gutters>
          <v-col cols="12" sm="12" md="6">
            <div>
              <p class="subtitle1 d-text-primary">{{ name }}</p>
              <a style="text-decoration: none" class="d-text-primary body1" :href="'tel:' + phone">
                <span dir="ltr">{{ phone }}</span>
                <v-icon>mdi-phone</v-icon>
              </a>

              <br><br>

              <a style="text-decoration: none" class="d-text-primary body1" :href="'https://wa.me/' + phone">
                <span dir="ltr">{{ phone }}</span>
                <img src="/icons/whatsapp.svg" class="mx-3" alt="whatsapp" />
              </a>

              <p class="subtitle1 d-text-primary mt-5">{{ $t('Address') }}</p>
              <p class="body1 d-text-dark_gray">{{ location }}</p>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <div class="float-md-end ">
              <div class="mx-auto">
                <v-img lazy-src="/images/logo.jpeg" class="d-border-radius float-md-end " :class="
                  contract == 4
                    ? 'contract-gold'
                    : contract == 3
                      ? 'contract-pron'
                      : contract == 2
                        ? 'contract-selver'
                        : 'contract-free'
                " :src="`${img_baseUrl}${logo}`" width="154.88px" height="92.21px"></v-img>
              </div>
              <!-- <v-btn width="220" height="37" class="ma-2 elevation-0 d-border-radius mt-15 mb-4"
                style="background: #f3f3f3" :href="/office/ + id">
                <span class="subtitle2 my-5">{{ $t('Details') }}</span>
              </v-btn> -->
            </div>
          </v-col>
        </v-row>
      </a>

        <v-divider class="mt-4"></v-divider>
        <div class="mt-2">
          <div class="d-md-inline mx-5">
            <p class="d-inline subtitle2 d-text-primary">
              {{ $t('NumberofEstateforrent') }} :
            </p>
            <span class="mx-2">{{ rent }}</span>
          </div>
          <div class="d-md-inline mx-5">
            <p class="d-inline subtitle2 d-text-primary">
              {{ $t('NumberofEstateforsale') }} :
            </p>
            <span class="mx-2">{{ sale }}</span>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { img_baseUrl } from "@/plugins/axios";
export default {
  props: {
    name: {
      default: "",
    },
    phone: {
      default: "",
    },
    rent: {
      default: "",
    },
    sale: {
      default: "",
    },
    logo: {
      default: "",
    },
    location: {
      default: "",
    },
    id: {
      default: "",
    },
    contract: {
      default: 1
    }
  },
  data() {
    return {
      img_baseUrl,
    };
  },
};
</script>
<style scoped>
.office-card {
  width: 972px;
  background: #ffffff;
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.1);
  border-radius: 10.4437px;
}

.contract-selver {
  border-top: 5px solid #a7a7a7;
  border-bottom: 5px solid #a7a7a7;
}

.contract-free {
  border-top: 5px solid #ffffff;
  border-bottom: 5px solid #ffffff;
}

.contract-pron {
  border-top: 5px solid #cd7f32;
  border-bottom: 5px solid #cd7f32;
}

.contract-gold {
  border-top: 5px solid #bd9d1c;
  border-bottom: 5px solid #bd9d1c;
}
</style>
