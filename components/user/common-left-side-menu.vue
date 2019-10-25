<template>
  <div class="flex-shrink flex flex-col  p-10 bg-white h-full shadow left-side-bar">
    <div class="flex-shrink">


      <!--Left Menu-->
      <div class="mt-10 left-main-menu ">
        <div class="menu-item">
          <nuxt-link to="/user/dashboard">
            <DashBoardIcon class="fill-current mr-5" /> Dashboard
          </nuxt-link>
        </div>
        <div class="menu-item">
          <nuxt-link to="/user/projects">
            <ProjectsIcon class="fill-current mr-5" /> My Projects
          </nuxt-link>
        </div>
        <div class="menu-item">
          <nuxt-link to="/user/tasklist">
            <TaskIcon class="fill-current mr-5" /> Task List
          </nuxt-link>
        </div>
        <div class="menu-item">
          <nuxt-link to="/user/news">
            <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-top" :icon="['far', 'newspaper']"/> News Feed
          </nuxt-link>
        </div>
        <div class="menu-item">
          <nuxt-link to="/user/messages">
            <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-top" :icon="['fas', 'comments']"/> Messages
          </nuxt-link>
        </div>
        <div class="menu-item">

            <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-top" :icon="['fas', 'info-circle']"/> Help

        </div>
        <div class="menu-item">
          <nuxt-link to="/user/blog">
            <font-awesome-icon class="mr-5 w-8 h-8 text-2xl align-text-top" :icon="['fas', 'bold']"/> Blog
          </nuxt-link>

        </div>
      </div>
    </div>

    <LeftBotMenu class="flex-srink" />


  </div>
</template>

<script>
  import LeftBotMenu from '~/components/user/left-menu-bot-items.vue'
  import DashBoardIcon from '~/components/partials/icons/dashboard-icon.vue'
  import ProjectsIcon from '~/components/partials/icons/bars-icon.vue'
  import TaskIcon from '~/components/partials/icons/list-icon.vue'
    export default {
        name: "common-left-side-menu",
      components: {
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
  .menu-item{
    @apply flex mb-8 content-center items-center mt-2 text-gray-700 text-xl font-semibold cursor-pointer;
  }

  .menu-item:hover{
    @apply text-ideeza;
  }
  .left-main-menu svg{
    @apply text-gray-500;
  }
  .menu-item:hover svg{
    @apply text-ideeza;
  }
  .active-link,
  .active-link svg{
    @apply text-ideeza;
  }
</style>
