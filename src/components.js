import Vue from 'vue'
import Navbar from "@/components/Site/NavBar";
import footerComponent from "@/components/Site/footer";
import switchLang from "./components/Site/switchLang";
import selectComponent from "./components/formComponents/select";
import Switcher from "./components/formComponents/Switcher";
import homeFilter from "./components/forms/homeFilter";
import homeFilterMobile from './components/forms/homeFilterMobile';
import officeFilter from "./components/forms/officeFilter";
import advanceFilter from "./components/forms/advanceFilter";
import Auth from "./components/forms/Auth";
import LoginForm from "./components/forms/login";
import RegisterForm from "./components/forms/Register";
import ResetPasswordForm from "./components/forms/resetPasswordForm";
import CreateRealEstateForm from "./components/forms/CreateRealEstateForm"
import ShareBox from "./components/forms/ShareBox";
import OfficeCard from "./components/Site/Office/OfficeCard";
import ArticalCard from "./components/Site/Artical/ArticalCard";
import LoadingAppPopup from "./components/Site/LoadingAppPopup";

import confirmForm from "./components/forms/confirmForm";
import EstateCard from "./components/Site/Estate/EstateCard";
import breadcrumbs from "./components/Site/breadcrumbs";

import contactForm from "./components/forms/contactForm";
import Carousal from "./components/Site/Carousal";

import confirm from "./components/forms/confirm";
import reportEstate from "./components/forms/reportEstate";

import SocialMedia from "./components/Site/SocialMedia";
import RentalOffices from "./components/Site/Home/RentalOffices";
import OurServices from "./components/Site/Home/OurServices";
import ReachWhatever from "./components/Site/Home/ReachWhatever";
import Articals from "./components/Site/Home/Articals";


Vue.component('Navbar', Navbar)
Vue.component('footerComponent', footerComponent)

Vue.component('switchLang', switchLang)
Vue.component('selectComponent', selectComponent)
Vue.component('Switcher', Switcher)

Vue.component('breadcrumbs', breadcrumbs)
Vue.component('OfficeCard', OfficeCard)
Vue.component('ArticalCard', ArticalCard)
Vue.component('LoadingAppPopup', LoadingAppPopup)



Vue.component('Carousal', Carousal)



Vue.component('ShareBox', ShareBox)
Vue.component('LoginForm', LoginForm)
Vue.component('RegisterForm', RegisterForm)
Vue.component('ResetPasswordForm', ResetPasswordForm)
Vue.component('CreateRealEstateForm', CreateRealEstateForm)
Vue.component('confirmForm', confirmForm)
Vue.component('contactForm', contactForm)
Vue.component('reportEstate', reportEstate)



Vue.component('advanceFilter', advanceFilter)


Vue.component('EstateCard', EstateCard)
Vue.component('confirm', confirm)


Vue.component('Articals', Articals)
Vue.component('ReachWhatever', ReachWhatever)
Vue.component('OurServices', OurServices)
Vue.component('RentalOffices', RentalOffices)

Vue.component('Auth', Auth)

Vue.component('officeFilter', officeFilter)
Vue.component('homeFilter', homeFilter)
Vue.component('homeFilterMobile', homeFilterMobile)
Vue.component('SocialMedia', SocialMedia)
export default {}