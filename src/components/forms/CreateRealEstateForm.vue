<template>
    <div class="flex-row w-100per mt-150px main-div">
        <div class="flex-1 flex-col">
            <div>
                <div class="d-text-dark d-block text-create">{{ $t("CreateRealEstateRequest") }}</div>
            </div>
            <div class="flex-row align-c justify-c w-100per mt-50px">
                <div class="flex-row border-button">
                    <div :class="tab == 'one' ? 'd-bg-light d-text-light' : 'd-bg-inactiv d-text-dark'">
                        <v-btn @click="  tab = 'one';" class="d-border-radius elevation-0 button-size"
                            style="font-size: small; border-radius: 4px !important" :class="tab == 'one'
                                ? 'd-bg-primary d-text-light'
                                : 'd-bg-inactiv d-text-dark'
                                ">{{ $t("sale") }}</v-btn>
                    </div>

                    <div :class="tab == 'two' ? 'd-bg-light d-text-light' : 'd-bg-inactiv d-text-dark'">
                        <v-btn @click="  tab = 'two';
                        " style="font-size: small; border-radius: 4px !important"
                            class="d-border-radius elevation-0 button-size" :class="tab == 'two'
                                ? 'd-bg-primary d-text-light'
                                : 'd-bg-inactiv d-text-dark'
                                ">{{ $t("rent") }}</v-btn>
                    </div>
                </div>
            </div>
            <div class="flex-row align-c justify-s mt-50px"
                :style="$i18n.locale == 'ar' ? 'margin-right: 20px' : 'margin-left: 20px'">
                <div class="flex-col align-c justify-c">
                    <img class="location-icon" width="20" height="20" src="icons/rang-price.png" alt="rang-price">
                </div>
                <div class="d-text-dark" :style="$i18n.locale == 'ar' ? 'margin-right: 10px' : 'margin-left: 10px'">
                    {{ $t("PriceField") }} :
                </div>
            </div>
            <div class="mt-20px w-300px" :style="$i18n.locale == 'ar' ? 'margin-right: 20px' : 'margin-left: 20px'">
                <selectComponent class="border-location h-40px" :errorMessages="location_idErrors"
                    :label="$t('locateTheProperty')" :items="Locations" attr="location_id" @select="(val) => {
                        form.location_id = val.value;
                    }
                        " />
            </div>
            <div class="flex-row align-c justify-s mt-50px"
                :style="$i18n.locale == 'ar' ? 'margin-right: 20px' : 'margin-left: 20px'">
                <div class="flex-col align-c justify-c">
                    <img class="location-icon" width="20" height="20" src="icons/home.svg" alt="home">
                </div>
                <div class="d-text-dark" :style="$i18n.locale == 'ar' ? 'margin-right: 10px' : 'margin-left: 10px'">
                    {{ $t("TypeProperty") }} :
                </div>
            </div>
            <div class="flex-row mt-20px w-300px"
                :style="$i18n.locale == 'ar' ? 'margin-right: 20px' : 'margin-left: 20px'">
                <div class="flex-col align-c justify-c"
                    :style="$i18n.locale == 'ar' ? 'margin-left: 15px' : 'margin-right: 15px'">
                    <button class="type-style" :class="{ 'active': locationArray[0].isActive }" @click="toggleActive(1)">
                        <img width="20" height="20" src="icons/homewhite.png">
                    </button>
                    <div class="type-font">{{ $t("home") }}</div>
                </div>
                <div class="flex-col align-c justify-c"
                    :style="$i18n.locale == 'ar' ? 'margin-left: 15px' : 'margin-right: 15px'">
                    <button class="type-style" :class="{ 'active': locationArray[1].isActive }" @click="toggleActive(2)">
                        <img width="20" height="20" src="icons/farm.png">
                    </button>
                    <div class="type-font">{{ $t("farm") }}</div>
                </div>
                <div class="flex-col align-c justify-c"
                    :style="$i18n.locale == 'ar' ? 'margin-left: 15px' : 'margin-right: 15px'">
                    <button class="type-style" :class="{ 'active': locationArray[2].isActive }" @click="toggleActive(3)">
                        <img width="20" height="20" src="icons/land.png">
                    </button>
                    <div class="type-font">{{ $t("land") }}</div>
                </div>
                <div class="flex-col align-c justify-c"
                    :style="$i18n.locale == 'ar' ? 'margin-left: 15px' : 'margin-right: 15px'">
                    <button class="type-style" :class="{ 'active': locationArray[3].isActive }" @click="toggleActive(4)">
                        <img width="20" height="20" src="icons/shop.png">
                    </button>
                    <div class="type-font">{{ $t("shop") }}</div>
                </div>
                <div class="flex-col align-c justify-c"
                    :style="$i18n.locale == 'ar' ? 'margin-left: 15px' : 'margin-right: 15px'">
                    <button class="type-style" :class="{ 'active': locationArray[4].isActive }" @click="toggleActive(5)">
                        <img width="20" height="20" src="icons/villa.png">
                    </button>
                    <div class="type-font">{{ $t("villa") }}</div>
                </div>
            </div>
            <div class="flex-row align-c justify-s mt-50px"
                :style="$i18n.locale == 'ar' ? 'margin-right: 20px' : 'margin-left: 20px'">
                <div class="flex-col align-c justify-c">
                    <img class="location-icon" width="20" height="20" src="icons/rang-price.png">
                </div>
                <div class="d-text-dark" :style="$i18n.locale == 'ar' ? 'margin-right: 10px' : 'margin-left: 10px'">
                    {{ $t("PriceField") }} :
                </div>
            </div>
            <div class="flex-row mt-20px" :style="$i18n.locale == 'ar' ? 'margin-right: 20px' : 'margin-left: 20px'">
                <div class="mt-15px flex-row align-c justify-c">
                    <div class="min-price-div flex-1">
                        <div>{{ $t("MinPrice") }}</div>
                        <div :style="$i18n.locale == 'ar' ? 'margin-left: 14px' : 'margin-right: 14px'">
                            <input class="input-price" type="text" :placeholder="$t('MinPrice')">
                        </div>
                    </div>
                    <div class="max-price-div flex-1">
                        <div>{{ $t("MaxPrice") }}</div>
                        <div :style="$i18n.locale == 'ar' ? 'margin-left: 14px' : 'margin-right: 14px'">
                            <input class="input-price" type="text" :placeholder="$t('MaxPrice')">
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-row align-c justify-s mt-50px"
                :style="$i18n.locale == 'ar' ? 'margin-right: 20px' : 'margin-left: 20px'">
                <div class="flex-col align-c justify-c">
                    <img class="location-icon" width="20" height="20" src="icons/note.png">
                </div>
                <div class="d-text-dark" :style="$i18n.locale == 'ar' ? 'margin-right: 10px' : 'margin-left: 10px'">
                    {{ $t("Notes") }} :
                </div>
            </div>
            <div class="note-input-div" :style="$i18n.locale == 'ar' ? 'margin-right: 20px' : 'margin-left: 20px'">
                <textarea class="input-note" type="text" :placeholder="$t('NoteText')"></textarea>
            </div>
            <div class="send-div flex-col" :style="$i18n.locale == 'ar' ? 'margin-right: 20px' : 'margin-left: 20px'">
                <button class="send-button">{{ $t("sendButton") }}</button>
            </div>
        </div>
        <div class="flex-1 flex-col align-c justify-s dis-none">
            <img class="image-style" src="images/home.webp">
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

