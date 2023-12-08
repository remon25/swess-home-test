<template>
  <div id="Popup" class="div-popup">
    <div id="AppPopup" class="App-Popup-dis">
      <button
        class="close-icon"
        :class="$i18n.locale == 'ar' ? 'right-icon' : 'left-icon'"
        @click="closePopup()"
      >
        <img alt="close" width="20" src="images/close-icon.png" />
      </button>
      <!-- <div class="title">{{ $t("DownloadMessage") }}</div> -->
      <div class="popup-logo">
        <img src="images/log-j.png" alt="logo" />
      </div>
      <div class="popup-text">
        {{ $t("DownloadMessage") }}
      </div>
      <div class="popup-download">
        <a :href="getDownloadLink()" target="_blank"
          ><button>{{ $t("Download") }}</button></a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoadingAppPopup",
  methods: {
    closePopup() {
      document.getElementById("Popup").style.display = "none";
    },
    showPopup() {
      window.addEventListener("load", function () {
        var Popup = document.getElementById("AppPopup");
        Popup.classList.remove("App-Popup-dis");
        Popup.classList.add("App-Popup");
      });
    },
    getDownloadLink() {
      // Check if the user is on Android or iOS and return the appropriate download link
      const isAndroid = navigator.userAgent.toLowerCase().includes("android");
      const isiOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);

      if (isAndroid) {
        return "https://play.google.com/store/apps/details?id=com.real_estate.realestatecustomer&pli=1";
      } else if (isiOS) {
        return "https://apps.apple.com/us/app/swess-home/id1591728350?uo=4";
      } else {
        // Provide a default link for other devices or browsers
        return "https://play.google.com/store/apps/details?id=com.real_estate.realestatecustomer&pli=1";
      }
    },
  },
  beforeMount() {
    this.showPopup();
  },
};
</script>
<style scoped>
.div-popup {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 3;
}

.App-Popup-dis {
  transform: scale(0);
  opacity: 0.5;
}

.App-Popup {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #2170b4;
  color: white;
  width: 100%;
  box-shadow: 0px 0px 2px 0px;
  position: relative;
  box-shadow: 0px 0px 1px 0px black;
  transform: scale(1);
  transition: 0.5s;
}
.popup-logo img {
  width: 60px;
  height: auto;
  padding: 5px;
}
.popup-download  {
  background-color: #ffff;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
}
.title {
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 50px;
  text-align: center;
}
.link_container {
  display: flex;
}

.close-icon {
  width: 20px;
  position: absolute;
  top: 2px;
}

@media screen and (min-width: 801px) {
  .div-popup {
    display: none;
  }
}

.left-icon {
  left: 10px;
}

.right-icon {
  right: 10px;
}
</style>