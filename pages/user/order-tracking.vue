<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="support-container flex-grow lg:pt-10 lg:px-2 xl:pl-10">

      <h1 class="mb-20 text-gray-800 text-2xl lg:text-4xl lg:mt-10 font-semibold">Order Tracking</h1>
      <Stepper  />

      <div class="track-container mx-auto lg:p-10 my-10 border border-solid border-ideeza">
        <nuxt-child></nuxt-child>

        <div v-if="trackStep <= 1" class="mt-20 flex justify-center items-center">
          <img class="avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="">
          <div class="mx-5">
            <span class="font-semibold block text-lg">John Snow</span>
            <span class="text-sm text-gray-500 block">Project Manager</span>
          </div>
          <button class="btn btn-normal btn--ideeza btn-text-bold btn--rounded px-8 py-4 text-lg" >Contact</button>
        </div>

        <div v-if="trackStep === 2" class="mt-10 flex flex-col justify-center items-center">
          <button class="mb-5 btn btn-normal btn--ideeza btn-text-bold btn--rounded px-16 py-6 text-lg">Approve</button>
          <nuxt-link to="/user/">
            <span class="font-semibold relative text-gray-700 text-xl">No delivery is made?</span>
          </nuxt-link>
        </div>

        <div v-if="trackStep === 3" class="mt-10 flex flex-col justify-center items-center">
          <nuxt-link to="/user/dashboard" class="btn btn-normal btn--ideeza btn-text-bold btn--rounded px-16 py-6 text-lg">
            Return to home page
          </nuxt-link>
        </div>
      </div>

    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
  import Stepper from '~/components/user/order-tracking/stepper.vue'
  import { mapMutations } from 'vuex'

  export default {
    layout: 'user',
    name: "tracking-index",
    components: {
      LeftMenu,
      Stepper
    },
    data: function () {
      return {
        routeTo: [
          '/user/order-tracking/making-product',
          '/user/order-tracking/delivery',
          '/user/order-tracking/pick-up',
          '/user/order-tracking/finish'
        ]
      }
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      },
      trackStep () {
        return this.$store.state.trackstepper.trackStep;
      }
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>
  .track-container{
    width: 100%;
    max-width: 1350px;
  }
  .avatar{
    @apply rounded-full;
    width: 95px;
    height: 95px;
  }
</style>
