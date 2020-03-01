<template>
  <div class="left-main-menu">
    <div class="menu-item">
      <nuxt-link to="/technician/dashboard">
        <DashBoardIcon class="fill-current mr-5" />Dashboard
      </nuxt-link>
    </div>
    <div class="menu-item" :class="{ shows: managementMenu }">
      <!-- <nuxt-link to="/technician/management/user-service-providers"> -->
        <div @click="toggleManagementMenu">
          <ProjectsIcon class="fill-current mr-5" />Management
        </div>
        <div :class="{ childs: !managementMenu }">
          <nuxt-link to="/technician/management/user-service-providers" class="block ml-12 text-gray-700 text-base mt-2">User</nuxt-link>
          <nuxt-link to="/technician/management/added-parts/electronics" class="block ml-12 text-gray-700 text-base mt-2">Electronics</nuxt-link>
          <nuxt-link to="/technician/management/categories/electronics" class="block ml-12 text-gray-700 text-base mt-2">Categories</nuxt-link>
          <nuxt-link to="/technician/management/projects" class="block ml-12 text-gray-700 text-base mt-2">Projects</nuxt-link>
          <nuxt-link to="/technician/management/blogs" class="block ml-12 text-gray-700 text-base mt-2">Blogs</nuxt-link>
          <nuxt-link to="/technician/management/add-tech" class="block text-gray-700 ml-12 text-base mt-2">Add Technician</nuxt-link>
          <nuxt-link to="/technician/management/orders" class="block text-gray-700 ml-12 text-base mt-2">Orders</nuxt-link>
          <div class="block text-gray-700 ml-12 text-base mt-2">
            <div @click="toggleServiceProviderMenu">
              Service Provider
            </div>
            <div v-show="serviceProviderMenu">
              <nuxt-link to="/technician/management/service-provider/process" class="block ml-12 text-gray-700 text-base mt-2">Process</nuxt-link>
              <nuxt-link to="/technician/management/service-provider/machines" class="block ml-12 text-gray-700 text-base mt-2">Machines</nuxt-link>
              <nuxt-link to="/technician/management/service-provider/services" class="block ml-12 text-gray-700 text-base mt-2">Services</nuxt-link>
              <nuxt-link to="/technician/management/service-provider/certifications" class="block ml-12 text-gray-700 text-base mt-2">Certifications</nuxt-link>
              <nuxt-link to="/technician/management/service-provider/corporations" class="block ml-12 text-gray-700 text-base mt-2">Corporations</nuxt-link>
            </div>
          </div>
        </div>
      <!-- </nuxt-link> -->
    </div>
    <div class="menu-item">
      <nuxt-link to="/technician/electronics/add-part">
        <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'bolt']" />Electronics
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/technician/code">
        <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'code']" />Code
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/technician/cover">
        <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'cube']" />Cover
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/technician/projects">
        <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'project-diagram']" />Projects
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/technician/tracking">
        <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'chalkboard']" />Tracking
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/technician/tasklist">
        <TaskIcon class="fill-current mr-5" />My Notes
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/technician/messages">
        <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'comments']" />Messages
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/technician/blog/list">
        <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'bold']" />Blog
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
  },
  data() {
    return {
      managementMenu: false,
      serviceProviderMenu: false
    }
  },
  methods: {
    toggleManagementMenu() {
      this.managementMenu = !this.managementMenu;
      if (this.managementMenu) {
        this.$router.push({
          path: '/technician/management/user-service-providers'
        })
      }
    },
    toggleServiceProviderMenu() {
      this.serviceProviderMenu = !this.serviceProviderMenu;
      if (this.serviceProviderMenu) {
        this.$router.push({
          path: '/technician/management/service-provider/process'
        }) 
      }
    }
  }
};

</script>
<style scoped>
.menu-item {
  @apply flex mb-8 content-center items-center mt-2 text-gray-700 text-xl font-semibold cursor-pointer;
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

.childs {
  display: none;
}

.shows {
  display: block;
}

.active-link .childs {
  display: block;
}

</style>