import { validationMixin } from "vuelidate";
import {
    required,
} from "vuelidate/lib/validators";
import form from "@/store/form";

export default {
    mixins: [validationMixin],

    validations: {
        form: {
            location_id: { required },
        },
    },
    props: {
        tab: {
            default: "one"
        },

    },
    data: () => ({
        dd: [],
        locationArray: [{
            id: 1, isActive: false,
        }, {
            id: 2, isActive: false,
        }, {
            id: 3, isActive: false,
        }, {
            id: 4, isActive: false,
        },
        { id: 5, isActive: false, }
        ]
    }),
    computed: {
        ...mapGetters(["getLocations"]),
        location_idErrors() {
            const errors = [];
            if (!this.$v.form.location_id.$dirty) return errors;
            !this.$v.form.location_id.required &&
                errors.push("يرجى ملئ حقل  المكان");
            return errors;
        },
        Locations() {
            return this.getLocations;
        },
    },
    methods: {
        ...mapActions(["fetchLocations"]),
        search() {
            this.$v.form.$touch();
            if (!this.$v.form.$invalid) {
                let formdata = new FormData();
                for (let f in this.form) {
                    formdata.append(f, this.form[f]);
                }
                this.$store.dispatch('setForm', this.form)
                /*
                this.sendfilterEstate({
                  api:'estate/search/',
                  form:formdata,
                  page:0
                })*/
                this.$router.push('estates')
            } else {
                this.$toast.error("أكمل الحقول المطلوبة");
            }
        },
        toggleActive(id) {
            this.locationArray.forEach(location => {
                if (location.id == id) {
                    location.isActive = true;
                }
                else {
                    location.isActive = false;
                }
            });
        },
    },
    mounted() {
        this.fetchLocations("locations");
    },
};
</script>
<style scoped>
.flex-col {
    display: flex;
    flex-flow: column;
}

