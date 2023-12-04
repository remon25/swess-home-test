<template>
  <div>
    <div class="mt-5 d-bg-light-dark-2">
      <!--
      <breadcrumbs :items="items"> </breadcrumbs>
      -->
    </div>
    <v-container class="my-10">
      <p class="h4 d-text-primary">{{ $t("privacyPolicy") }}</p>
      <p class="h6 mt-5">{{ $t("preamble") }}</p>
      <p class="body1 mt-5">
        {{ $t("intro") }}
      </p>

      <p class="body1 mt-5">
        {{$t('privce1')}}
      </p>
      <p class="body1 mt-5">
        {{$t('privce2')}}
      </p>
       <div>
        <p class="subtitle1  pt-5  d-inline">
            {{$t('email')}}
          </p>  <a class="nav-link"
                  href="mailto:Service@Swesshome.com"
                  
                  >
          <p class="body1 px-5 d-inline">{{$t('companyEmail')}}</p></a>
        </div>
        <div>
          <p class="subtitle1  pt-5  d-inline">{{$t('telephone')}}</p>
          <a 
                  class="nav-link"
                  href="tel:+963967850485"
                  
                  >
          <p class="body1 px-5 d-inline" dir="ltr">{{$t('teleCompany')}}</p>
       </a> </div>
       <p class="h6 mt-5">
        {{ $t("Howwecollectyourinformation") }}
      </p>
      <p class="body1 mt-5">
        {{$t('HowwecollectyourinformationText')}}
      </p>
      <p class="h6 mt-5">{{$t('Wecollectinformation')}}</p>
      <p class="body1 mt-5">
        <ul>
          <li>{{$t('collect1')}}</li>
          <li>{{$t('collect2')}}</li>
        </ul>
      </p>
      <p class="h6 mt-5">{{$t('Useofyourinformation')}}</p>
      <p class="body1 mt-5">{{$t('yourInformationText')}}</p>
            <p class="body1 mt-5">
        <ul>
          <li>{{$t('collect1')}}</li>
          <li>{{$t('collect2')}}</li>
        </ul>
      </p>
            <p class="body1 mt-5">{{$t('yourInformationText')}}</p>
            <p class="body1 mt-5">
        <ul>
          <li>{{$t('yourInformation1')}}</li>
          <li>{{$t('yourInformation2')}}</li>
          <li>{{$t('yourInformation3')}}</li>
        </ul>
      </p>
                  <p class="body1 mt-5">{{$t('yourInformationText2')}}</p>
            <p class="body1 mt-5">
        <ul>
          <li>{{$t('yourInformation5')}}</li>
          <li>{{$t('yourInformation6')}}</li>
          <li>{{$t('yourInformation7')}}</li>
          <li>{{$t('yourInformation8')}}</li>
          <li>{{$t('yourInformation9')}}</li>
          <li>{{$t('yourInformation10')}}</li>
          <li>{{$t('yourInformation11')}}</li>
          <li>{{$t('yourInformation12')}}</li>
        </ul>
      </p>
                        <p class="body1 mt-5">{{$t('yourInformationTail')}}</p>
                        <p class="h6 mt-5">{{$t('Directmarketing')}}</p>
                        <p class="body1 mt-5">{{$t('marketingD')}}</p>

                             <p class="h6 mt-5">{{$t('Servicedescription')}}</p>
            <p class="body1 mt-5">
        <ul>
          <li>{{$t('ServicedBody1')}}</li>
          <li>{{$t('ServicedBody2')}}</li><li>{{$t('ServicedBody3')}}</li>

        </ul>
      </p>

      <p class="h6 mt-5">{{$t('Subscriberaccount')}}</p>
                        <p class="body1 mt-5">{{$t('SubscriberBody')}}</p>

                      <p class="h6 mt-5">{{$t('Yourrights')}}</p>
                        <p class="body1 mt-5">{{$t('YourrightsBody1')}}</p>
                        <p class="body1 mt-5">{{$t('YourrightsBody2')}}</p>
                        <p class="body1 mt-5">{{$t('YourrightsBody3')}}</p>
   
      <p class="h6 mt-5">{{$t('ChangesOurprivacy')}}</p>
                        <p class="body1 mt-5">{{$t('ChangesprivacyBody')}}</p>

                              <p class="h6 mt-5">{{$t('Ourgoal')}}</p>
                        <p class="body1 mt-5">{{$t('OurgoalBody')}}</p>

                              <p class="h6 mt-5">{{$t('Youraccount')}}</p>
                        <p class="body1 mt-5">{{$t('youraccountBody')}}</p>

                              <p class="h6 mt-5">{{$t('Serviceavailability')}}</p>
                        <p class="body1 mt-5">{{$t('ServiceBody')}}</p>

                              <p class="h6 mt-5">{{$t('Ourregularly')}}</p>
                        <p class="body1 mt-5">{{$t('OurregularlyBody')}}</p>
      

                              <p class="h6 mt-5">{{$t('Complainssuggestions')}}</p>
                        <p class="body1 mt-5">{{$t('ComplainssuggestionsBody')}}</p>
      
      


    </v-container>
  </div>
</template>

<script>
import i18n from "@/i18n";

export default {
  name: "privacyPolicy",
  data: () => ({
    items: [
      {
        text: "main",
        disabled: true,
        class: "d-text-dark body1",
        href: "/",
      },
      {
        text: "privacyPolicy",
        disabled: false,
        class: "d-text-natural body1",
        href: "/privacy-policy",
      },
    ],
  }),
  mounted() {
    document.title = i18n.t("privacy_page");
  }
};
</script>
