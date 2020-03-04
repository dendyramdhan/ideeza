<template>
  <div class="flex main-panel">
    <!-- Main Contents -->
    <div class="flex-grow mb-20">
      <div class="">
        <!-- <div class="header-bar lg:flex items-center">
          <nuxt-link class="header-menu block mb-2" to="/technician/management/user-service-providers">
            <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'users-cog']" /> User & Service Providers & Technician
          </nuxt-link>
          <nuxt-link class="header-menu block mb-2" to="/technician/management/added-parts/electronics">
            <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'puzzle-piece']" /> Added Parts
          </nuxt-link>
          <nuxt-link class="header-menu block mb-2" to="/technician/management/categories/electronics">
            <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'sitemap']" /> Categories
          </nuxt-link>
          <nuxt-link class="header-menu block mb-2" to="/technician/management/projects">
            <font-awesome-icon class="mr-5 h-6 inline text-xl" :icon="['fas', 'clipboard-list']" /> Project
          </nuxt-link>
          <nuxt-link class="header-menu block mb-2" to="/technician/management/blogs">
            Blogs
          </nuxt-link>
          <nuxt-link class="header-menu block mb-2" to="/technician/management/add-tech">
            Add new technician
          </nuxt-link>
        </div> -->
        <nuxt-child></nuxt-child>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "management-index",
}

</script>
<style scoped>
.main-contents {
  margin-top: 0px;
}

@screen sm {
  .header-bar a {
    @apply inline-block mb-0;
  }
}

.header-menu {
  @apply px-6 py-3 bg-white text-lg text-gray-600 cursor-pointer mr-6;
}

.header-menu:hover {
  @apply bg-ideeza-dark text-white;
}

.header-menu.active-link {
  @apply bg-ideeza-dark text-white;
}

</style>
