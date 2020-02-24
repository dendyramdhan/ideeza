<template>
  <div>
    <div class="px-5 md:flex sm:block py-4">
      <div class="md:w-2/12 sm:w-full logo">
        <nuxt-link to class="inline-block">
          <img src="~static/images/logo-2.png" />
        </nuxt-link>
        <div class="md:hidden float-right">
          <button @click="isOpen = !isOpen" type="button" class="block text-white hover:text-white focus:text-white focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="md:w-10/12 sm:w-full">
        <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 md:flex sm:p-0 justify-end">
          <ul class="flex items-center text-white text-right block">
            <li class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-2">
              <nuxt-link to="/about" class>About Us</nuxt-link>
            </li>
            <li class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-2">
              <nuxt-link to="/pricing" class>Pricing</nuxt-link>
            </li>
            <li class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-2">
              <nuxt-link to="/contact" class>Contact Us</nuxt-link>
            </li>
            <li class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-2">
              <nuxt-link to="/blog" class>Blog</nuxt-link>
            </li>
            <li class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-2">
              <nuxt-link to="/investor" class>Investor</nuxt-link>
            </li>
            <li class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-2">
              <nuxt-link to="/success_story" class>Success Story</nuxt-link>
            </li>
            <li class="md:inline-block sm:block text-left sm:border-b md:border-b-0  py-4 md:py-0 border-gray-400 px-2">
              <button class="text-white py-2 px-4 bg-ideeza inline-block text-center text-lg rounded-full cursor-pointer" @click="showLoginModal=true">Start Project</button>
            </li>
            <li v-if="!auth" style="cursor: pointer" class="md:inline-block sm:block text-left sm:border-b md:border-b-0  py-4 md:py-0 border-gray-400 px-2 border-r border-white" @click="showSignupModal=true">Sign Up </li>
            <li v-if="!auth" style="cursor: pointer" class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-2" @click="showLoginModal=true">Log In</li>
            <li v-else class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-2">
              <nuxt-link to="/user/profile" class>
                <div class="flex items-center" style="cursor: pointer">
                  <img class="h-8 w-8 rounded-full mr-2" src="https://randomuser.me/api/portraits/men/17.jpg" />
                  <span class="text-white inline-block">{{name}}</span>
                </div>
              </nuxt-link>
            </li>
            <li class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-2 social-link">
              <a href="https://www.linkedin.com/company/makeideeza" class="md:ml-0 mr-1 ml-5 md:ml-0 my-3 md:my-0 py-2 md:py-0 text-base text-white text-gray-300">
                <font-awesome-icon class="text-xl text-gray-500" :icon="['fab', 'linkedin']" />
              </a>
              <a href="https://twitter.com/MAKE_IDEEZA" class="md:my-0 my-3 mr-1 ml-5 md:ml-0 py-2 md:py-0 text-base text-white text-gray-300">
                <font-awesome-icon class="text-xl text-gray-500" :icon="['fab', 'twitter-square']" />
              </a>
              <a href="https://www.instagram.com/the_ideeza/" class="md:my-0 my-3 mr-1 ml-5 md:ml-0 py-2 md:py-0 text-base text-white text-gray-300">
                <font-awesome-icon class="text-xl text-gray-500" :icon="['fab', 'instagram']" />
              </a>
              <a href="https://www.facebook.com/makeideeza/" class="md:my-0 my-3 ml-5 md:ml-0 py-2 md:py-0 text-base text-white text-gray-300">
                <font-awesome-icon class="text-xl text-gray-500" :icon="['fab', 'facebook-square']" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <login v-if="showLoginModal" @close="showLoginModal=false" @signup="showLoginModal=false;showSignupModal=true" @reset="showLoginModal=false;showResetModal=true;" />
    <signup v-if="showSignupModal" @close="showSignupModal=false" @login="showSignupModal=false;showLoginModal=true" @signup="showSignupModal=false;showEmailSignupModal=true;" />
    <reset-password v-if="showResetModal" @login="showLoginModal=true;showResetModal=false" @close="showResetModal=false" />
    <email-signup v-if="showEmailSignupModal" @close="showEmailSignupModal=false" @login="showLoginModal=true;showEmailSignupModal=false" />
  </div>
</template>
<script>
import Login from "~/components/reusables/Login.vue";
import Signup from "~/components/reusables/Signup.vue";
import EmailSignup from "~/components/reusables/EmailSignup.vue";
import ResetPassword from "~/components/reusables/ResetPassword.vue";
export default {
  components: {
    Login,
    Signup,
    ResetPassword,
    EmailSignup,
  },
  data() {
    return {
      isOpen: false,
      showLoginModal: false,
      showSignupModal: false,
      showResetModal: false,
      showEmailSignupModal: false,
      name: "",
      auth: false
    };
  },

  mounted() {
    let authToken = window.$nuxt.$cookies.get("authToken");
    if (authToken != null) {
      this.auth = true;
      let firstname = window.$nuxt.$cookies.get("firstname");
      let lastname = window.$nuxt.$cookies.get("lastname");
      this.name = firstname + " " + lastname;
    } else {
      this.auth = false;
    }
  }
};

</script>
