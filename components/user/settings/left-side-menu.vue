<template>
  <div class="flex-shrink flex flex-col   bg-white h-full shadow left-side-bar">
    <div class="flex-shrink">
      <div class="my-5 flex justify-center items-center">
        <div @click="activeMenu='settings'" class="font-semibold mr-5 cursor-pointer" :class="{'text-ideeza underline': activeMenu === 'settings'}" >Settings</div>
        <div @click="activeMenu='menu'" class="font-semibold cursor-pointer" :class="{'text-ideeza underline': activeMenu === 'menu'}" >Menu</div>
      </div>

      <div v-if="activeMenu === 'settings'">
        <div class="px-10 left-main-menu ">
          <div class="menu-item">
            <nuxt-link to="/user/settings/general" >General</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/user/settings/notifications" >Notifications</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/user/settings/payment-methods" >Payment Methods</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/user/settings/payout-methods" >Payout Preferences</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/user/settings/transaction-history" >Transaction History</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/user/settings/privacy" >Privacy</nuxt-link>
          </div>
          <div class="menu-item">
            <nuxt-link to="/user/settings/security" >Security</nuxt-link>
          </div>
        </div>
      </div>

      <div v-if="activeMenu === 'menu'" class="px-10">
        <CommonMenu />
      </div>

      <LeftBotMenu class="px-10" />

      <!--Left Menu-->

    </div>


  </div>
</template>

<script>
  import CommonMenu from '~/components/user/user-menu-items.vue'
  import LeftBotMenu from '~/components/user/left-menu-bot-items.vue'
  export default {
    name: "settings-left-side-menu",
    components: {
      LeftBotMenu,
      CommonMenu
    },
    data: function () {
      return {
        activeMenu: 'settings'
      }
    }
  }
</script>

<style scoped>
  .left-side-bar{
    width: 300px;
    min-width: 300px;
  }
  .active-link{
    @apply text-gray-800;
  }
  .menu-item{
    @apply flex mb-5 content-center items-center text-gray-600 text-lg font-semibold cursor-pointer;
  }
  .menu-item:hover{
    @apply text-gray-800;
  }

</style>
