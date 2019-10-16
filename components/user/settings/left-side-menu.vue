<template>
  <div class="flex-shrink flex flex-col  p-10 bg-white h-full shadow left-side-bar">
    <div class="flex-shrink">


      <!--Left Menu-->
      <div class="mt-10 left-main-menu ">
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


  </div>
</template>

<script>
  export default {
    name: "settings-left-side-menu"
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
    @apply flex mb-5 content-center items-center mt-2 text-gray-600 text-lg font-semibold cursor-pointer;
  }
  .menu-item:hover{
    @apply text-gray-800;
  }

</style>
