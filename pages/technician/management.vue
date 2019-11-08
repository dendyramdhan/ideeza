<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="main-contents">

        <!--Header Bar-->
        <div class="header-bar lg:flex items-center">
           <nuxt-link class="header-menu" to="/technician/management/user-service-providers">
             <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'users-cog']"/> User & Service Providers
           </nuxt-link>

          <nuxt-link class="header-menu" to="/technician/management/added-parts">
            <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'puzzle-piece']"/> Added Parts
          </nuxt-link>

          <nuxt-link class="header-menu" to="/technician/management/categories">
            <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'sitemap']"/> Categories
          </nuxt-link>

          <nuxt-link class="header-menu" to="/technician/management/questions">
            <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'clipboard-list']"/> Question Algorithm
          </nuxt-link>

          <nuxt-link class="header-menu" to="/technician/management/projects">
            <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'clipboard-list']"/> Projects
          </nuxt-link>


        </div>
        <nuxt-child></nuxt-child>
      </div>


    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/technician/common-left-side-menu.vue'

  export default {
    layout: 'technician',
    name: "management-index",
    components: {
      LeftMenu
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
  .header-menu{
    @apply px-6 py-3 bg-white text-lg text-gray-600 cursor-pointer mr-6;
  }
  .header-menu:hover{
    @apply bg-ideeza-dark text-white;
  }
  .header-menu.active-link{
    @apply bg-ideeza-dark text-white;
  }
</style>
