<template>
  <div class="left-main-menu">
    <div class="menu-item">
      <nuxt-link to="/technician/dashboard">
        <DashBoardIcon class="fill-current mr-5" />Dashboard
      </nuxt-link>
    </div>
    <div class="menu-item">
      <nuxt-link to="/technician/management">
        <div>
          <ProjectsIcon class="fill-current mr-5" />Management
        </div>
        <div class="childs">

          <nuxt-link to="/technician/management/user-service-providers" class="block ml-12 text-gray-700 text-base mt-2"><font-awesome-icon class="mr-3 h-6 inline text-md text-gray-700" :icon="['fas', 'users']" /> User</nuxt-link>
          <nuxt-link to="/technician/management/added-parts/electronics" class="block ml-12 text-gray-700 text-base mt-2"><font-awesome-icon class="mr-3 h-6 inline text-md text-gray-700" :icon="['fas', 'bolt']" /> Electronics</nuxt-link>
          <nuxt-link to="/technician/management/categories/electronics" class="block ml-12 text-gray-700 text-base mt-2"><font-awesome-icon class="mr-3 h-6 inline text-md text-gray-700" :icon="['fas', 'network-wired']" /> Categories</nuxt-link>
          <nuxt-link to="/technician/management/projects" class="block ml-12 text-gray-700 text-base mt-2"><font-awesome-icon class="mr-3 h-6 inline text-md text-gray-700" :icon="['fas', 'project-diagram']" /> Projects</nuxt-link>
          <nuxt-link to="/technician/management/blogs" class="block ml-12 text-gray-700 text-base mt-2"><font-awesome-icon class="mr-3 h-6 inline text-md text-gray-700" :icon="['fas', 'bold']" /> Blogs</nuxt-link>
          <nuxt-link to="/technician/management/add-tech" class="block text-gray-700 ml-12 text-base mt-2"><font-awesome-icon class="mr-3 h-6 inline text-md text-gray-700" :icon="['fas', 'plus']" />Add Technician</nuxt-link>
          <nuxt-link to="/technician/management/orders" class="block text-gray-700 ml-12 text-base mt-2"><font-awesome-icon class="mr-3 h-6 inline text-md text-gray-700" :icon="['fas', 'clipboard-list']" /> Orders</nuxt-link>
          <div class="block text-gray-700 ml-12 text-base mt-2">
            <div @click="toggleServiceProviderMenu">
             <font-awesome-icon class="mr-3 h-6 inline text-md text-gray-700" :icon="['fab', 'fort-awesome']" /> Service Provider
            </div>
            <div class="childs" v-show="serviceProviderMenu">
              <nuxt-link to="/technician/management/service-provider/process" class="block ml-12 text-gray-700 text-base mt-2"><font-awesome-icon class="mr-3 h-6 inline text-md text-gray-700" :icon="['fab', 'pinterest-p']" /> Process</nuxt-link>
              <nuxt-link to="/technician/management/service-provider/machines" class="block ml-12 text-gray-700 text-base mt-2"><font-awesome-icon class="mr-3 h-6 inline text-md text-gray-700" :icon="['fas', 'robot']" /> Machines</nuxt-link>
              <nuxt-link to="/technician/management/service-provider/services" class="block ml-12 text-gray-700 text-base mt-2"> <font-awesome-icon class="mr-3 h-6 inline text-md text-gray-700" :icon="['fas', 'mobile']" /> Services</nuxt-link>
              <nuxt-link to="/technician/management/service-provider/certifications" class="block ml-12 text-gray-700 text-base mt-2"><font-awesome-icon class="mr-3 h-6 inline text-md text-gray-700" :icon="['fas', 'certificate']" /> Certifications</nuxt-link>
              <nuxt-link to="/technician/management/service-provider/corporations" class="block ml-12 text-gray-700 text-base mt-2"><font-awesome-icon class="mr-3 h-6 inline text-md text-gray-700" :icon="['fab', 'fort-awesome']" /> Corporations</nuxt-link>
            </div>
          </div>
        </div>
      </nuxt-link>
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
      serviceProviderMenu: false
    }
  },
  methods: {
    toggleServiceProviderMenu() {
      this.serviceProviderMenu = !this.serviceProviderMenu;
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

.active-link .childs {
  display: block;
}

</style>
