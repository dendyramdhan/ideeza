<template>
  <div class="flex flex-col bg-white h-full shadow relative left-side-bar">
    <div class="pt-20 px-10 pb-10 flex justify-center items-center relative w-full  ">
      <div @click="activeMenu='settings'" class="font-semibold mr-5 cursor-pointer border-ideeza border px-3 py-1" :class="{'bg-ideeza text-white': activeMenu === 'settings'}">Settings</div>
      <div @click="activeMenu='menu'" class="font-semibold cursor-pointer border-ideeza border px-3 py-1" :class="{'bg-ideeza text-white': activeMenu === 'menu'}">Menu</div>
    </div>
    <div class="relative w-full px-10" v-if="activeMenu === 'settings'">
      <div class="menu-item">
        <nuxt-link to="/admin/settings/general">General</nuxt-link>
      </div>
      <div class="menu-item">
        <nuxt-link to="/admin/settings/notifications">Notifications</nuxt-link>
      </div>
      <div class="menu-item">
        <nuxt-link to="/admin/settings/privacy">Privacy</nuxt-link>
      </div>
      <div class="menu-item">
        <nuxt-link to="/admin/settings/security">Security</nuxt-link>
      </div>
      <div class="menu-item">
        <nuxt-link to="/admin/settings/add-executive">Add new executive</nuxt-link>
      </div>
    </div>
    <div v-if="activeMenu === 'menu'">
      <CommonMenu />
    </div>
  </div>
</template>
<script>
import CommonMenu from '~/components/admin/common-left-side-menu.vue'
export default {
  name: "settings-left-side-menu",
  components: {
    CommonMenu
  },
  data: function() {
    return {
      activeMenu: 'settings'
    }
  }
}

</script>
<style scoped>
.left-side-bar {
  width: 300px;
  min-width: 300px;
}

.active-link {
  @apply text-gray-800;
}

.menu-item {
  @apply mb-5 text-gray-600 text-lg font-semibold cursor-pointer;
}

.menu-item:hover {
  @apply text-gray-800;
}

</style>
