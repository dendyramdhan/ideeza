<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu />

    <!-- Main Contents -->
    <div class="support-container flex-grow lg:pt-10 px-2 lg:px-2 xl:pl-10">
      <h1 class="mb-20 text-gray-800 text-2xl lg:text-4xl lg:mt-10 font-semibold">Order Tracking</h1>
      <Stepper v-if="$route.query.id" :redirect="{path:'/user/projects/detail',query:{id:$route.query.id}}"/>
      <Stepper v-else/>

      <div
        class="track-container p-5 lg:p-10 my-10 border border-solid border-ideeza bg-white relative"
      >
        <nuxt-child></nuxt-child>
        <div v-if="trackStep === 0" class="mt-20 flex items-center">
          <div class="flex-1 inline-flex">
            <template v-if="$route.query.id">
              <nuxt-link tag="button" :to="'/user/order-tracking/timeline?id='+$route.query.id" class="make-product bg-white border text-ideeza-dark font-semibold rounded-lg px-10 py-6 z-10">Timeline</nuxt-link>
              <nuxt-link tag="button" :to="'/user/order-tracking/making-product?id='+$route.query.id" class="make-product bg-white border text-ideeza-dark font-semibold rounded-lg px-16 py-6 z-0 -ml-3">List</nuxt-link>
            </template>
            <template v-else> 
              <nuxt-link tag="button" to="/user/order-tracking/timeline" class="make-product bg-white border text-ideeza-dark font-semibold rounded-lg px-10 py-6 z-10">Timeline</nuxt-link>
              <nuxt-link tag="button" to="/user/order-tracking/making-product" class="make-product bg-white border text-ideeza-dark font-semibold rounded-lg px-16 py-6 z-0 -ml-3">List</nuxt-link>
            </template>
          </div>
          <div class="justify-center items-center flex">
            <img class="avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt />
            <div class="mx-5">
              <span class="font-semibold block text-lg">John Snow</span>
              <span class="text-sm text-gray-500 block">Project Manager</span>
            </div>
            <nuxt-link to="/user/messages">
              <button
                class="btn btn-normal shadow-lg text-white btn-ideeza-gradient btn-text-bold btn--rounded px-8 py-4 text-lg"
              >Contact</button>
            </nuxt-link>
          </div>
          <div class="flex-1"></div>
        </div>

        <div v-if="trackStep === 2" class="mt-10 flex flex-col justify-center items-center">
          <nuxt-link to="/user/order-tracking/finish">
            <button
              class="mb-5 btn btn-normal shadow-lg text-white btn-ideeza-gradient btn-text-bold btn--rounded px-16 py-6 text-lg"
            >Approve</button>
          </nuxt-link>
          <nuxt-link to="/user/order-tracking/delivery">
            <span class="font-semibold relative text-gray-700 text-xl">
              <u>No delivery is made?</u>
            </span>
          </nuxt-link>
        </div>

        <div v-if="trackStep === 3" class="mt-10 flex flex-col justify-center items-center">
          <nuxt-link
            to="/user/dashboard"
            class="btn btn-normal btn--ideeza btn-text-bold btn--rounded px-16 py-6 text-lg"
          >Return to home page</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "~/components/user/common-left-side-menu.vue";
import Stepper from "~/components/user/order-tracking/stepper.vue";
import { mapMutations } from "vuex";

export default {
  middleware: "auth",
  layout: "user",
  name: "tracking-index",
  components: {
    LeftMenu,
    Stepper
  },
  data: function() {
    return {
      routeTo: [
        "/user/order-tracking/making-product",
        "/user/order-tracking/delivery",
        "/user/order-tracking/pick-up",
        "/user/order-tracking/finish"
      ]
    };
  },
  computed: {
    leftMenu() {
      return this.$store.state.usermenu.openLeftMenu;
    },
    trackStep() {
      return this.$store.state.trackstepper.trackStep;
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.track-container {
  width: 100%;
  max-width: 1350px;
}
.avatar {
  @apply rounded-full;
  width: 95px;
  height: 95px;
}
.btn-ideeza-gradient {
  background: linear-gradient(to left, #ff00c7, #ffb1ec);
}
.nuxt-link-exact-active.make-product{
  @apply text-white bg-ideeza z-20;
}
</style>
