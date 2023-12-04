<!-- eslint-disable -->
<template>
  <div :class="$i18n.locale == 'ar' ? 'socialMedia-rtl' : 'socialMedia-ltr'">
    <ul>
      <li v-for="(item, i) in menuItems" :key="i">
        <a :href="item.path" target="_blank">
          <img :src="item.icon" alt="icon" width="25px" height="25px"/></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: () => ({
    menuItems: [
      { icon: "icons/linkedin.svg", path: "https://www.linkedin.com/company/swesshome/" },
      { icon: "icons/facebook.svg", path: "https://www.facebook.com/Swesshome/" },
      { icon: "icons/bi_instagram.svg", path: "https://instagram.com/swesshome?igshid=YmMyMTA2M2Y=" },
    ],
  }),
};
</script>

<style scoped>
.socialMedia-rtl {
  position: absolute;
  right: 56px;
  top: 250px;
}
.socialMedia-ltr {
  position: absolute;
  left: 56px;
  top: 250px;
}
ul {
  list-style-type: none;
}
li {
  text-align: center;
  padding-bottom: 38px ;
}
</style>
