<template>
  <div class="">
    <div class="curve-bg-gradient clearfix">
      <div class="curve-bg-top-img clearfix pb-0">
        <TopHeader>
        </TopHeader>
        <nuxt />
        <div class="container lg m-auto text-white bot-bg-CM pb-32 pt-12">
          <div class="pb-5 mt-12 mb-5 px-5">
            <h2 class="md:text-6xl text-4xl mt-5"><span class="font-bold">Talk</span> to a Human</h2>
            <div class="lg:w-1/2 sm:w-full">
              <p class="text-lg py-4 pr-5">Ideeza may be an AI maker assistant, but we’re certified flesh and blood. Reach out and touch base, ask for info, or simply say hello.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container lg m-auto mt-20">
      <div class="md:w-3/4 w-full m-auto">
        <div class="text-2xl pt-5 mt-12">
          <nuxt-link to="" class="text-pink-600 px-3">Contact Info</nuxt-link>
          <nuxt-link to="" class="text-gray-900 px-3">Write Us</nuxt-link>
        </div>
        <div class="shadow-lg">
          <div class="mt-5 md:w-3/5 sm:w-full m-auto text-center">
            <h2 class="text-gray-900 text-3xl font-bold  py-5">We love meeting makers</h2>
          </div>
          <div class="sm:flex flex-wrap text-center py-16">
            <div class="md:w-1/2 sm:w-full">
              <img src="~static/images/location.png" class="inline-block">
              <p class="text-gray-900 text-2xl font-bold mt-5 py-5">Israel, Netanya</p>
            </div>
            <div class="md:w-1/2 sm:w-full px-3">
              <img src="~static/images/phone.png" class="inline-block">
              <p class="text-gray-900 text-2xl font-bold mt-5 py-5">+123 456 868</p>
            </div>
          </div>
          <div class="my-16">
            <img src="~static/images/map.png" class="inline-block">
          </div>
        </div>
      </div>
    </div>
    <div class="curve-bg-gradient clearfix">
      <div class="curve-bg-footer-bg-img2 pt-32 clearfix">
        <div class="container lg m-auto text-white">
          <div class="mt-5 w-4/5  m-auto text-center">
            <h2 class="text-white md:text-3xl sm:text-3xl font-bold py-5 ">Join a growing maker community</h2>
            <button @click="showSignupModal=true" class="bg-pink-CM hover:bg-pink-400 text-white font-bold py-2 px-4 btn-lg rounded-full shadow-lg mt-5">Join Now</button>
          </div>
          <div class="w-full md:flex flex-wrap border-t-2 pb-10 mt-10 border-pink-600">
            <div class="flex-1 text-center md:text-left pt-5 w-full">
              <img src="~static/images/logo.png" class="inline-block">
            </div>
            <div class="flex-1 text-center md:text-center w-full text-white pt-10">© 2016 Ideeza All rights reserved</div>
            <div class="flex-1 text-center md:text-right w-full text-white pt-10">
              <nuxt-link to="" class="text-white px-3">Privacy Policy</nuxt-link> |
              <nuxt-link to="" class="text-white px-3">Term & Condition</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <login v-if="showLoginModal" @close="showLoginModal=false" @signup="showLoginModal=false;showSignupModal=true" @reset="showLoginModal=false;showResetModal=true;" />
    <signup v-if="showSignupModal" @close="showSignupModal=false" @login="showSignupModal=false;showLoginModal=true" @signup="showSignupModal=false;showEmailSignupModal=true;" />
    <reset-password v-if="showResetModal" @login="showLoginModal=true;showResetModal=false" @close="showResetModal=false" />
    <email-signup v-if="showEmailSignupModal" @close="showEmailSignupModal=false" @login="showLoginModal=true;showEmailSignupModal=false" />
  </div>
</template>
<script>
import TopHeader from '~/components/reusables/Header';
import Login from "~/components/reusables/Login.vue";
import Signup from "~/components/reusables/Signup.vue";
import EmailSignup from "~/components/reusables/EmailSignup.vue";
import ManufacturerEmailSignup from "~/components/reusables/ManufacturerEmailSignup.vue";
import ResetPassword from "~/components/reusables/ResetPassword.vue";
export default {
  components: {
    TopHeader,
    Login,
    Signup,
    ResetPassword,
    EmailSignup
  },
  data() {
    return {
      showLoginModal: false,
      showSignupModal: false,
      showResetModal: false,
      showEmailSignupModal: false,
      showManufacturerEmailSignupModal: false,
    }
  }
}

</script>
