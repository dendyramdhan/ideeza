<template>
  <div class="flex flex-wrap items-start bg-white h-full shadow relative left-side-bar">

      <!--Left Menu-->
      <div class="left-main-menu p-10 relative w-full">
        <CommonMenuItems />
      </div>


    <LeftBotMenu class="flex-shrink sticky bottom-0 p-10 self-end w-full" />


  </div>
</template>

<script>
  import CommonMenuItems from '~/components/user/user-menu-items.vue'
  import LeftBotMenu from '~/components/user/left-menu-bot-items.vue'
  import DashBoardIcon from '~/components/partials/icons/dashboard-icon.vue'
  import ProjectsIcon from '~/components/partials/icons/bars-icon.vue'
  import TaskIcon from '~/components/partials/icons/list-icon.vue'
    export default {
        name: "common-left-side-menu",
      components: {
        CommonMenuItems,
        LeftBotMenu,
        DashBoardIcon,
        ProjectsIcon,
        TaskIcon,
      }
    }
</script>

<style scoped>
  .left-side-bar{
    width: 300px;
    min-width: 300px;
  }
  .left-main-menu{

  }
</style>
