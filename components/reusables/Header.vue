<template>
  <div>
    <div class="px-5 md:flex sm:block py-4">
      <div class="md:w-1/4 sm:w-full logo">
        <nuxt-link to class="inline-block">
          <img src="~static/images/logo-1.png" />
        </nuxt-link>

        <div class="md:hidden float-right">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-white hover:text-white focus:text-white focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="md:w-2/3 sm:w-full">
        <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 md:flex sm:p-0 justify-end">
          <ul class="text-white text-right block">
            <li
              class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-5"
            >
              <nuxt-link to class>About Us</nuxt-link>
            </li>
            <li
            
              class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-5"
            >
              <nuxt-link to="/pricing" class>Pricing</nuxt-link>
            </li>
            <li
              class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-5"
            >
              <nuxt-link to="/user/support" class>Contact Us</nuxt-link>
            </li>

            <li
              class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-5 social-link"
            >
              <nuxt-link to class>
                <i class="fa fa-linkedin-square"></i>
              </nuxt-link>
              <nuxt-link to class>
                <i class="fa fa-twitter-square"></i>
              </nuxt-link>
              <nuxt-link to class>
                <i class="fa fa-instagram"></i>
              </nuxt-link>
              <nuxt-link to class>
                <i class="fa fa-facebook-square"></i>
              </nuxt-link>
            </li>
            <li style="cursor: pointer"
              class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-5"
              @click="showSignupModal=true"
            >Sign Up</li>

            <li style="cursor: pointer"
              class="md:inline-block sm:block text-left border-b md:border-0 py-4 md:py-0 border-gray-400 px-5"
              @click="showLoginModal=true"
            >Log In</li>
          </ul>
        </nav>
      </div>
    </div>
    <login
      v-if="showLoginModal"
      @close="showLoginModal=false"
      @signup="showLoginModal=false;showSignupModal=true"
      @reset="showLoginModal=false;showResetModal=true;"
    />
    <signup
      v-if="showSignupModal"
      @close="showSignupModal=false"
      @login="showSignupModal=false;showLoginModal=true"
      @signup="showSignupModal=false;showEmailSignupModal=true;"
    />
    <reset-password
      v-if="showResetModal"
      @login="showLoginModal=true;showResetModal=false"
      @close="showResetModal=false"
    />
    <email-signup
      v-if="showEmailSignupModal"
      @close="showEmailSignupModal=false"
      @login="showLoginModal=true;showEmailSignupModal=false"
    />
  </div>
</template>
<script>
import Login from "~/components/reusables/Login.vue";
import Signup from "~/components/reusables/Signup.vue";
import ResetPassword from "~/components/reusables/ResetPassword.vue";
import EmailSignup from "~/components/reusables/EmailSignup.vue";
export default {
  components: {
    Login,
    Signup,
    ResetPassword,
    EmailSignup
  },
  data() {
    return {
      isOpen: false,
      showLoginModal: false,
      showSignupModal: false,
      showResetModal: false,
      showEmailSignupModal: false
    };
  }
};
</script>