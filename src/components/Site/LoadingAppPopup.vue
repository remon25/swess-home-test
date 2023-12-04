<template>
    <div id="Popup" class="div-popup">
        <div id="AppPopup" class="App-Popup-dis">
            <button class="close-icon" :class="$i18n.locale == 'ar' ? 'right-icon' : 'left-icon'" @click="closePopup()">
                <img alt="close" width="20" src="images/close-icon.png">
            </button>
            <div class="title">{{ $t("DownloadMessage") }}</div>
            <a href="#">
                <img alt="google play" width="183px" height="60px" src="images/google_play.png">
            </a>
            <a href="#">
                <img alt="app store" width="183px" height="60px" src="images/app_store.png">
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: "LoadingAppPopup",
    methods: {
        closePopup() {
            document.getElementById('Popup').style.display = "none";
        },
        showPopup() {
            window.addEventListener('load', function () {
                var Popup = document.getElementById('AppPopup');
                Popup.classList.remove("App-Popup-dis");
                Popup.classList.add("App-Popup");
            })
        }
    },
    beforeMount() {
        this.showPopup();
    },

}
</script>
<style scoped>
.div-popup {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    z-index: 3;
    height: 100%;
    margin-top: -110px;
}

.App-Popup-dis {
    transform: scale(0);
    opacity: 0.5;
}

.App-Popup {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: #2170b4;
    color: white;
    width: 90%;
    padding: 30px;
    border-radius: 10px;
    line-height: 50px;
    box-shadow: 0px 0px 2px 0px;
    position: relative;
    box-shadow: 0px 0px 1px 0px black;
    transform: scale(1);
    transition: 0.5s;
}

.title {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 50px;
    text-align: center;
}

.close-icon {
    width: 20px;
    position: absolute;
    top: 2px;
}

@media screen and (min-width: 900px) {
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