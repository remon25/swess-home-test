<template>
  <footer style="background: #F3F3F3; margin-top: 100px;">
    <v-container>

      <v-row class="row-footer">
        <v-col cols="12" md="3" v-for="(item, i) in items" :key="i">
          <v-card-title class="footer-title">
            <p class="h6 dark--text text-center">
              {{ $t(`${item.title}`) }}
            </p>
          </v-card-title>
          <ul style="background: #F3F3F3;">
            <li>
              <v-list-item style="background: #F3F3F3;" v-for="(child, j) in item.children" :key="j">
                <v-list-item-content>
                  <v-list-item-title class="subtitle1">
                    <router-link class="nav-link d-text-dark_gray" :to="child.link">{{ $t(`${child.title}`) }}
                    </router-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" md="3">
          <v-card-title class="footer-title">
            <p class="h6 dark--text text-center">
              {{ $t("contactUs") }}
            </p>
          </v-card-title>
          <ul style="background: #F3F3F3;">
            <li>
              <v-list-item style="background: #F3F3F3;">
                <v-list-item-content>
                  <v-list-item-title class="subtitle1"><a class="nav-link d-text-dark_gray"
                      href="https://goo.gl/maps/Pmdn1ADtadKFuYHX6" target="_blank">{{
                        $t('Address')
                      }}</a></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </li>
            <li>
              <v-list-item style="background: #F3F3F3;">
                <v-list-item-content>
                  <v-list-item-title class="subtitle1"><a class="nav-link d-text-dark_gray" href="tel:+963967850485"><span
                        dir="ltr">{{ $t('teleCompany') }}</span></a></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </li>
            <li>
              <v-list-item style="background: #F3F3F3;">
                <v-list-item-content>
                  <v-list-item-title class="subtitle1"><a class="nav-link d-text-dark_gray"
                      href="mailto:Service@Swesshome.com">{{ $t('companyEmail') }}</a></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" md="3">
          <v-card-title class="footer-title">
            <p class="h6 dark--text text-center">
              {{ $t("latestNews") }}
            </p>
          </v-card-title>
          <p class="nav-link d-text-dark_gray subtitle1">
            {{ $t("getLatestNews") }}
          </p>

          <v-row class="ml-1 mr-1 mb-4 align-baseline">
            <v-col cols="3" v-for="(item, i) in menuItems" :key="i">
              <a :href="item.path" target="_blank" aria-label="go to social media">
                <img :src="item.icon" width="25px" height="25px" alt="social media icons" /></a>
            </v-col>
          </v-row>

          <ul>
            <!-- <v-list-item>
              <v-list-item-content>
                <ul>
                  <li class="d-inline mx-md-3 mx-lg-3  mx-2 " v-for="(item, i) in menuItems" :key="i">
                    <a :href="item.path" target="_blank"><img :src="item.icon" /></a>
                  </li>
                </ul>
              </v-list-item-content>
            </v-list-item> -->
            <li>
              <v-list-item>
                <a href="https://play.google.com/store/apps/details?id=com.real_estate.realestatecustomer" target="_blank"
                  aria-label="go to social media"><img width="183px" height="60px" src="/images/google_play.png"
                    alt="social media icons" /></a>
              </v-list-item>
            </li>
            <li>
              <v-list-item>
                <a href="https://apps.apple.com/us/app/swess-home/id1591728350?uo=4" target="_blank"
                  aria-label="go to social media">
                  <img width="183px" height="60px" src="/images/app_store.png" alt="social media icons" /></a>
              </v-list-item>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>


    <div style="height: 30px; display: block; color: #fff" class="d-bg-dark text-center">{{ $t("copyright") }}</div>
  </footer>
</template>
<script>
export default {
  name: "footerComponent",
  data: () => ({
    menuItems: [
      { icon: "/icons/linkedin.svg", path: "https://www.linkedin.com/company/swesshome/" },
      { icon: "/icons/facebook.svg", path: "https://www.facebook.com/Swesshome/" },
      { icon: "/icons/bi_instagram.svg", path: "https://instagram.com/swesshome?igshid=YmMyMTA2M2Y=" },
    ],
    items: [
      {
        title: "swesshome",
        children: [
          { title: "MainPage", link: "/" },
          { title: "sale", link: "/Sale" },
          { title: "rent", link: "/rent" },
          { title: "estate_office", link: "/offices" },
          { title: "articals", link: "/articals" },
        ],
      },
      {
        title: "whoUs",
        children: [
          { title: "whoUs", link: "/who-us" },
          { title: "callUs", link: "/call-us" },
          { title: "privacyPolicy", link: "/privacy-policy" },
        ],
      },

    ],

  }),
};
</script>
<style >
.row-footer {
  padding: 19px 0px;
}

.footer-title:after {
  content: "";
  width: 200px;
  height: 2px;
  background-color: #d7b21d;
  position: absolute;
  margin-top: 34px;
}

li {
  list-style: none;
}
</style>
