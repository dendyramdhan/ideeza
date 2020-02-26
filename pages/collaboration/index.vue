<template>
  <div class="landingBanner-bg2">
    <top-header />
    <nuxt />
    <div class="w-full pb-32">
      <div class="container lg m-auto text-white mt-20 px-5 py-8">
        <div class="pb-5 mb-5 px-5 md:w-6/12 w-full">
          <p class="text-xl text-purple-900 font-bold pr-5">Together we grow the community knowledge to a new level.</p>
          <h2 class="md:text-3xl sm:text-4xl mt-5 font-bold text-gray-900">It's more then technology, it's your home!</h2>
          <p class="text-gray-700 text-2xl font-bold py-5 bg-i">
            <button @click="showSignupModal=true" class="text-white py-2 btn-md bg-ideeza inline-block text-center text-lg rounded-full">JOIN NOW</button>
          </p>
        </div>
      </div>
    </div>
    <div class="w-full relative py-6 mt-32">
      <div class="container lg m-auto">
        <div class="md:flex sm:block justify-end">
          <img src="~/static/images/ref_img_1248.png" class="md:absolute static left-0 max-width-half">
          <div class="md:w-6/12 sm:w-full pt-10 ">
            <div class="flex">
              <div class="pr-3">
                <img src="~/static/images/ref_img_1253.png">
              </div>
              <div class="">
                <h3 class="text-purple-900 text-2xl font-bold">The power of</h3>
                <h2 class="text-gray-900 text-4xl font-extrabold">OPEN SOURCE</h2>
              </div>
            </div>
            <p class="text-gray-700 text-lg py-5 ">The power of collaboration leads to amazing results, empowering the full potential of the world! It happens everywhere! especially in the knowledge field, where this movement created the 'Open Source Code' revolution to disrupt the traditional Code industry. Now we can give and receive from the community for the benefit of all of us</p>
            <p class="text-gray-700 text-lg py-5 ">Still if your goal is a physical product it might require more knowledge that you don't always have.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full relative mt-20 py-6">
      <div class="container lg m-auto ">
        <div class="md:flex sm:block">
          <div class="md:w-6/12 sm:w-full px-3">
            <div class="flex">
              <div class="pr-3">
                <img src="~/static/images/ref_img_1254.png">
              </div>
              <div class="">
                <h3 class="text-purple-900 text-2xl font-bold">Open source</h3>
                <h2 class="text-gray-900 text-4xl font-bold">PRODUCT</h2>
              </div>
            </div>
            <p class="text-gray-700 text-lg py-5">This is how the Open Source Product industry was created, where the collaboration enhanced to a higher level, so whether you are a Do It Yourself maker, a hobbyist or an engineer you will feel at home in the multi-disciplinary collaborations.</p>
            <p class="text-purple-900 font-bold">But what if you want to realize a unique idea? </p>
            <p class="text-ideeza font-bold">And it's not exactly the same. What if you want to produce it?</p>
          </div>
          <img src="~/static/images/ref_img_1249.png" class="md:absolute static right-0 max-width-half">
        </div>
      </div>
    </div>
    <div class="w-full relative py-6 mt-32">
      <div class="container lg m-auto">
        <div class="md:flex sm:block justify-end">
          <img src="~/static/images/ref_img_1250.png" class="md:absolute static left-0 max-width-half">
          <div class="md:w-6/12 sm:w-full pt-10 ">
            <div class="flex">
              <div class="pr-3">
                <img src="~/static/images/ref_img_1255.png">
              </div>
              <div class="">
                <h3 class="text-purple-900 text-2xl font-bold">Open source</h3>
                <h2 class="text-gray-900 text-4xl font-extrabold">KNOWLEDGE</h2>
              </div>
            </div>
            <h2 class="text-gray-700 text-3xl font-bold mt-5">Welcome to the future!</h2>
            <p class="text-gray-700 text-lg py-5 ">IDEEZA develops the new age of open source collaboration!
              We packed the crowd knowledge in small packages, and by using our Artificial Intelligence engines you will get the most precise hardware, code and coverage components for developing your idea by yourself! </p>
            <p class="text-purple-900 font-bold">No more imitation of what is already done!</p>
            <p class="text-ideeza font-bold">No more limitation!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container lg m-auto mt-20">
      <div class="mt-5 w-6/12  text-left">
        <h3 class="text-purple-900 text-2xl font-bold">Top notch public projects </h3>
        <h2 class="text-gray-900 text-4xl font-bold">made with IDEEZA</h2>
        <p class="text-gray-600 text-lg">Success Stories from Ideeza’s growing comunity</p>
      </div>
      <div class="md:flex sm:block mt-20">
        <div class="md:w-6/12 sm:w-full px-3">
          <img src="~static/images/silder-placeholder.png" class="inline-block">
        </div>
        <div class="md:w-6/12 sm:w-full px-3">
          <h2 class="text-gray-900 text-4xl font-extrabold">John Doe’s Dream</h2>
          <p class="text-gray-700 text-lg py-5 ">If you're on the fence on whether you need a big company behind you to succeed, these individuals prove that having vision and the drive is more than enough.</p>
          <p class="text-gray-700 text-2xl font-bold py-5 bg-i">
            <nuxt-link to="/success_story" class="text-white py-2 btn-md bg-ideeza inline-block text-center text-lg rounded-full">View Story</nuxt-link>
          </p>
        </div>
      </div>
    </div>
    <div class="w-full relative py-32 mt-32">
      <div class="container lg m-auto">
        <div class="md:flex sm:block">
          <div class="md:w-4/12 sm:w-full pt-10">
            <h3 class="text-purple-900 text-2xl font-bold">Make your</h3>
            <h2 class="text-gray-900 text-4xl font-extrabold">DREAMS COME TRUE</h2>
            <p class="text-gray-700 text-lg py-5 ">On top of this amazing capability, IDEEZAs platform uses an automated processes for PCB and 3D design, production optimization and a marketplace with the top notch service providers for production and more. For the first time, by one click, thousands of brains will come together to help you and provide your unique solution.</p>
            <p class="text-purple-900 font-bold">Thats all? </p>
            <p class="text-gray-700 text-2xl font-bold py-5 bg-i">
              <button @click="showSignupModal=true" to="" class="text-white py-2 btn-md bg-ideeza inline-block text-center text-lg rounded-full">Launch your Ideeza</button>
            </p>
          </div>
          <img src="~/static/images/ref_img_1252.png" class="md:absolute static right-0 max-width-half2">
        </div>
      </div>
    </div>
    <div class="w-full relative mt-20 py-6">
      <div class="container lg m-auto ">
        <div class="md:flex sm:block justify-end">
          <div class="md:w-6/12 sm:w-full px-3">
            <h3 class="text-purple-900 text-2xl font-bold">IDEEZAS</h3>
            <h2 class="text-gray-900 text-4xl font-bold">Assessment Certificate</h2>
            <p class="text-gray-700 text-lg py-5 ">There is more!<br />
              With us you are not transparent!<br />
              Your contribution to the community is not getting lost in crowd!<br />
              To give you the full reward for contributing to the community, you will get points according to your activities. That way you can stand out in our service providers list, so clients can find you easily in our marketplace for private jobs.</p>
            <p class="text-gray-700 text-lg py-5 ">In this way, we believe that we can thank you on behalf of the global open knowledge community.</p>
            <p class="text-gray-700 text-2xl font-bold py-5 bg-i">
              <nuxt-link to="/collaboration/points-level" class="text-white py-2 btn-md bg-ideeza inline-block text-center text-lg rounded-full">LEARN MORE</nuxt-link>
            </p>
          </div>
          <img src="~/static/images/ref_img_1251.png" class="md:absolute static left-0 max-width-half">
        </div>
      </div>
    </div>
    <div class="footer-bg bg-cover clearfix mt-24">
      <div class="curve-bg-gradient-new pt-8 clearfix">
        <div class="container lg m-auto text-white">
          <div class="mt-5 w-4/5  m-auto text-center">
            <h2 class="text-white md:text-3xl sm:text-3xl font-bold py-5 ">Join a growing maker community</h2>
            <button @click="showSignupModal=true" class="bg-pink-CM hover:bg-pink-400 text-white font-bold py-2 px-4 w-64 rounded-full shadow-lg mt-5">Join Now</button>
          </div>
          <div class="w-full md:flex flex-wrap border-t-2 pb-10 mt-10 border-pink-600">
            <div class="flex-1 text-center md:text-left pt-5 w-full">
              <img src="~static/images/logo-2.png" class="inline-block">
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
    EmailSignup,
    ManufacturerEmailSignup,
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
<style>
.landing-bg-gradient {
  background: rgb(98, 18, 156);
  background: linear-gradient(86deg, rgba(242, 3, 210, 1) 0%, rgba(98, 18, 156, 1) 100%);
}

.landingBanner-bg2 {
  background: url('~static/images/ref_img_1246.png') no-repeat right top;
  background-size: 70%;
}

.bg-pattern {
  background: url('~static/images/bg-pattren.png') no-repeat;
}

.footer-bg {
  background: url('~static/images/footer-bg.png') no-repeat center center;
}

.max-width-half {
  max-width: 45%;
  max-height: 100%;
  top: 0;
  bottom: 0;
  margin: auto;
}

.max-width-half2 {
  max-height: 100%;
  top: 0;
  bottom: 0;
  margin: auto;
}

.curve-bg-gradient-new {
  background: rgb(98, 18, 156);
  background: linear-gradient(180deg, rgba(98, 18, 156, 0.8) 0%, rgba(242, 3, 210, 0.8) 100%);
}

.video-sec {
  background: url('~static/images/chip-bg.png') no-repeat center center;
  background-size: 100%;
}

.idea-sec-bg-img {
  background: url('~static/images/ref_bg_1232.png') no-repeat center center;
}

@media(max-width:736px) {
  .max-width-half {
    max-width: 100%;
  }
}

</style>
