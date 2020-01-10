<template>
  <div class="left-main-menu">
    <div class="menu-item">
      <nuxt-link to="/service-providers/dashboard">
        <DashBoardIcon class="fill-current mr-5" />Dashboard
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/service-providers/orders">
        <font-awesome-icon
          class="mr-5 w-8 h-8 align-text-top"
          :icon="['fas', 'shopping-cart']"
        />Orders
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/service-providers/projects">
        <ProjectsIcon class="fill-current mr-5" />Projects
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/service-providers/transactions">
        <font-awesome-icon
          class="mr-5 w-8 h-8 align-text-top"
          :icon="['far', 'list-alt']"
        />Transactions
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/service-providers/messages">
        <font-awesome-icon
          class="mr-5 w-8 h-8 align-text-top"
          :icon="['fas', 'comments']"
        />Messages
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/service-providers/help">
        <font-awesome-icon class="mr-5 w-8 h-8 align-text-top" :icon="['fas', 'info-circle']" /> Help
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import DashBoardIcon from "~/components/partials/icons/dashboard-icon.vue";
import ProjectsIcon from "~/components/partials/icons/bars-icon.vue";
import TaskIcon from "~/components/partials/icons/list-icon.vue";
export default {
  name: "user-menu-items",
  components: {
    DashBoardIcon,
    ProjectsIcon,
    TaskIcon
  }
};
</script>

<style scoped>
.menu-item {
  @apply flex mb-8 content-center items-center mt-2 text-gray-700 text-base font-semibold cursor-pointer;
}

.menu-item:hover {
  @apply text-ideeza;
}
.left-main-menu svg {
  @apply text-gray-500;
}
.menu-item:hover svg {
  @apply text-ideeza;
}
.active-link,
.active-link svg {
  @apply text-ideeza;
}
</style>