.flex-row {
    display: flex;
    flex-flow: row;
}

.align-c {
    align-items: center;
}

.align-s {
    align-items: start;
}


.justify-c {
    justify-content: center;
}

.justify-s {
    justify-content: start;
}

.flex-1 {
    flex: 1;
}

.w-100per {
    width: 100%;
}

.w-300px {
    width: 300px;
}

.h-40px {
    height: 40px;
}

img {
    border-radius: 4px;
}

.mt-150px {
    margin-top: 150px;
}

.mt-50px {
    margin-top: 50px;
}

.mt-20px {
    margin-top: 20px;
}

.mt-15px {
    margin-top: 15px;
}

.main-div {
    padding-left: 50px;
    padding-right: 50px;
}

.text-create {
    text-align: center;
    font-size: 30px;
}

.border-button {
    border: 1px solid #2170b4;
    padding: 2px;
    border-radius: 4px;
}

.button-size {
    width: 150px;
    height: 44px;
}

.border-location {
    border: 1px solid #2170b4;
    border-radius: 4px;
    padding: 2px;
}

.type-style {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: #2170b4;
    padding: 12px;
    cursor: pointer;
    width: 45px;
    height: 45px;
}

.min-price-div {
    display: flex;
    flex-flow: column;
    align-items: start;
    justify-content: center;
    font-size: 14px;
}

.max-price-div {
    display: flex;
    flex-flow: column;
    align-items: start;
    justify-content: center;
    font-size: 14px;
}

.input-price {
    border: 1px solid #2170b4;
    width: 100%;
    padding: 15px 5px;
    border-radius: 4px;
    margin-top: 10px;
}

.input-price:focus-visible {
    outline: none;
}

.note-input-div {
    margin-left: 18px;
    margin-right: 18px;
    margin-top: 15px;
    font-size: 12px;
}

.input-note {
    width: 90%;
    height: 175px;
    padding: 5px;
    border: 1px solid #2170b4;
    border-radius: 4px;
    font-size: 14px;
}

.input-note:focus-visible {
    outline: none;
}

.send-div {
    margin-top: 55px;
    align-items: start;
    justify-content: center;
}

.send-button {
    background-color: #2170b4;
    color: white;
    font-size: 15px;
    padding: 12px 50px;
    border-radius: 4px;
}

.image-style {
    width: 90%;
    height: 500px;
}

button.active {
    border: 1px solid black;
}

@media screen and (min-width: 320px) and (max-width: 500px) {
    .main-div {
        padding-left: 0px;
        padding-right: 0px;
    }

    .dis-none {
        display: none;
    }

    .button-size {
        width: 110px;
        height: 40px;
    }

    .text-create {
        font-size: 25px;
    }

    .w-300px {
        width: 90%;
    }

    .input-note {
        width: 100%;
    }

    .send-button {
        font-size: 12px;
        padding: 8px 35px;
    }

    .send-div {
        align-items: center;
        justify-content: center;
        margin-right: 0px !important;
    }

    .type-font {
        font-size: 12px
    }

    .input-note {
        font-size: 12px;
    }

}

@media screen and (min-width: 501px) and (max-width: 700px) {
    .main-div {
        padding-left: 0px;
        padding-right: 0px;
    }

    .dis-none {
        display: none;
    }

    .button-size {
        width: 110px;
        height: 40px;
    }

    .text-create {
        font-size: 25px;
    }

    .w-300px {
        width: 75%;
    }

    .input-note {
        width: 80%;
    }

    .send-button {
        font-size: 12px;
        padding: 8px 35px;
    }
    .type-font {
        font-size: 12px
    }

    .input-note {
        font-size: 12px;
    }
}

@media screen and (min-width: 701px) and (max-width: 1100px) {
    .main-div {
        padding-left: 20px;
        padding-right: 20px;
    }

    .button-size {
        width: 110px;
        height: 40px;
    }

    .text-create {
        font-size: 25px;
    }

    .w-300px {
        width: 90%;
    }

    .input-note {
        width: 100%;
    }

    .send-button {
        font-size: 12px;
        padding: 8px 35px;
    }


    .type-font {
        font-size: 12px
    }

    .image-style {
        width: 90%;
        height: 300px;
    }

}
</style>