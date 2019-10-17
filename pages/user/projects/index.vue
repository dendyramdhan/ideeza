<template>
  <div :class="{'hide-left-bar':!leftMenu}" class="flex main-panel">
    <!--  Left Side Bar  -->
    <LeftMenu/>

    <!-- Main Contents -->
    <div class="flex-grow">

      <div class="projects-container">
        <div class="lg:flex justify-between items-center pb-3">
          <h1 class="text-xl text-gray-800 font-semibold ">My projects</h1>
        </div>
        <div class="hidden lg:block flex">
          <div class="text-lg">view</div>
          <div class="ml-3"><img class="stroke-current text-ideeza" src="~/static/icons/long-view.svg" /> </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import LeftMenu from '~/components/user/common-left-side-menu.vue'
    export default {
      layout: 'user',
      name: "projects-index",
      components: {
        LeftMenu
      },
      computed: {
        leftMenu() {
          return this.$store.state.usermenu.openLeftMenu;
        }
      },
    }
</script>

<style scoped>
  .projects-container{
    width: 100%;
    max-width: 1330px;
    padding: 20px 5px;
  }
  @screen lg {
    .projects-container {
      padding: 60px 50px;
    }
  }
</style>
