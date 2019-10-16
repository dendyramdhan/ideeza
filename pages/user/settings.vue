<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="bg-gray-200 flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow lg:py-10 lg:px-10">
      <nuxt-child></nuxt-child>

    </div>

  </div>


</template>

<script>
  import LeftMenu from '~/components/user/settings/left-side-menu.vue'

  export default {
    layout: 'user',
    name: "settings-index",
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
  .main-panel {
    transition: all 0.3s ease-in;
  }

  .main-panel.hide-left-bar {
    margin-left: -300px;
  }


</style>
