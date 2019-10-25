<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="support-container flex-grow lg:pt-10 lg:px-5 xl:px-20">

      <h1 class="text-gray-800 text-2xl lg:text-4xl lg:mt-10 font-semibold">Support Center</h1>

      <!--Big Buttons-->
      <div class="big-buttons-container flex flex-wrap lg:flex-no-wrap justify-between mt-10 border-b heading-border pb-5">
        <div class="big-button">
          <span class="">Email</span>
        </div>
        <div class="big-button">
          <span>Chat</span>
        </div>
        <div class="big-button">
          <span>Phone</span>
          <img class="absolute-center-h-v hidden lg:inline" src="~/static/images/phone.png" alt="">
        </div>
      </div>

      <EmailSupport />
    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
  import EmailSupport from '~/components/support/email.vue'

  export default {
    layout: 'user-help',
    name: "support-index",
    components: {
      LeftMenu,
      EmailSupport
    },
    data: function () {
      return {}
    },
    computed: {
      leftMenu() {
        return this.$store.state.usermenu.openLeftMenu;
      }
    },
    mounted() {

    },
    methods: {}
  }
</script>

<style scoped>
  .support-container{
    width: 100%;
    max-width: 1380px;
  }
  .big-buttons-container{
    width: 100%;

  }
  .big-button{
    @apply mt-5 relative shadow-md bg-white border border-solid border-gray-300 font-semibold text-gray-800 text-xl cursor-pointer;
    width: 170px;
    height: 100px;
  }
  .big-button span{
    @apply absolute bottom-0 left-0 p-5;

  }
  @screen lg{
    .big-button{
      @apply text-4xl;
      width: 430px;
      height: 200px;
    }

  }

</style>
